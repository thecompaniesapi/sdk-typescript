# The Companies API SDK for TypeScript

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

A fully-featured TypeScript SDK for [The Companies API](https://www.thecompaniesapi.com), providing type-safe access to company data, locations, industries, technologies, job titles, lists, and more.

If you need more details about a specific endpoint, you can find the corresponding documentation in [the API reference](https://www.thecompaniesapi.com/api).

You can also contact us on our [livechat](https://www.thecompaniesapi.com/) if you have any questions.

## 🚀 Features

- Type-safe API client with full TypeScript support from our [OpenAPI](https://api.thecompaniesapi.com/v2/openapi) schema
- Powerful search capabilities with filters, sorting and pagination
- Real-time company enrichment with both synchronous and asynchronous options
- Create and manage your company lists
- Track and monitor enrichment actions and requests
- Generate detailed analytics and insights for searches and lists
- Natural language querying for structured company information
- Lightweight with minimal dependencies
- Promise-based async/await interface

## 📦 Installation

```bash
# with npm
npm install @thecompaniesapi/sdk

# with yarn
yarn add @thecompaniesapi/sdk

# with pnpm
pnpm add @thecompaniesapi/sdk
```

## 🔑 Initialize the client

Get your API token from [your settings page](https://www.thecompaniesapi.com/settings/api-tokens) and initialize our client with `createClient`.

The API token is required to authenticate your requests and should be kept secure. Never commit your API token to version control or share it publicly.

```typescript
import createClient from '@thecompaniesapi/sdk'

const tca = createClient({
  apiToken: 'your-api-token',
})
```

## 🏬 Companies

### Search companies

📖 [Documentation](https://www.thecompaniesapi.com/api#companies-search)

🕹️ [Use case: How to build a company search engine with our API](https://www.thecompaniesapi.com/use-cases/companies-search-engine)

🔍 To learn more about our query system, please read our [use case documentation](https://www.thecompaniesapi.com/use-cases/companies-search-engine).

```typescript
// Search companies by industry and size
await tca.searchCompanies({
  query: [
    { attribute: 'about.industries', operator: 'or', sign: 'equals', values: ['computer-software'] },
    { attribute: 'about.totalEmployees', operator: 'or', sign: 'equals', values: ['10-50'] }
  ],
  size: 25
})

const companies = response.data.companies // Companies that match the query
const meta = response.data.meta // Meta information
```

### Search companies by name

📖 [Documentation](https://www.thecompaniesapi.com/api#companies-search-name)

🕹️ [Use case: Add a company search with autocomplete to your application](https://www.thecompaniesapi.com/use-cases/company-autocomplete)

```typescript
const response = await tca.searchCompaniesByName({
  name: 'The Companies API',
  size: 2
})

const companies = response.data.companies // Companies that match the name
const meta = response.data.meta // Meta information
```

### Search companies using a prompt

📖 [Documentation](https://www.thecompaniesapi.com/api#companies-search-prompt)

```typescript
// Search 25 companies for a specific prompt
const response = await tca.searchCompaniesByPrompt({
  prompt: 'SaaS Companies in the United States with more than 100 employees',
  size: 25
})

const companies = response.data.companies // Companies that match the prompt
const meta = response.data.meta // Meta information
```

### Search similar companies

📖 [Documentation](https://www.thecompaniesapi.com/api#companies-search-similar)

```typescript
// Search 25 companies that are similar to Crisp and Intercom
const response = await tca.searchSimilarCompanies({
  domains: ['crisp.chat', 'intercom.com'],
  size: 25
})

const companies = response.data.companies // Companies that are similar to the domains
const meta = response.data.meta // Meta information
```

### Count companies matching your query

📖 [Documentation](https://www.thecompaniesapi.com/api#companies-count)

```typescript
// Count how many companies are in the computer-software industry
const response = await tca.countCompanies({
  query: [
    {
      attribute: 'about.industries',
      operator: 'or',
      sign: 'equals',
      values: ['computer-software']
    }
  ]
})

const count = response.data // Number of companies that match the query
```

### Enrich a company from a domain name

📖 [Documentation](https://www.thecompaniesapi.com/api#companies-enrich-from-domain)

```typescript
// Fetch company data from our database without enrichment (faster response)
const response = await tca.fetchCompany({
  domain: 'microsoft.com'
})

const company = response.data // The company profile

// Fetch company data and re-analyze it in real-time to get fresh, up-to-date information (slower but more accurate)
const response = await tca.fetchCompany({
  domain: 'microsoft.com',
  refresh: true
})

const company = response.data // The company profile
```

### Enrich a company from an email

📖 [Documentation](https://www.thecompaniesapi.com/api#companies-enrich-from-email)

🕹️ [c Enrich your users at signup with the latest information about their company](https://www.thecompaniesapi.com/use-cases/enrich-users-signup)

```typescript
// Fetch the company profile behind a professional email address
const response = await tca.fetchCompanyByEmail({
  email: 'jack@openai.com'
})

const company = response.data // The company profile
```

### Enrich a company from a social network URL

📖 [Documentation](https://www.thecompaniesapi.com/api#companies-enrich-from-social-network-url)

```typescript
// Fetch the company profile behind a social network URL
const response = await tca.fetchCompanyBySocial({
  linkedin: 'https://www.linkedin.com/company/apple'
})

const company = response.data // The company profile
```

### Find a company email patterns

📖 [Documentation](https://www.thecompaniesapi.com/api#companies-find-email-patterns)

```typescript
// Fetch the company email patterns for a specific domain
const response = await tca.fetchCompanyEmailPatterns({
  domain: 'apple.com'
})

const patterns = response.data // The company email patterns
```

### Ask a question about a company

📖 [Documentation](https://www.thecompaniesapi.com/api#companies-ask)

```typescript
// Ask what products a company offers using its domain
const response = await tca.askCompany({
  domain: 'microsoft.com',
  question: 'What products does this company offer?',
  model: 'large', // 'small' is also available
  fields: [
    {
      key: 'products',
      type: 'array|string',
      description: 'The products that the company offers'
    }
  ]
})

const answer = response.data.answer // Structured AI response
const meta = response.data.meta // Meta information
```

### Fetch the context of a company

📖 [Documentation](https://www.thecompaniesapi.com/api#companies-fetch-context)

```typescript
// Get AI-generated strategic insights about a company
const response = await tca.fetchCompanyContext({
  domain: 'microsoft.com'
})

const context = response.data.context // Includes market, model, differentiators, etc.
const meta = response.data.meta // Meta information
```

### Fetch analytics data for a query or your lists

📖 [Documentation](https://www.thecompaniesapi.com/api#companies-fetch-analytics)

```typescript
// Analyze company distribution by business type
const response = await tca.fetchCompaniesAnalytics({
  attribute: 'about.businessType',
  query: [
    {
      attribute: 'locations.headquarters.country.code',
      operator: 'or',
      sign: 'equals',
      values: ['us', 'gb', 'fr']
    }
  ]
})

const analytics = response.data.data // Aggregated values
const meta = response.data.meta // Meta information
```

### Export analytics data in multiple formats for a search

📖 [Documentation](https://www.thecompaniesapi.com/api#companies-export-analytics)

```typescript
// Export analytics to CSV
const response = await tca.exportCompaniesAnalytics({
  format: 'csv',
  attributes: ['about.industries', 'about.totalEmployees'],
  query: [
    {
      attribute: 'technologies.active',
      operator: 'or',
      sign: 'equals',
      values: ['shopify']
    }
  ]
})

const analytics = response.data.data // Aggregated values
const meta = response.data.meta // Meta information
```

## 🎯 Actions

### Request an action on one or more companies

📖 [Documentation](https://www.thecompaniesapi.com/api#actions-request-action)

```typescript
// Request an enrichment job on multiple companies
const response = await tca.requestAction({
  domains: ['microsoft.com', 'apple.com'],
  job: 'enrich-companies',
  estimate: false
})

const actions = response.data.actions // Track this via fetchActions
const meta = response.data.meta // Meta information
```

### Fetch the actions for your actions

📖 [Documentation](https://www.thecompaniesapi.com/api#actions-fetch)

```typescript
// Fetch recent actions
const response = await tca.fetchActions({
  status: 'completed',
  page: 1,
  size: 5
})

const actions = response.data.actions // Actions that match the query
const meta = response.data.meta // Meta information
```

## 🏭 Industries

### Search industries

📖 [Documentation](https://www.thecompaniesapi.com/api#industries-search)

```typescript
// Search industries by keyword
const response = await tca.searchIndustries({
  search: 'software',
  size: 10
})

const industries = response.data.industries // Industries that match the keyword
const meta = response.data.meta // Meta information
```

### Find similar industries

📖 [Documentation](https://www.thecompaniesapi.com/api#industries-find-similar)

```typescript
// Find industries similar to given ones
const response = await tca.searchIndustriesSimilar({
  industries: ['saas', 'fintech']
})

const similar = response.data.industries // Industries that are similar to the given ones
const meta = response.data.meta // Meta information
```

## ⚛️ Technologies

### Search technologies

📖 [Documentation](https://www.thecompaniesapi.com/api#technologies-search)

```typescript
// Search technologies by keyword
const response = await tca.searchTechnologies({
  search: 'shopify',
  size: 10
})

const technologies = response.data.technologies // Technologies that match the keyword
const meta = response.data.meta // Meta information
```

## 🌍 Locations

### Search cities

📖 [Documentation](https://www.thecompaniesapi.com/api#locations-search-cities)

```typescript
// Search cities by name
const response = await tca.searchCities({
  search: 'new york',
  size: 5
})

const cities = response.data.cities // Cities that match the name
const meta = response.data.meta // Meta information
```

### Search counties

📖 [Documentation](https://www.thecompaniesapi.com/api#locations-search-counties)

```typescript
// Search counties by name
const response = await tca.searchCounties({
  search: 'orange',
  size: 5
})

const counties = response.data.counties // Counties that match the name
const meta = response.data.meta // Meta information
```

### Search states

📖 [Documentation](https://www.thecompaniesapi.com/api#locations-search-states)

```typescript
// Search states by name
const response = await tca.searchStates({
  search: 'california',
  size: 5
})

const states = response.data.states // States that match the name
const meta = response.data.meta // Meta information
```

### Search countries

📖 [Documentation](https://www.thecompaniesapi.com/api#locations-search-countries)

```typescript
// Search countries by name
const response = await tca.searchCountries({
  search: 'france',
  size: 5
})

const countries = response.data.countries // Countries that match the name
const meta = response.data.meta // Meta information
```

### Search continents

📖 [Documentation](https://www.thecompaniesapi.com/api#locations-search-continents)

```typescript
// Search continents by name
const response = await tca.searchContinents({
  search: 'asia',
  size: 5
})

const continents = response.data.continents // Continents that match the name
const meta = response.data.meta // Meta information
```

## 💼 Job titles

### Enrich a job title from its name

📖 [Documentation](https://www.thecompaniesapi.com/api#job-titles-enrich-from-name)

```typescript
// Enrich "chief marketing officer"
const response = await tca.enrichJobTitles({
  name: 'chief marketing officer'
})

const jobTitle = response.data // Contains department, seniority, etc.
```

## 📋 Lists

### Fetch your lists

📖 [Documentation](https://www.thecompaniesapi.com/api#lists-fetch-lists)

```typescript
// Fetch your lists
const response = await tca.fetchLists()

const lists = response.data.lists // Lists that match the query
const meta = response.data.meta // Meta information
```

### Create a list of companies

📖 [Documentation](https://www.thecompaniesapi.com/api#lists-create-list)

```typescript
// Create a list of companies
const response = await tca.createList({
  name: 'My SaaS List',
  type: 'companies'
})

const newList = response.data // The new list
```

### Fetch companies in your list

📖 [Documentation](https://www.thecompaniesapi.com/api#lists-fetch-companies)

```typescript
// Fetch companies in a list
const response = await tca.fetchCompaniesInList({
  listId: 1234
})

const companies = response.data.companies // Companies that match the list
const meta = response.data.meta // Meta information
```

### Add or remove companies in your list

📖 [Documentation](https://www.thecompaniesapi.com/api#lists-toggle-companies)

```typescript
// Add companies to a list
const response = await tca.addCompaniesToList({
  listId: 1234,
  companies: ['apple.com', 'stripe.com']
})

const list = response.data // The updated list
```

## 👥 Teams

### Fetch your team

📖 [Documentation](https://www.thecompaniesapi.com/api#teams-fetch-team)

```typescript
// Fetch your team details
const response = await tca.fetchTeam()

const team = response.data // Your team details
```

## 🔧 Utilities

### Fetch the health of the API

📖 [Documentation](https://www.thecompaniesapi.com/api#utilities-fetch-open-api)

```typescript
// Check API health status
const response = await tca.fetchApiHealth()

const health = response.data // The health of the API
```

### Fetch the OpenAPI schema

📖 [Documentation](https://www.thecompaniesapi.com/api#utilities-fetch-open-api)

```typescript
// Fetch OpenAPI schema
const response = await tca.fetchOpenApi()

const schema = response.data // The OpenAPI schema
```

## License

[MIT](./LICENSE) License © [TheCompaniesAPI](https://github.com/thecompaniesapi)

[npm-version-src]: https://img.shields.io/npm/v/@thecompaniesapi/sdk?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@thecompaniesapi/sdk
[npm-downloads-src]: https://img.shields.io/npm/dm/@thecompaniesapi/sdk?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@thecompaniesapi/sdk
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@thecompaniesapi/sdk?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@thecompaniesapi/sdk
[license-src]: https://img.shields.io/github/license/thecompaniesapi/sdk-typescript.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/thecompaniesapi/sdk-typescript/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@thecompaniesapi/sdk
