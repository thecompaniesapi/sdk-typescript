import type { Client, FetchResponse } from 'openapi-fetch'
import type { operations, paths } from './schema'
import { createFetch } from 'ofetch'
import createOpenApiClient from 'openapi-fetch'
import { operationsMap } from './schema'
import { querySerializer } from './utils'

const defaultParams = {
  apiToken: undefined,
  apiUrl: 'https://api.thecompaniesapi.com',
}

type TcaClient = Client<paths>

function createHttpClient(
  params: {
    apiToken?: string
    apiUrl?: string
    visitorId?: string
  } = defaultParams,
): TcaClient {
  const baseUrl = params.apiUrl || 'https://api.thecompaniesapi.com'

  // Create a fetch client with a 300 second timeout enabling sync requests
  const fetch = createFetch(
    {
      defaults: {
        baseURL: baseUrl,
        timeout: 300 * 1000,
        headers: {
          'Authorization': `Basic ${params.apiToken || ''}`,
          'Tca-Visitor-Id': params.visitorId || '',
        },
      },
    },
  ).native

  const client = createOpenApiClient<paths>({
    baseUrl,
    fetch,
    querySerializer: query => querySerializer(query).string,
  })

  client.use(
    {
      onRequest: async ({ request }) => {
        // Add token to all requests
        request.headers.set('Authorization', `Basic ${params.apiToken}`)

        // Support visitorId
        if (params.visitorId) {
          request.headers.set('Tca-Visitor-Id', params.visitorId)
        }
      },
    },
  )

  return client
}

type OperationsClient = {
  [K in keyof typeof operationsMap]: (
    params?: typeof operationsMap[K]['method'] extends 'get'
      ? operations[K]['parameters']['path'] | operations[K]['parameters']['query']
      : operations[K]['parameters']['path'] | (operations[K]['requestBody'] extends { content: { 'application/json': infer T } } | undefined ? T : object)
  ) => Promise<FetchResponse<operations[K], object, `application/json`>>
}

export default function createClient(
  params: {
    apiToken?: string
    apiUrl?: string
    visitorId?: string
  } = defaultParams,
): OperationsClient {
  const client = createHttpClient(params)

  const operations = Object.entries(operationsMap).reduce(
    (acc, [key, pathValue]) => {
      acc[key] = async (params: any) => {
        // Grab path params from operationMap to properly pass them to client
        const pathParams = Object
          .entries(params || {})
          .reduce(
            (acc, [key, value]) => {
              if ((pathValue?.pathParams as any)?.includes(key)) {
                acc[key] = value
                delete params[key]
              }

              return acc
            },
            {} as Record<string, any>,
          )

        if (pathValue.method === 'get') {
          return await client.GET(pathValue.path, {
            params: {
              path: pathParams as any,
              query: params as any,
            },
          })
        }

        if (pathValue.method === 'post') {
          return await client.POST(pathValue.path, {
            params: {
              path: pathParams as any,
            },
            body: params as any,
          })
        }

        if (pathValue.method === 'patch') {
          return await client.PATCH(pathValue.path, {
            params: {
              path: pathParams as any,
            },
            body: params,
          })
        }
      }

      return acc
    },
    {} as Record<string, any>,
  )

  return operations as unknown as OperationsClient
}
