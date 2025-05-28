import { describe, expect, it } from 'vitest'
import { operationsMap } from './src/schema'
import { createClient, createHttpClient } from './src/sdk'

function getTcaClient(overwriteParams?: {
  apiKey?: string
  apiUrl?: string
}) {
  const base = createHttpClient({
    apiKey: process.env.TCA_API_KEY,
    apiUrl: process.env.TCA_API_URL,
    ...overwriteParams,
  })

  const operations = createClient({
    apiKey: process.env.TCA_API_KEY,
    apiUrl: process.env.TCA_API_URL,
    ...overwriteParams,
  })

  return { base, operations }
}

describe('should', () => {
  it('can create client', () => {
    const { base, operations } = getTcaClient()

    expect(base).toBeDefined()
    expect(operations).toBeDefined()
    expect(Object.keys(operations).length).toEqual(Object.keys(operationsMap).length)
  })

  it('can fetch openapi client', async () => {
    const { base, operations } = getTcaClient()

    const { data } = await base.GET('/v2/openapi')
    const { data: dataOperations } = await operations.fetchOpenApi()

    expect(data).toBeDefined()
    expect(dataOperations).toBeDefined()

    // Get operations from schema
    const operationsCount = Object.values(data?.paths || {}).reduce<number>(
      (acc, operations) => {
        return acc + Object.keys(operations as Record<string, any>).length
      },
      0,
    )
    const operationsCountOperations = Object.values(dataOperations?.paths || {}).reduce<number>(
      (acc, operations) => {
        return acc + Object.keys(operations as Record<string, any>).length
      },
      0,
    )

    // Compare operations from pulled schema with operations built locally
    expect(operationsCount).toEqual(Object.keys(operationsMap).length)
    expect(operationsCountOperations).toEqual(Object.keys(operationsMap).length)
  })

  it('can fetch company', async () => {
    const { base, operations } = getTcaClient()

    const { data } = await base.GET('/v2/companies/{domain}', {
      params: {
        path: {
          domain: 'microsoft.com',
        },
      },
    })

    const { data: dataOperations } = await operations.fetchCompany({
      domain: 'microsoft.com',
    })

    expect(data).toBeDefined()
    expect(dataOperations).toBeDefined()
  })

  it('can search companies with post and get params', async () => {
    const { base, operations } = getTcaClient()

    const { data } = await base.GET('/v2/companies', {
      params: {
        query: {
          query: [
            {
              attribute: 'about.industries',
              operator: 'or',
              sign: 'equals',
              values: ['higher-education'],
            },
          ],
          size: 3,
        },
      },
    })
    const { data: dataOperations } = await operations.searchCompanies({
      query: [
        {
          attribute: 'about.industries',
          operator: 'or',
          sign: 'equals',
          values: ['higher-education'],
        },
      ],
      size: 3,
    })

    const { data: dataPost } = await base.POST('/v2/companies', {
      body: {
        query: [
          {
            attribute: 'about.industries',
            operator: 'or',
            sign: 'equals',
            values: ['higher-education'],
          },
        ],
        size: 3,
      },
    })

    const { data: dataOperationsPost } = await operations.searchCompaniesPost({
      query: [
        {
          attribute: 'about.industries',
          operator: 'or',
          sign: 'equals',
          values: ['higher-education'],
        },
      ],
      size: 3,
    })

    const companiesNames = data?.companies.map(company => company.about?.name).sort()
    const companiesNamesOperations = dataOperations?.companies.map(company => company.about?.name).sort()
    const companiesNamesPost = dataPost?.companies.map(company => company.about?.name).sort()
    const companiesNamesOperationsPost = dataOperationsPost?.companies.map(company => company.about?.name).sort()

    expect(JSON.stringify(companiesNames)).toEqual(JSON.stringify(companiesNamesPost))
    expect(JSON.stringify(companiesNamesOperations)).toEqual(JSON.stringify(companiesNamesOperationsPost))
    expect(data?.companies.length).toBe(3)
    expect(data?.companies?.filter(company => company.about?.industries?.includes('higher-education')).length).toBe(3)
    expect(dataPost?.companies.length).toBe(3)
    expect(dataPost?.companies?.filter(company => company.about?.industries?.includes('higher-education')).length).toBe(3)
  })
})
