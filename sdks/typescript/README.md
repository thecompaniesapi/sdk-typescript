# @thecompaniesapi/sdk

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

A fully-featured TypeScript SDK for [The Companies API](https://www.thecompaniesapi.com), providing type-safe access to company data, enrichment, and analytics. Built with TypeScript for excellent IDE support, autocompletion, and compile-time type checking.

The full API documentation is available [here](https://www.thecompaniesapi.com/api).

## Features

- Type-safe API client with full TypeScript support from our [OpenAPI](https://api.thecompaniesapi.com/v2/openapi) schema
- Powerful search capabilities with filters, sorting and pagination
- Real-time company enrichment with both synchronous and asynchronous options
- Create and manage your company lists
- Track and monitor enrichment actions and requests
- Generate detailed analytics and insights for searches and lists
- Natural language querying for structured company information
- Lightweight with minimal dependencies
- Promise-based async/await interface

## Installation

```bash
# with npm
npm install @thecompaniesapi/sdk

# with yarn
yarn add @thecompaniesapi/sdk

# with pnpm
pnpm add @thecompaniesapi/sdk
```

## Usage

Get your API key from [your settings page](https://www.thecompaniesapi.com/settings/api-tokens).

```typescript
import { createClient } from '@thecompaniesapi/sdk'

// Create a base client
const tca = createClient({
  apiKey: 'your-api-key',
})
```

## Examples

### Companies

#### Search companies

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

#### Search companies by name

'searchCompaniesByName'

#### Search companies using a prompt

'searchCompaniesByPrompt'

#### Search similar companies

'searchCompaniesSimilar'

### Count companies matching your query

'fetchCompaniesCount'

### Enrich a company from a domain name

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

### Enrich a company from an email

'fetchCompanyByEmail'

### Enrich a company from a social network URL

'fetchCompanyBySocials'

### Find a company email patterns

'fetchCompanyEmailPatterns'

### Ask a question about a company

'askCompany'

### Fetch the context of a company

'fetchCompanyContext'

### Fetch analytics data for a query or your lists

'fetchCompaniesAnalytics'

### Export analytics data in multiple formats for a search

'exportCompaniesAnalytics'

### Actions

#### Request an action on one or more companies

#### Fetch the actions for your actions

'fetchActions'

### Industries

#### Search industries

'searchIndustries'

#### Find similar industries

'searchIndustriesSimilar'

### Technologies

#### Search technologies

'searchTechnologies'

### Locations

#### Search cities

'searchCities'

#### Search counties

'searchCounties'

#### Search countries

'searchCountries'

#### Search states

'searchStates'

#### Search continents

'searchContinents'

### Job titles

#### Enrich a job title from its name

'enrichJobTitles'

### Lists

#### Fetch your lists

'fetchLists'

#### Create a list of companies

#### Fetch companies in your list

'fetchCompaniesInList'

#### Add or remove companies in your list

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

### Teams

#### Fetch your team

'fetchTeam'

### Others

#### Fetch the health of the API

'fetchApiHealth'

#### Fetch the OpenAPI schema

'fetchOpenApi'

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
