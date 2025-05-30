# @thecompaniesapi/sdk

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

A fully-featured TypeScript SDK for [The Companies API](https://www.thecompaniesapi.com), providing type-safe access to company data, locations, industries, technologies, job titles, lists, and more.

If you need more details about a specific endpoint, you can find the corresponding documentation in [the API reference](https://www.thecompaniesapi.com/api). You can also contact us on our livechat if you have any questions.

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

Get your API token from [your settings page](https://www.thecompaniesapi.com/settings/api-tokens) and initialize our client with `createClient`. The API token is required to authenticate your requests and should be kept secure. Never commit your API token to version control or share it publicly.

```typescript
import { createClient } from '@thecompaniesapi/sdk'

const tca = createClient({
  apiKey: 'your-api-token',
})
```

## 🏬 Companies

### Search companies

[Read the documentation](https://www.thecompaniesapi.com/api#companies-search).

```typescript
const { data } = await tca.searchCompanies({
  query: [
    {
      attribute: 'about.industries',
      operator: 'or',
      sign: 'equals',
      values: ['higher-education']
    }
  ],
  size: 3
})
```

### Search companies by name

'searchCompaniesByName'

[Read the documentation](https://www.thecompaniesapi.com/api#companies-search-name).

```typescript
```

### Search companies using a prompt

'searchCompaniesByPrompt'

[Read the documentation](https://www.thecompaniesapi.com/api#companies-search-prompt).

```typescript
```

### Search similar companies

'searchCompaniesSimilar'

[Read the documentation](https://www.thecompaniesapi.com/api#companies-search-similar).

```typescript
```

## Count companies matching your query

'fetchCompaniesCount'

[Read the documentation](https://www.thecompaniesapi.com/api#companies-count).

```typescript
```

## Enrich a company from a domain name

[Read the documentation](https://www.thecompaniesapi.com/api#companies-enrich-from-domain).

```typescript

// Fetch a company data if it exists in our database
const { data } = await tca.fetchCompany({
  domain: 'microsoft.com'
})

// Fetch a company data and enrich it if it doesn't exist
const { data } = await tca.fetchCompany({
  domain: 'microsoft.com',
  sync: true
})
```

## Enrich a company from an email

'fetchCompanyByEmail'

[Read the documentation](https://www.thecompaniesapi.com/api#companies-enrich-from-email).

```typescript
```

## Enrich a company from a social network URL

'fetchCompanyBySocials'

[Read the documentation](https://www.thecompaniesapi.com/api#companies-enrich-from-social-network-url).

```typescript
```

## Find a company email patterns

'fetchCompanyEmailPatterns'

[Read the documentation](https://www.thecompaniesapi.com/api#companies-find-email-patterns).

```typescript
```

## Ask a question about a company

'askCompany'

[Read the documentation](https://www.thecompaniesapi.com/api#companies-ask).

```typescript
```

## Fetch the context of a company

'fetchCompanyContext'

[Read the documentation](https://www.thecompaniesapi.com/api#companies-fetch-context).

```typescript
```

## Fetch analytics data for a query or your lists

'fetchCompaniesAnalytics'

[Read the documentation](https://www.thecompaniesapi.com/api#companies-fetch-analytics).

```typescript
```

## Export analytics data in multiple formats for a search

'exportCompaniesAnalytics'

[Read the documentation](https://www.thecompaniesapi.com/api#companies-export-analytics).

```typescript
```

## 🎯 Actions

### Request an action on one or more companies

[Read the documentation](https://www.thecompaniesapi.com/api#actions-request-action).

```typescript
```

### Fetch the actions for your actions

'fetchActions'

[Read the documentation](https://www.thecompaniesapi.com/api#actions-fetch).

```typescript
```

## 🏭 Industries

### Search industries

'searchIndustries'

[Read the documentation](https://www.thecompaniesapi.com/api#industries-search).

```typescript
```

### Find similar industries

'searchIndustriesSimilar'

[Read the documentation](https://www.thecompaniesapi.com/api#industries-find-similar).

```typescript
```

## ⚛️ Technologies

### Search technologies

'searchTechnologies'

[Read the documentation](https://www.thecompaniesapi.com/api#technologies-search).

```typescript
```

## 🌍 Locations

### Search cities

'searchCities'

[Read the documentation](https://www.thecompaniesapi.com/api#locations-search-cities).

```typescript
```

### Search counties

'searchCounties'

[Read the documentation](https://www.thecompaniesapi.com/api#locations-search-counties).

```typescript
```

### Search states

'searchStates'

[Read the documentation](https://www.thecompaniesapi.com/api#locations-search-states).

```typescript
```

### Search countries

'searchCountries'

[Read the documentation](https://www.thecompaniesapi.com/api#locations-search-countries).

```typescript
```

### Search continents

'searchContinents'

[Read the documentation](https://www.thecompaniesapi.com/api#locations-search-continents).

```typescript
```

## 💼 Job titles

### Enrich a job title from its name

'enrichJobTitles'

[Read the documentation](https://www.thecompaniesapi.com/api#job-titles-enrich-from-name).

```typescript
```

## 📋 Lists

### Fetch your lists

'fetchLists'

[Read the documentation](https://www.thecompaniesapi.com/api#lists-fetch-lists).

```typescript
```

### Create a list of companies

[Read the documentation](https://www.thecompaniesapi.com/api#lists-create-list).

```typescript
```

### Fetch companies in your list

'fetchCompaniesInList'

[Read the documentation](https://www.thecompaniesapi.com/api#lists-fetch-companies).

```typescript
```

### Add or remove companies in your list

[Read the documentation](https://www.thecompaniesapi.com/api#lists-toggle-companies).

```typescript

// Create a new list
const { data: myNewList } = await tca.createList({
  name: 'My list',
})

// Add companies to the list
const { data } = await tca.addCompaniesToList({
  listId: myNewList.id,
  companies: ['microsoft.com', 'apple.com']
})
```

## 👥 Teams

### Fetch your team

'fetchTeam'

[Read the documentation](https://www.thecompaniesapi.com/api#teams-fetch-team).

```typescript
```

## 🔧 Others

### Fetch the health of the API

'fetchApiHealth'

[Read the documentation]().

```typescript
```

### Fetch the OpenAPI schema

'fetchOpenApi'

[Read the documentation]().

```typescript
```

## License

[MIT](./LICENSE) License © [TheCompaniesAPI](https://github.com/thecompaniesapi)

<!-- Badges -->

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
