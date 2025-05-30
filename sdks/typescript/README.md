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

```typescript
```

### Search companies using a prompt

'searchCompaniesByPrompt'

```typescript
```

### Search similar companies

'searchCompaniesSimilar'

```typescript
```

## Count companies matching your query

'fetchCompaniesCount'

```typescript
```

## Enrich a company from a domain name

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

```typescript
```

## Enrich a company from a social network URL

'fetchCompanyBySocials'

```typescript
```

## Find a company email patterns

'fetchCompanyEmailPatterns'

```typescript
```

## Ask a question about a company

'askCompany'

```typescript
```

## Fetch the context of a company

'fetchCompanyContext'

```typescript
```

## Fetch analytics data for a query or your lists

'fetchCompaniesAnalytics'

```typescript
```

## Export analytics data in multiple formats for a search

'exportCompaniesAnalytics'

```typescript
```

## 🎯 Actions

### Request an action on one or more companies

```typescript
```

### Fetch the actions for your actions

'fetchActions'

```typescript
```

## 🏭 Industries

### Search industries

'searchIndustries'

```typescript
```

### Find similar industries

'searchIndustriesSimilar'

```typescript
```

## ⚛️ Technologies

### Search technologies

'searchTechnologies'

```typescript
```

## 🌍 Locations

### Search cities

'searchCities'

```typescript
```

### Search counties

'searchCounties'

```typescript
```

### Search countries

'searchCountries'

```typescript
```

### Search states

'searchStates'

```typescript
```

### Search continents

'searchContinents'

```typescript
```

## 💼 Job titles

### Enrich a job title from its name

'enrichJobTitles'

```typescript
```

## 📋 Lists

### Fetch your lists

'fetchLists'

```typescript
```

### Create a list of companies

```typescript
```

### Fetch companies in your list

'fetchCompaniesInList'

```typescript
```

### Add or remove companies in your list

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

```typescript
```

## 🔧 Others

### Fetch the health of the API

'fetchApiHealth'

```typescript
```

### Fetch the OpenAPI schema

'fetchOpenApi'

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
