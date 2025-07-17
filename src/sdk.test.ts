import { describe, expect, it } from 'vitest'
import { operationsMap } from './schema'
import createClient from './sdk'

function getTcaClient(overwriteParams?: {
  apiToken?: string
  apiUrl?: string
}) {
  const client = createClient({
    apiToken: process.env.TCA_API_TOKEN,
    apiUrl: process.env.TCA_API_URL,
    ...(overwriteParams || {}),
  })

  return client
}

describe('should', () => {
  it('can create client', () => {
    const client = getTcaClient()

    expect(client).toBeDefined()
    expect(Object.keys(client).length).toEqual(Object.keys(operationsMap).length)
  })

  it('can fetch openapi client', async () => {
    const client = getTcaClient()

    const { data } = await client.fetchOpenApi()

    expect(data).toBeDefined()

    // Get operations from schema
    const operationsCount = Object.values(data?.paths || {}).reduce<number>(
      (acc, operations) => {
        return acc + Object.keys(operations as Record<string, any>).length
      },
      0,
    )

    // Compare operations from pulled schema with operations built locally
    expect(operationsCount).toEqual(Object.keys(operationsMap).length)
  })

  it('can fetch company', async () => {
    const client = getTcaClient()

    const { data } = await client.fetchCompany({
      domain: 'microsoft.com',
    })

    expect(data).toBeDefined()
  })

  it('can search companies with post and get params', async () => {
    const client = getTcaClient()

    const { data } = await client.searchCompanies({
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

    const { data: dataPost } = await client.searchCompaniesPost({
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

    const companiesNames = data?.companies.map((company: any) => company.about?.name).sort()
    const companiesNamesPost = dataPost?.companies.map((company: any) => company.about?.name).sort()

    expect(JSON.stringify(companiesNames)).toEqual(JSON.stringify(companiesNamesPost))
    expect(data?.companies.length).toBe(3)
    expect(data?.companies?.filter((company: any) => company.about?.industries?.includes('higher-education')).length).toBe(3)
    expect(dataPost?.companies.length).toBe(3)
    expect(dataPost?.companies?.filter((company: any) => company.about?.industries?.includes('higher-education')).length).toBe(3)
  })
})
