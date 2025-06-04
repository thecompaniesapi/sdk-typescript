export interface paths {
  '/': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get the health status of the API. */
    get: operations['fetchApiHealth']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/openapi': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get the current OpenAPI specification. */
    get: operations['fetchOpenApi']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/actions': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get and filter your actions. */
    get: operations['fetchActions']
    put?: never
    /** @description Request or estimate a new action. */
    post: operations['requestAction']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/companies': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Search companies using a segmentation query. */
    get: operations['searchCompanies']
    put?: never
    /** @description Search companies using a segmentation query. */
    post: operations['searchCompaniesPost']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/companies/{domain}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get a single company data by its domain. */
    get: operations['fetchCompany']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/companies/by-name': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Search companies by name. */
    get: operations['searchCompaniesByName']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/companies/by-prompt': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Search companies by prompt. */
    get: operations['searchCompaniesByPrompt']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/companies/similar': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get similar companies from one or many domains. */
    get: operations['searchSimilarCompanies']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/companies/count': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get the count of companies using a segmentation query. */
    get: operations['countCompanies']
    put?: never
    /** @description Get the count of companies using a segmentation body. */
    post: operations['countCompaniesPost']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/companies/by-email': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get a company data by email. */
    get: operations['fetchCompanyByEmail']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/companies/by-social': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get a company data by social media. */
    get: operations['fetchCompanyBySocial']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/companies/{domain}/email-patterns': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get email patterns for a company by its domain. */
    get: operations['fetchCompanyEmailPatterns']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/companies/{domain}/ask': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Ask a question about a company by its domain. */
    get: operations['askCompany']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/companies/{domain}/context': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get the full context of a company by its domain. */
    get: operations['fetchCompanyContext']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/companies/analytics': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Fetch analytics data for search segmentations and lists. */
    get: operations['fetchCompaniesAnalytics']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/companies/analytics/export': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Export analytics data for search segmentations and lists. */
    get: operations['exportCompaniesAnalytics']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/industries': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Search industries. */
    get: operations['searchIndustries']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/industries/similar': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get similar industries from one or many industries. */
    get: operations['searchIndustriesSimilar']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/technologies': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Search technologies. */
    get: operations['searchTechnologies']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/locations/cities': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Search cities. */
    get: operations['searchCities']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/locations/counties': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Search counties. */
    get: operations['searchCounties']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/locations/countries': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Search countries. */
    get: operations['searchCountries']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/locations/states': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Search states. */
    get: operations['searchStates']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/locations/continents': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Search continents. */
    get: operations['searchContinents']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/job-titles/enrich': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Enrich job titles. */
    get: operations['enrichJobTitles']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/lists': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get and filter your lists. */
    get: operations['fetchLists']
    put?: never
    /** @description Create a new list. */
    post: operations['createList']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/lists/{listId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** @description Delete a list. */
    delete: operations['deleteList']
    options?: never
    head?: never
    /** @description Update a list. */
    patch: operations['updateList']
    trace?: never
  }
  '/v2/lists/{listId}/companies': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get companies in a list with a segmentation query. */
    get: operations['fetchCompaniesInList']
    put?: never
    /** @description Get companies in a list with a segmentation body. */
    post: operations['fetchCompaniesInListPost']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/lists/{listId}/companies/toggle': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Toggle one or more companies in a list. */
    post: operations['listsToggleCompanies']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/teams/{teamId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get team information. */
    get: operations['fetchTeam']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    /** @description Update a team. */
    patch: operations['updateTeam']
    trace?: never
  }
  '/v2/user': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Get current user information. */
    get: operations['fetchUser']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/prompts': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** @description Fetch prompts history. */
    get: operations['fetchPrompts']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/prompts/{promptId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** @description Delete a prompt. */
    delete: operations['deletePrompt']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/prompts/product': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Query the product prompt. */
    post: operations['productPrompt']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/v2/prompts/segmentation': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** @description Convert a query to a segmentation. */
    post: operations['promptToSegmentation']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    /** @description A condition for our platform segmentation engine. */
    SegmentationCondition: {
      /** @enum {string} */
      attribute: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'ai.search' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'finances.stockExchange' | 'locations.headquarters.city.code' | 'locations.headquarters.continent.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.listIds' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'socials.linkedin.id' | 'technologies.active' | 'technologies.categories' | 'urls'
      blockedOperator?: boolean
      /** @enum {string} */
      operator: 'and' | 'or'
      /** @enum {string} */
      sign: 'equals' | 'exactEquals' | 'greater' | 'lower' | 'notEquals'
      values: (string | number)[]
    }
    /** @description A collection of users that can access the same resources. */
    Team: {
      admin: boolean | null
      country: string | null
      createdAt: string | null
      credits: number
      creditsPack: number
      id: number
      name: string | null
      role?: string | null
      stripeCustomerId: string | null
      stripeProductId: string | null
      stripeSubscribed: boolean
      stripeSubscriptionId: string | null
      stripeSubscriptionStatus: string | null
      websiteUrl: string | null
    }
    /** @description A user of the platform. */
    User: {
      /** @enum {string} */
      colorMode?: 'dark' | 'light' | 'system'
      createdAt?: string | null
      currentTeamId: number | null
      email: string
      emailFree: boolean | null
      emailVerified: boolean | null
      emailVerifiedResentAt: string | null
      fullName: string | null
      id: number
      locale?: unknown
      pictureUrl: string | null
      referral?: string | null
      /** @enum {string|null} */
      role?: 'owner' | 'user' | null
    }
    /** @description An answer from a query made to the LLM. */
    LLMAnswer: {
      companyId: number
      explanation?: string
      fields?: {
        description?: string
        key: string
        /** @enum {string} */
        type: 'array|boolean' | 'array|number' | 'array|string' | 'boolean' | 'number' | 'string'
        values?: string[]
      }[]
      grounded?: boolean
      output: {
        [key: string]: unknown
      }
      question: string
      score: number
    }
    /** @description An action tracks a request made to our job queue and its result. */
    Action: {
      cost?: number | null
      createdAt?: string | null
      data?: {
        cleanedUp?: number
        completed?: string[]
        completedDomains?: number
        completedDomainsSample?: string[]
        count?: number
        domains?: string[]
        domainsSample?: string[]
        elasticQuery?: unknown
        failed?: string[]
        failedDomains?: number
        failedDomainsSample?: string[]
        fields?: {
          description?: string
          key: string
          /** @enum {string} */
          type: 'array|boolean' | 'array|number' | 'array|string' | 'boolean' | 'number' | 'string'
          values?: string[]
        }[]
        grounded?: boolean
        /** @enum {string} */
        job?: 'ask-domain' | 'ask-list' | 'enrich-companies' | 'enrich-list' | 'cleanup-list'
        /** @enum {string} */
        model?: 'claude' | 'claude-mini' | 'cousteau' | 'gpt' | 'gpt-mini' | 'groq' | 'groq-mini' | 'llama3' | 'llama4' | 'nllb' | 'nuextract' | 'phi3'
        query?: components['schemas']['SegmentationCondition'][]
        question?: string
        team?: components['schemas']['Team']
        totalDomains?: number
        user?: components['schemas']['User']
      }
      id: number
      listId?: number
      promptId?: number
      result?: {
        answers?: components['schemas']['LLMAnswer'][]
        cleanedUp?: number
        domains?: string[]
      }
      /** @enum {string} */
      status: 'active' | 'completed' | 'failed' | 'pending'
      teamId?: number
      /** @enum {string} */
      type?: 'companies:added' | 'jobs:request'
      updatedAt?: string | null
    }
    /** @description Metadata about a paginated or billed response. */
    PaginationMeta: {
      cost: number
      credits: number
      currentPage: number
      firstPage: number
      freeRequest: boolean
      lastPage: number
      perPage: number
      total: number
    }
    /** @description Our complete schema for company data. */
    CompanyV2: {
      id?: string
      about?: {
        /**
         * @description The type of business the company is.
         * @enum {string}
         */
        businessType?: 'educational-institution' | 'government-agency' | 'nonprofit' | 'partnership' | 'privately-held' | 'public-company' | 'self-employed' | 'sole-proprietorship'
        /** @description The industries the company is in. */
        industries?: string[]
        /** @description The main industry of the company. */
        industry?: string
        /** @description The languages the company supports. */
        languages?: string[]
        /** @description The name of the company. */
        name?: string
        /** @description The alternative names of the company. */
        nameAlts?: string[]
        /** @description The legal name of the company. */
        nameLegal?: string
        /**
         * @description The total number of employees the company has.
         * @enum {string}
         */
        totalEmployees?: '1-10' | '10-50' | '50-200' | '200-500' | '500-1k' | '1k-5k' | '5k-10k' | 'over-10k'
        /** @description The exact total number of employees the company has. */
        totalEmployeesExact?: number
        /** @description The year the company stopped its operations. */
        yearEnded?: number
        /** @description The year the company was founded. */
        yearFounded?: number
        /** @description The date the company was founded. */
        yearFoundedDate?: string
        /** @description The place the company was founded. */
        yearFoundedPlace?: string
      }
      analytics?: {
        /** @description Lighthouse and Core Web Vitals analysis. */
        lighthouse?: {
          /** @description The accessibility score (0-100). */
          accessibility?: number
          /** @description The best practices score (0-100). */
          bestPractices?: number
          /** @description The performance score (0-100). */
          performance?: number
          /** @description The SEO score (0-100). */
          seo?: number
          /** @description The maximum server latency. */
          maxServerLatency?: number
          /** @description The number of fonts. */
          numFonts?: number
          /** @description The number of requests. */
          numRequests?: number
          /** @description The number of scripts. */
          numScripts?: number
          /** @description The number of stylesheets. */
          numStylesheets?: number
          /** @description The number of tasks. */
          numTasks?: number
          /** @description The cumulative layout shift. */
          cumulativeLayoutShift?: {
            count?: number
            score?: number
          }
          /** @description The largest contentful paint. */
          largestContentfulPaint?: {
            ms?: number
            score?: number
          }
          /** @description The time to interactive. */
          timeToInteractive?: {
            ms?: number
            score?: number
          }
          /** @description The total blocking time. */
          totalBlockingTime?: {
            ms?: number
            score?: number
          }
        }
        /**
         * @description The total number of monthly visitors the company has.
         * @enum {string}
         */
        monthlyVisitors?: 'under-10k' | '10k-50k' | '50k-100k' | '100k-500k' | '500k-1m' | '1m-10m' | '10m-50m' | '50m-100m' | '100m-500m' | '500m-1b' | 'over-1b'
      }
      /** @description The apps the company owns. */
      apps?: {
        amazon?: {
          /** @description The ID of the app. */
          id?: string
          /** @description The name of the app. */
          name?: string
          /** @description The rating of the app. */
          rating?: number
          /** @description The number of reviews the app has. */
          reviews?: number
          /**
           * @description The type of app the company owns.
           * @enum {string}
           */
          type?: 'app' | 'developer' | 'extension'
          /** @description The URL to the app. */
          url?: string
        }[]
        android?: {
          /** @description The ID of the app. */
          id?: string
          /** @description The name of the app. */
          name?: string
          /** @description The rating of the app. */
          rating?: number
          /** @description The number of reviews the app has. */
          reviews?: number
          /**
           * @description The type of app the company owns.
           * @enum {string}
           */
          type?: 'app' | 'developer' | 'extension'
          /** @description The URL to the app. */
          url?: string
        }[]
        chrome?: {
          /** @description The ID of the app. */
          id?: string
          /** @description The name of the app. */
          name?: string
          /** @description The rating of the app. */
          rating?: number
          /** @description The number of reviews the app has. */
          reviews?: number
          /**
           * @description The type of app the company owns.
           * @enum {string}
           */
          type?: 'app' | 'developer' | 'extension'
          /** @description The URL to the app. */
          url?: string
        }[]
        ios?: {
          /** @description The ID of the app. */
          id?: string
          /** @description The name of the app. */
          name?: string
          /** @description The rating of the app. */
          rating?: number
          /** @description The number of reviews the app has. */
          reviews?: number
          /**
           * @description The type of app the company owns.
           * @enum {string}
           */
          type?: 'app' | 'developer' | 'extension'
          /** @description The URL to the app. */
          url?: string
        }[]
        mac?: {
          /** @description The ID of the app. */
          id?: string
          /** @description The name of the app. */
          name?: string
          /** @description The rating of the app. */
          rating?: number
          /** @description The number of reviews the app has. */
          reviews?: number
          /**
           * @description The type of app the company owns.
           * @enum {string}
           */
          type?: 'app' | 'developer' | 'extension'
          /** @description The URL to the app. */
          url?: string
        }[]
        meta?: {
          /** @description The ID of the app. */
          id?: string
          /** @description The name of the app. */
          name?: string
          /** @description The rating of the app. */
          rating?: number
          /** @description The number of reviews the app has. */
          reviews?: number
          /**
           * @description The type of app the company owns.
           * @enum {string}
           */
          type?: 'app' | 'developer' | 'extension'
          /** @description The URL to the app. */
          url?: string
        }[]
        microsoft?: {
          /** @description The ID of the app. */
          id?: string
          /** @description The name of the app. */
          name?: string
          /** @description The rating of the app. */
          rating?: number
          /** @description The number of reviews the app has. */
          reviews?: number
          /**
           * @description The type of app the company owns.
           * @enum {string}
           */
          type?: 'app' | 'developer' | 'extension'
          /** @description The URL to the app. */
          url?: string
        }[]
        playstation?: {
          /** @description The ID of the app. */
          id?: string
          /** @description The name of the app. */
          name?: string
          /** @description The rating of the app. */
          rating?: number
          /** @description The number of reviews the app has. */
          reviews?: number
          /**
           * @description The type of app the company owns.
           * @enum {string}
           */
          type?: 'app' | 'developer' | 'extension'
          /** @description The URL to the app. */
          url?: string
        }[]
        xbox?: {
          /** @description The ID of the app. */
          id?: string
          /** @description The name of the app. */
          name?: string
          /** @description The rating of the app. */
          rating?: number
          /** @description The number of reviews the app has. */
          reviews?: number
          /**
           * @description The type of app the company owns.
           * @enum {string}
           */
          type?: 'app' | 'developer' | 'extension'
          /** @description The URL to the app. */
          url?: string
        }[]
      }
      assets?: {
        /** @description The primary color of the company. */
        colorPrimary?: string
        /** @description The cover image of the company. */
        cover?: {
          /** @description The height of the image. */
          height?: number
          /** @description The source of the image. */
          src?: string
          /** @description The width of the image. */
          width?: number
        }
        /** @description The square logo of the company. */
        logoSquare?: {
          /** @description The height of the image. */
          height?: number
          /** @description The source of the image. */
          src?: string
          /** @description The width of the image. */
          width?: number
        }
      }
      codes?: {
        /** @description The NAICS codes of the company. */
        naics?: string[]
        /** @description The SIC codes of the company. */
        sic?: string[]
      }
      companies?: {
        /** @description The acquisitions the company has. */
        acquisitions?: {
          /** @description The description of the acquisition. */
          description?: string
          /** @description The domain of the acquisition. */
          domain?: string
          /** @description The name of the acquisition. */
          name?: string
        }[]
        /** @description The parent company of the company. */
        parent?: {
          /** @description The description of the parent company. */
          description?: string
          /** @description The domain of the parent company. */
          domain?: string
          /** @description The name of the parent company. */
          name?: string
        }
        /** @description The subsidiaries the company has. */
        subsidiaries?: {
          /** @description The description of the subsidiary. */
          description?: string
          /** @description The domain of the subsidiary. */
          domain?: string
          /** @description The name of the subsidiary. */
          name?: string
        }[]
      }
      contacts?: {
        /** @description The emails the company has. */
        emails?: {
          /**
           * @description The category of the contact.
           * @enum {string}
           */
          category?: 'accounts' | 'channels' | 'general' | 'marketing' | 'reservations' | 'sales' | 'technical'
          /** @description The value of the contact. */
          value?: string
        }[]
        /** @description The lines the company has. */
        lines?: {
          /**
           * @description The category of the contact.
           * @enum {string}
           */
          category?: 'accounts' | 'channels' | 'general' | 'marketing' | 'reservations' | 'sales' | 'technical'
          /** @description The value of the contact. */
          value?: string
        }[]
        /** @description The phones the company has. */
        phones?: {
          /**
           * @description The category of the contact.
           * @enum {string}
           */
          category?: 'accounts' | 'channels' | 'general' | 'marketing' | 'reservations' | 'sales' | 'technical'
          /** @description The value of the contact. */
          value?: string
        }[]
        /** @description The WhatsApp contacts the company has. */
        whatsapps?: {
          /**
           * @description The category of the contact.
           * @enum {string}
           */
          category?: 'accounts' | 'channels' | 'general' | 'marketing' | 'reservations' | 'sales' | 'technical'
          /** @description The value of the contact. */
          value?: string
        }[]
      }
      contents?: {
        /** @description The podcasts the company has. */
        podcasts?: {
          /** @description The Apple podcasts the company has. */
          apple?: {
            /** @description The ID of the podcast. */
            id?: string
            /** @description The name of the podcast. */
            name?: string
            /** @description The rating of the podcast. */
            rating?: number
            /** @description The number of reviews the podcast has. */
            reviews?: number
            /** @description The URL to the podcast. */
            url?: string
          }[]
          /** @description The Spotify podcasts the company has. */
          spotify?: {
            /** @description The ID of the podcast. */
            id?: string
            /** @description The name of the podcast. */
            name?: string
            /** @description The rating of the podcast. */
            rating?: number
            /** @description The number of reviews the podcast has. */
            reviews?: number
            /** @description The URL to the podcast. */
            url?: string
          }[]
        }
      }
      descriptions?: {
        /** @description The knowledge graph of the company. */
        knowledgeGraph?: string
        /** @description The LinkedIn description of the company. */
        linkedin?: string
        /** @description The primary description of the company. */
        primary?: string
        /** @description The tagline of the company. */
        tagline?: string
        /** @description The website description of the company. */
        website?: string
        /** @description The Wikipedia description of the company. */
        wikipedia?: string
      }
      domain?: {
        /** @description The alias used by the origin domain. */
        alias?: string
        /** @description The date the domain was created. */
        createdAt?: string
        domain: string
        /** @description The alternative domains of the company. */
        domainAlts?: string[]
        /** @description The name of the domain. */
        domainName?: string
        /** @description The date the domain expired. */
        expiredAt?: string
        /** @description The NSFW state of the domain. */
        nsfw?: boolean
        /** @description The redirection of the domain. */
        redirection?: string
        /** @description The country of the registrant. */
        registrantCountry?: string
        /** @description The phone of the registrant. */
        registrantPhone?: string
        /** @description The registrar of the domain. */
        registrar?: string
        /** @description The root domain of the company. */
        root?: string
        /**
         * @description The state of the domain.
         * @enum {string}
         */
        state?: 'broken' | 'for-sale' | 'operating' | 'redirected'
        /** @description The status of the domain. */
        status?: number
        /** @description The TLD of the domain. */
        tld?: unknown
        /** @description The date the domain was updated. */
        updatedAt?: string
      }
      finances?: {
        /**
         * @description The total revenue the company has.
         * @enum {string}
         */
        revenue?: 'under-1m' | '1m-10m' | '10m-50m' | '50m-100m' | '100m-200m' | '200m-1b' | 'over-1b'
        /** @description The stock exchange the company has. */
        stockExchange?: string
        /** @description The stock symbol the company has. */
        stockSymbol?: string
      }
      locations?: {
        /** @description The headquarters of the company. */
        headquarters?: {
          /** @description The address of the location. */
          address?: {
            /** @description The geopoint of the address. */
            geopoint?: {
              /** @description The latitude of the geopoint. */
              lat: number
              /** @description The longitude of the geopoint. */
              lon: number
            }
            /** @description The raw complete address. */
            raw?: string
          }
          /** @description The city of the location. */
          city?: {
            /** @description The code of the city. */
            code?: string
            /** @description The geopoint of the city. */
            geopoint?: {
              /** @description The latitude of the geopoint. */
              lat: number
              /** @description The longitude of the geopoint. */
              lon: number
            }
            /** @description The name of the city. */
            name?: string
            /** @description The postcode of the city. */
            postcode?: string
          }
          /** @description The continent of the location. */
          continent?: {
            /** @description The code of the continent. */
            code?: string
            /** @description The geopoint of the continent. */
            geopoint?: {
              /** @description The latitude of the geopoint. */
              lat: number
              /** @description The longitude of the geopoint. */
              lon: number
            }
            /** @description The name of the continent. */
            name?: string
          }
          /** @description The country of the location. */
          country?: {
            /** @description The code of the country. */
            code?: string
            /** @description The geopoint of the country. */
            geopoint?: {
              /** @description The latitude of the geopoint. */
              lat: number
              /** @description The longitude of the geopoint. */
              lon: number
            }
            /** @description The name of the country. */
            name?: string
          }
          /** @description The county of the location. */
          county?: {
            /** @description The code of the county. */
            code?: string
            /** @description The geopoint of the county. */
            geopoint?: {
              /** @description The latitude of the geopoint. */
              lat: number
              /** @description The longitude of the geopoint. */
              lon: number
            }
            /** @description The name of the county. */
            name?: string
          }
          /** @description The state of the location. */
          state?: {
            /** @description The code of the state. */
            code?: string
            /** @description The geopoint of the state. */
            geopoint?: {
              /** @description The latitude of the geopoint. */
              lat: number
              /** @description The longitude of the geopoint. */
              lon: number
            }
            /** @description The name of the state. */
            name?: string
          }
        }
      }
      meta?: {
        /** @description If the company was ideated. */
        ideated?: boolean
        /** @description The list ids the company is in. */
        listIds?: number[]
        /** @description The MySQL ID of the company. */
        mysqlId?: number
        /** @description The data score of the company, generated from the total amount of data available. */
        score?: number
        /** @description If the company has sources, if so how many sources. */
        sources?: number
        /** @description The date the data was last synced. */
        syncedAt?: string
        /** @description The cost of the company (not persisted). */
        cost?: number
        /** @description The remaining credits of the team after requesting the company (not persisted). */
        credits?: number
        /** @description If the company was requested for free (not persisted). */
        freeRequest?: boolean
        /** @description If the company is new (not persisted). */
        new?: boolean
        /** @description The similar attributes between the companies (not persisted). */
        similarAttributes?: {
          /** @description The similar attribute name between the companies. */
          attribute: string
          /** @description The similar attribute value between the companies. */
          value: string
        }[]
        /** @description The similarity score between the company and the current query (not persisted). */
        similarity?: number
      }
      people?: Record<string, never>
      secondaries?: {
        /** @description The email patterns the company has. */
        emailPatterns?: {
          /** @description The number of emails the pattern has. */
          emailsCount?: number
          /** @description The pattern of the email. */
          pattern?: string
          /** @description The usage percentage of the pattern. */
          usagePercentage?: number
        }[]
      }
      /** @description The social media pages of the company. */
      socials?: {
        discord?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        dribbble?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        facebook?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        facebookGroup?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        github?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        instagram?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        linkedin?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        mastodon?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        medium?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        patreon?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        pinterest?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        reddit?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        slack?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        snapchat?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        stackoverflow?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        steam?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        substack?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        threads?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        tiktok?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        tumblr?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        twitch?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        twitter?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        vimeo?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        vkontakte?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        wellfound?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        xing?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        yelp?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
        youtube?: {
          /** @description The number of followers the company has. */
          followers?: number
          /** @description The number of following the company has. */
          following?: number
          /** @description The ID of the company. */
          id?: string
          /** @description The numeric ID of the company. */
          idNumeric?: string
          /** @description The number of likes the company has. */
          likes?: number
          /** @description The number of members the company has. */
          members?: number
          /** @description The number of monthly views the company has. */
          monthlyViews?: number
          /** @description The number of posts the company has. */
          posts?: number
          /** @description The rating of the company. */
          rating?: number
          /** @description The number of reviews the company has. */
          reviews?: number
          /** @description The number of people talking about the company. */
          talkingAbout?: number
          /** @description The URL to the social media page of the company. */
          url: string
          /** @description The number of videos the company has. */
          videos?: number
          /** @description The number of people who were here. */
          wereHere?: number
        }
      }
      technologies?: {
        /** @description The active company technologies. */
        active: string[]
        /** @description The categories the company technologies are in. */
        categories: string[]
        /** @description The details of the company technologies. */
        details: {
          /** @description The categories of the technology. */
          categories?: string[]
          /** @description The date the technology was detected. */
          detectedAt: string
          /** @description The detection types the technology has. */
          detectionTypes: ('cookies' | 'dns' | 'evaluate' | 'evaluate-bundle' | 'evaluate-version' | 'headers' | 'metas' | 'scripts' | 'tags' | 'urls' | 'variables')[]
          /** @description The slug of the technology. */
          slug: string
          /** @description The version of the technology. */
          version?: string
        }[]
      }
      urls?: {
        /** @description The URL to the about page of the company. */
        about?: string
        /** @description The URL to the blog of the company. */
        blog?: string
        /** @description The URL to the careers page of the company. */
        careers?: string
        /** @description The URL to the contact page of the company. */
        contact?: string
        /** @description The URL to the Crunchbase page of the company. */
        crunchbase?: string
        /** @description The URL to the developers page of the company. */
        developers?: string
        /** @description The URL to the docs of the company. */
        docs?: string
        /** @description The URL to the events of the company. */
        events?: string
        /** @description The URL to the Glassdoor page of the company. */
        glassdoor?: string
        /** @description The URL to the partnership page of the company. */
        partnership?: string
        /** @description The URL to the pricing page of the company. */
        pricing?: string
        /** @description The URL to the privacy policy of the company. */
        privacy?: string
        /** @description The URL to the registrar of the domain. */
        registrar?: string
        /** @description The URL to the Sales Navigator page of the company. */
        salesNavigator?: string
        /** @description The URL to the sitemap of the company. */
        sitemap?: string
        /** @description The URL to the status page of the company. */
        status?: string
        /** @description The URL to the terms of service of the company. */
        terms?: string
        /** @description The URL to the updates of the company. */
        updates?: string
        /** @description The URL to the website of the company. */
        website?: string
        /** @description The URL to the Wellfound page of the company. */
        wellfound?: string
        /** @description The URL to the Wikidata page of the company. */
        wikidata?: string
        /** @description The URL to the Wikipedia page of the company. */
        wikipedia?: string
      }
      vectors?: {
        /** @description The global computed vector. */
        global?: number[]
      }
      /** @description The action results for the company. */
      action?: {
        /** @description The answer of the action. */
        answer?: {
          /** @description The explanation of the answer. */
          explanation?: string
          /** @description The output of the answer. */
          output?: {
            [key: string]: unknown
          }
          /** @description The score of the answer. */
          score?: number
        }
      }
    }
    /** @description An email pattern and its related informations. */
    EmailPattern: {
      emailsCount: number | null
      id: number
      pattern: string
      usagePercentage: number | null
    }
    /** @description A natural language request made to the platform resolving to a specific action or search segment. */
    Prompt: {
      companyId?: number
      /** @enum {string} */
      context: 'analytics' | 'api' | 'companies' | 'company' | 'documentation' | 'enrichment' | 'landing' | 'list' | 'similarity'
      createdAt?: string
      data?: {
        all?: boolean
        count?: number
        domains?: string[]
        explain?: boolean
        fields?: {
          description?: string
          key: string
          /** @enum {string} */
          type: 'array|boolean' | 'array|number' | 'array|string' | 'boolean' | 'number' | 'string'
          values?: string[]
        }[]
        /** @enum {string} */
        model?: 'small' | 'large'
        names?: string[]
        query?: components['schemas']['SegmentationCondition'][]
        question?: string
        segmentation?: boolean
      }
      /** @enum {string} */
      feature?: 'ask' | 'cleanup' | 'enrich' | 'product' | 'search' | 'similar'
      hits?: number
      id: number
      /** @enum {string} */
      model?: 'small' | 'large'
      prompt: string
      promptKey: string
      response?: {
        all?: boolean
        cost?: number
        count?: number
        domain?: string
        error?: string
        action?: {
          cost?: number
          data?: {
            answer: components['schemas']['LLMAnswer']
            domains?: string[]
            fields: {
              description?: string
              key: string
              /** @enum {string} */
              type: 'array|boolean' | 'array|number' | 'array|string' | 'boolean' | 'number' | 'string'
              values?: string[]
            }[]
            /** @enum {string} */
            job: 'ask-list'
            query?: components['schemas']['SegmentationCondition'][]
            question: string
          }
          listId?: number
          promptId: number
          /** @enum {string} */
          status: 'pending'
          /** @enum {string} */
          type: 'jobs:request'
        }
        answer?: {
          explanation?: string
          output: {
            [key: string]: unknown
          }
          score: number
        }
      } | {
        all?: boolean
        cost?: number
        count?: number
        domain?: string
        error?: string
        action?: {
          /** @enum {number} */
          cost?: 0
          data?: {
            domains?: string[]
            /** @enum {string} */
            job: 'cleanup-list'
            query?: components['schemas']['SegmentationCondition'][]
          }
          listId?: number
          promptId: number
          /** @enum {string} */
          status: 'pending'
          /** @enum {string} */
          type: 'jobs:request'
        }
      } | {
        all?: boolean
        cost?: number
        count?: number
        domain?: string
        error?: string
        action?: {
          cost?: number
          data: {
            domains?: string[]
            /** @enum {string} */
            job: 'enrich-companies' | 'enrich-list'
            query?: components['schemas']['SegmentationCondition'][]
          }
          listId?: number
          promptId: number
          /** @enum {string} */
          status: 'pending'
          /** @enum {string} */
          type: 'jobs:request'
        }
      } | {
        all?: boolean
        cost?: number
        count?: number
        domain?: string
        error?: string
        domains?: string[]
        listId?: number
        query?: components['schemas']['SegmentationCondition'][]
      } | {
        all?: boolean
        cost?: number
        count?: number
        domain?: string
        error?: string
        domains?: string[]
      }
      updatedAt?: string
    }
    /** @description A collection of categorized facts about a company aggregated from multiple sources. */
    PageContentsIdeated: {
      domain?: string
      about?: string[]
      acquired?: string[]
      contacts?: string[]
      customers?: string[]
      features?: string[]
      finances?: string[]
      industries?: string[]
      jobs?: string[]
      locations?: string[]
      others?: string[]
      pricing?: string[]
      related?: string[]
      resources?: string[]
      security?: string[]
      social?: string[]
      solutions?: string[]
      support?: string[]
      team?: string[]
      technologies?: string[]
      updates?: string[]
      broken?: boolean
      closed?: boolean
      forSale?: boolean
      nsfw?: boolean
      updatedAt?: string
      sources?: string[]
      tokens?: number
    }
    /** @description A link found in a page content. */
    PageContentsLink: {
      text?: string
      url: string
    }
    /** @description A page content saved as a source for a company context. */
    PageContentsPage: {
      url: string
      content?: string
      html?: string
      description?: string
      title?: string
      externals?: components['schemas']['PageContentsLink'][]
      navigation?: components['schemas']['PageContentsLink'][]
      visitedAt?: string
    }
    /** @description A technology description from our platform. */
    Technology: {
      categories?: string[] | null
      companiesCount: number | null
      createdAt?: string | null
      editor: string
      free: boolean | null
      id: number
      name: string
      nameSynonyms: string[] | null
      paid: boolean | null
      slug: string
      updatedAt: string | null
      usageCount: number | null
      websiteUrl: string | null
    }
    /** @description A city from the Nominatim API. */
    NominatimCity: {
      code: string
      companiesCount: number | null
      id: number
      latitude: string | null
      linkedinHeadline?: string | null
      linkedinId?: string | null
      linkedinQuery?: string | null
      longitude: string | null
      name: string
      nominatimCountryId?: number | null
      nominatimCountyId?: number | null
      nominatimStateId?: number | null
      postcode: string | null
      usageCount: number | null
    }
    /** @description A county from the Nominatim API. */
    NominatimCounty: {
      citiesCount: number | null
      code: string
      companiesCount: number | null
      id: number
      latitude: string | null
      linkedinHeadline?: string | null
      linkedinId?: string | null
      linkedinQuery?: string | null
      longitude: string | null
      name: string
      nominatimCountryId?: number | null
      nominatimStateId?: number | null
      usageCount: number | null
    }
    /** @description A country from the Nominatim API. */
    NominatimCountry: {
      citiesCount: number | null
      code: string
      companiesCount: number | null
      /** @enum {string|null} */
      continent: 'Africa' | 'Antarctica' | 'Asia' | 'Europe' | 'North America' | 'Oceania' | 'South America' | null
      /** @enum {string|null} */
      continentCode: 'af' | 'an' | 'as' | 'eu' | 'na' | 'oc' | 'sa' | null
      countiesCount: number | null
      id: number
      latitude: string | null
      linkedinHeadline?: string | null
      linkedinId?: string | null
      longitude: string | null
      name: string
      nameEs: string
      nameFr: string
      nameNative: string
      population: number | null
      statesCount: number | null
      usageCount: number | null
    }
    /** @description A state from the Nominatim API. */
    NominatimState: {
      citiesCount: number | null
      code: string
      companiesCount: number | null
      countiesCount: number | null
      id: number
      latitude: string | null
      linkedinHeadline?: string | null
      linkedinId?: string | null
      linkedinQuery?: string | null
      longitude: string | null
      name: string
      nominatimCountryId?: number | null
      usageCount: number | null
    }
    /** @description A continent from the Nominatim API. */
    NominatimContinent: {
      citiesCount: number | null
      /** @enum {string} */
      code: 'af' | 'an' | 'as' | 'eu' | 'na' | 'oc' | 'sa'
      companiesCount: number | null
      countiesCount: number | null
      countriesCount: number | null
      icon: string | null
      id: number
      latitude: string | null
      linkedinHeadline?: string | null
      linkedinId?: string | null
      longitude: string | null
      name: string
      nameEs: string
      nameFr: string
      statesCount: number | null
      usageCount: number | null
    }
    /** @description A job title and its related informations. */
    JobTitle: {
      department: string | null
      departmentSecondary: string | null
      id?: number
      linkedinCount?: number | null
      name: string
      nameEs: string | null
      nameFr: string | null
      seniorityLevel: string | null
      seniorityLevelSecondary: string | null
      usageCount?: number | null
    }
    /** @description Analytics collection of a list. */
    ListAnalytics: {
      companiesCount?: number | null
      id?: number
      listId?: number | null
    }
    /** @description A collection of companies saved or imported by a team. */
    List: {
      analytics?: components['schemas']['ListAnalytics']
      companyListId?: number | null
      createdAt: string | null
      dynamic: boolean | null
      exporting: boolean
      exportingAt: string | null
      id: number
      imported: boolean
      mailFrequencies?: {
        [key: string]: 'daily' | 'disabled' | 'monthly' | 'weekly'
      } | null
      maxCompanies: number | null
      name: string
      processActive: boolean
      processDisabled?: boolean | null
      processingAt: string | null
      processInitialized: boolean
      processMessage: string | null
      query?: components['schemas']['SegmentationCondition'][]
      querySimilar: string[]
      teamId?: string | null
      unseenActions?: components['schemas']['Action'][]
      userId?: number | null
      vectors?: number[][]
    }
  }
  responses: never
  parameters: {
    /** @description A unique identifier generated on a first visit to the website tracking demo features sessions. */
    visitorId: string
  }
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  fetchApiHealth: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get the health status of the API. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            healthy: boolean
            nodeName: string
            report: {
              [key: string]: {
                displayName: string
                health: {
                  healthy: boolean
                }
              }
            }
          }
        }
      }
    }
  }
  fetchOpenApi: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get the current OpenAPI specification. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': Record<string, never>
        }
      }
    }
  }
  fetchActions: {
    parameters: {
      query?: {
        full?: boolean
        ids?: number[]
        listId?: number
        page?: number
        search?: string
        size?: number
        status?: 'active' | 'completed' | 'failed' | 'pending'
        teamId?: number
        type?: 'jobs:request' | 'companies:added'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get and filter your actions. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            actions: components['schemas']['Action'][]
            meta: components['schemas']['PaginationMeta']
          }
        }
      }
      /** @description The error message */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'invalidListId'
            status: number
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  requestAction: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          domains?: string[]
          estimate?: boolean
          fields?: {
            description?: string
            key: string
            /** @enum {string} */
            type: 'array|boolean' | 'array|number' | 'array|string' | 'boolean' | 'number' | 'string'
            values?: string[]
          }[]
          /** @enum {string} */
          job?: 'ask-domain' | 'ask-list' | 'enrich-companies' | 'enrich-list' | 'cleanup-list'
          listId?: number
          names?: string[]
          promptId?: number
          query?: components['schemas']['SegmentationCondition'][]
          question?: string
          /** @enum {string} */
          type: 'jobs:request' | 'companies:added'
        }
      }
    }
    responses: {
      /** @description Request or estimate a new action. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            actions: components['schemas']['Action'][]
          }
        }
      }
      /** @description The error message */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'invalidListId' | 'typeMissing'
            status: number
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'invalidPromptId'
            status: number
          }
        }
      }
    }
  }
  searchCompanies: {
    parameters: {
      query?: {
        actionId?: number
        domainsToExclude?: string
        linkedinToExclude?: string
        page?: number
        query?: components['schemas']['SegmentationCondition'][]
        search?: string
        searchFields?: ('about.name' | 'domain.domain')[]
        simplified?: boolean
        size?: number
        sortFields?: {
          /** @enum {string} */
          key: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'locations.headquarters.city.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'urls'
          /** @enum {string} */
          missing?: '_first' | '_last'
          /** @enum {string} */
          order: 'asc' | 'desc'
        }[]
        sortKey?: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'locations.headquarters.city.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'urls'
        sortOrder?: 'asc' | 'desc'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Search companies using a segmentation query. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            companies: components['schemas']['CompanyV2'][]
            meta: components['schemas']['PaginationMeta']
            query: components['schemas']['SegmentationCondition'][]
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'noCreditsRemaining'
            status: number
          }
        }
      }
    }
  }
  searchCompaniesPost: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          actionId?: number
          domainsToExclude?: string
          linkedinToExclude?: string
          page?: number
          query?: components['schemas']['SegmentationCondition'][]
          search?: string
          searchFields?: ('about.name' | 'domain.domain')[]
          simplified?: boolean
          size?: number
          sortFields?: {
            /** @enum {string} */
            key: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'locations.headquarters.city.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'urls'
            /** @enum {string} */
            missing?: '_first' | '_last'
            /** @enum {string} */
            order: 'asc' | 'desc'
          }[]
          /** @enum {string} */
          sortKey?: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'locations.headquarters.city.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'urls'
          /** @enum {string} */
          sortOrder?: 'asc' | 'desc'
        }
      }
    }
    responses: {
      /** @description Search companies using a segmentation query. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            companies: components['schemas']['CompanyV2'][]
            meta: components['schemas']['PaginationMeta']
            query: components['schemas']['SegmentationCondition'][]
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'noCreditsRemaining'
            status: number
          }
        }
      }
    }
  }
  fetchCompany: {
    parameters: {
      query?: {
        simplified?: boolean
        sync?: boolean
      }
      header?: never
      path: {
        domain: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get a single company data by its domain. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CompanyV2']
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'noCreditsRemaining'
            status: number
          }
        }
      }
      /** @description The error message */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'companyNotFound'
            status: number
          }
        }
      }
    }
  }
  searchCompaniesByName: {
    parameters: {
      query: {
        countries?: string
        exactWordsMatch?: boolean
        listsToExclude?: string
        name: string
        page?: number
        searchFields?: ('about.name' | 'domain.domain')[]
        simplified?: boolean
        size?: number
        sortFields?: {
          /** @enum {string} */
          key: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'locations.headquarters.city.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'urls'
          /** @enum {string} */
          missing?: '_first' | '_last'
          /** @enum {string} */
          order: 'asc' | 'desc'
        }[]
        sortKey?: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'locations.headquarters.city.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'urls'
        sortOrder?: 'asc' | 'desc'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Search companies by name. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            companies: components['schemas']['CompanyV2'][]
            meta: components['schemas']['PaginationMeta']
          }
        }
      }
      /** @description The error message */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'companyNameEmpty'
            status: number
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'noCreditsRemaining'
            status: number
          }
        }
      }
    }
  }
  searchCompaniesByPrompt: {
    parameters: {
      query: {
        listsToExclude?: string
        page?: number
        prompt: string
        similarity?: number
        simplified?: boolean
        size?: number
        sortFields?: {
          /** @enum {string} */
          key: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'locations.headquarters.city.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'urls'
          /** @enum {string} */
          missing?: '_first' | '_last'
          /** @enum {string} */
          order: 'asc' | 'desc'
        }[]
        sortKey?: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'locations.headquarters.city.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'urls'
        sortOrder?: 'asc' | 'desc'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Search companies by prompt. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            companies: components['schemas']['CompanyV2'][]
            meta: components['schemas']['PaginationMeta']
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'noCreditsRemaining'
            status: number
          }
        }
      }
    }
  }
  searchSimilarCompanies: {
    parameters: {
      query: {
        domains: string[]
        page?: number
        proximityExact?: number
        proximityTerm?: 'close' | 'far' | 'near'
        simplified?: boolean
        size?: number
        sortFields?: {
          /** @enum {string} */
          key: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'locations.headquarters.city.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'urls'
          /** @enum {string} */
          missing?: '_first' | '_last'
          /** @enum {string} */
          order: 'asc' | 'desc'
        }[]
        sortKey?: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'locations.headquarters.city.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'urls'
        sortOrder?: 'asc' | 'desc'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get similar companies from one or many domains. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            companies: components['schemas']['CompanyV2'][]
            meta: components['schemas']['PaginationMeta']
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'noCreditsRemaining'
            status: number
          }
        }
      }
    }
  }
  countCompanies: {
    parameters: {
      query?: {
        actionId?: number
        query?: components['schemas']['SegmentationCondition'][]
        search?: string
        searchFields?: ('about.name' | 'domain.domain')[]
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get the count of companies using a segmentation query. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            count: number
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'noCreditsRemaining'
            status: number
          }
        }
      }
    }
  }
  countCompaniesPost: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          actionId?: number
          query?: components['schemas']['SegmentationCondition'][]
          search?: string
          searchFields?: ('about.name' | 'domain.domain')[]
        }
      }
    }
    responses: {
      /** @description Get the count of companies using a segmentation body. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            count: number
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'noCreditsRemaining'
            status: number
          }
        }
      }
    }
  }
  fetchCompanyByEmail: {
    parameters: {
      query: {
        email: string
        simplified?: boolean
        sync?: boolean
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get a company data by email. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            company?: components['schemas']['CompanyV2']
            email: {
              address?: string
              domain: string
              fullName: {
                first?: string
                last?: string
                middle?: string
              }
              isDisposable: boolean
              isFree: boolean
              isSubaddress: boolean
              isValid: boolean
              isValidFormat: boolean
              name: string
              pattern?: string
            }
            meta?: {
              freeRequest?: boolean
            }
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'noCreditsRemaining'
            status: number
          }
        }
      }
    }
  }
  fetchCompanyBySocial: {
    parameters: {
      query?: {
        angellist?: string
        dribbble?: string
        facebook?: string
        github?: string
        instagram?: string
        linkedin?: string
        pinterest?: string
        simplified?: boolean
        snapchat?: string
        souncloud?: string
        sync?: boolean
        tiktok?: string
        twitter?: string
        wellfound?: string
        youtube?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get a company data by social media. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['CompanyV2']
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'noCreditsRemaining'
            status: number
          }
        }
      }
    }
  }
  fetchCompanyEmailPatterns: {
    parameters: {
      query?: {
        emailsCount?: boolean
        precision?: number
      }
      header?: never
      path: {
        domain: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get email patterns for a company by its domain. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['EmailPattern'][]
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'noCreditsRemaining'
            status: number
          }
        }
      }
      /** @description The error message */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'companyNotFound'
            status: number
          }
        }
      }
    }
  }
  askCompany: {
    parameters: {
      query: {
        explain?: boolean
        fields?: {
          description?: string
          key: string
          /** @enum {string} */
          type: 'array|boolean' | 'array|number' | 'array|string' | 'boolean' | 'number' | 'string'
          values?: string[]
        }[]
        listId?: number
        model?: 'small' | 'large'
        query?: components['schemas']['SegmentationCondition'][]
        question: string
      }
      header?: never
      path: {
        domain: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Ask a question about a company by its domain. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            meta: {
              cost: number
              /** @enum {string} */
              model: 'small' | 'large'
              score?: number
            }
            /** @description A natural language request made to the platform resolving to a specific action or search segment. */
            prompt: components['schemas']['Prompt'] & {
              response: {
                all?: boolean
                cost?: number
                count?: number
                domain?: string
                error?: string
                action?: {
                  cost?: number
                  data?: {
                    answer: components['schemas']['LLMAnswer']
                    domains?: string[]
                    fields: {
                      description?: string
                      key: string
                      /** @enum {string} */
                      type: 'array|boolean' | 'array|number' | 'array|string' | 'boolean' | 'number' | 'string'
                      values?: string[]
                    }[]
                    /** @enum {string} */
                    job: 'ask-list'
                    query?: components['schemas']['SegmentationCondition'][]
                    question: string
                  }
                  listId?: number
                  promptId: number
                  /** @enum {string} */
                  status: 'pending'
                  /** @enum {string} */
                  type: 'jobs:request'
                }
                answer?: {
                  explanation?: string
                  output: {
                    [key: string]: unknown
                  }
                  score: number
                }
              }
            }
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'noCreditsRemaining'
            status: number
          }
        }
      }
      /** @description The error message */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'companyNotFound'
            status: number
          }
        }
      }
    }
  }
  fetchCompanyContext: {
    parameters: {
      query?: never
      header?: never
      path: {
        domain: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get the full context of a company by its domain. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            context?: {
              company?: components['schemas']['CompanyV2']
              domain: string
              ideated?: components['schemas']['PageContentsIdeated']
              sources?: components['schemas']['PageContentsPage'][]
            }
            meta: {
              cost: number
              tokens: number
            }
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'noCreditsRemaining'
            status: number
          }
        }
      }
      /** @description The error message */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'companyNotFound'
            status: number
          }
        }
      }
    }
  }
  fetchCompaniesAnalytics: {
    parameters: {
      query: {
        actionId?: number
        attribute: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.tld' | 'finances.revenue' | 'finances.stockExchange' | 'locations.headquarters.city.code' | 'locations.headquarters.continent.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'technologies.categories'
        listId?: number
        query?: components['schemas']['SegmentationCondition'][]
        size?: number
        sort?: 'asc' | 'desc'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Fetch analytics data for search segmentations and lists. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            data: {
              count: number
              name: string
              percentageOfAll: number
              percentageOfTotal: number
            }[]
            meta: {
              listId?: number
              query: components['schemas']['SegmentationCondition'][]
              totalDatapoints: number
              totalDocuments: number
              totalValues: number
            }
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  exportCompaniesAnalytics: {
    parameters: {
      query?: {
        actionId?: number
        attributes?: ('about.businessType' | 'about.industries' | 'about.industry' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.tld' | 'finances.revenue' | 'finances.stockExchange' | 'locations.headquarters.city.code' | 'locations.headquarters.continent.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'technologies.categories')[]
        format?: 'csv' | 'json' | 'txt' | 'xls' | 'xml'
        full?: boolean
        listId?: number
        query?: components['schemas']['SegmentationCondition'][]
        size?: number
        sort?: 'asc' | 'desc'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Export analytics data for search segmentations and lists. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            data: {
              count: number
              name: string
              percentageOfAll: number
              percentageOfTotal: number
            }[]
            meta: {
              listId?: number
              query: components['schemas']['SegmentationCondition'][]
              totalDatapoints: number
              totalDocuments: number
              totalValues: number
            }
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  searchIndustries: {
    parameters: {
      query?: {
        page?: number
        search?: string
        size?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Search industries. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            industries: {
              companiesCount: number | null
              name: string
              slug?: unknown
            }[]
            meta: components['schemas']['PaginationMeta']
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  searchIndustriesSimilar: {
    parameters: {
      query: {
        industries: string[]
        page?: number
        size?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get similar industries from one or many industries. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            industries: {
              companiesCount: number | null
              name: string
              slug?: unknown
            }[]
            meta: components['schemas']['PaginationMeta']
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  searchTechnologies: {
    parameters: {
      query?: {
        page?: number
        search?: string
        size?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Search technologies. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            meta: components['schemas']['PaginationMeta']
            technologies: components['schemas']['Technology'][]
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  searchCities: {
    parameters: {
      query?: {
        filters?: string
        page?: number
        search?: string
        size?: number
        sortKey?: 'counts.companies'
        sortOrder?: 'asc' | 'desc'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Search cities. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            cities: components['schemas']['NominatimCity'][]
            meta: components['schemas']['PaginationMeta']
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  searchCounties: {
    parameters: {
      query?: {
        page?: number
        search?: string
        size?: number
        sortKey?: 'counts.companies'
        sortOrder?: 'asc' | 'desc'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Search counties. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            counties: components['schemas']['NominatimCounty'][]
            meta: components['schemas']['PaginationMeta']
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  searchCountries: {
    parameters: {
      query?: {
        filters?: string
        page?: number
        search?: string
        size?: number
        sortKey?: 'counts.companies'
        sortOrder?: 'asc' | 'desc'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Search countries. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            countries: components['schemas']['NominatimCountry'][]
            meta: components['schemas']['PaginationMeta']
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  searchStates: {
    parameters: {
      query?: {
        page?: number
        search?: string
        size?: number
        sortKey?: 'counts.companies'
        sortOrder?: 'asc' | 'desc'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Search states. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            meta: components['schemas']['PaginationMeta']
            states: components['schemas']['NominatimState'][]
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  searchContinents: {
    parameters: {
      query?: {
        page?: number
        search?: string
        size?: number
        sortKey?: 'counts.companies'
        sortOrder?: 'asc' | 'desc'
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Search continents. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            continents: components['schemas']['NominatimContinent'][]
            meta: components['schemas']['PaginationMeta']
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  enrichJobTitles: {
    parameters: {
      query?: {
        name?: string
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Enrich job titles. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['JobTitle'] | {
            [key: string]: unknown
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  fetchLists: {
    parameters: {
      query?: {
        page?: number
        size?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get and filter your lists. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            lists: components['schemas']['List'][]
            meta: components['schemas']['PaginationMeta']
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  createList: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          dynamic?: boolean
          imported?: boolean
          /** @enum {string} */
          mailFrequency?: 'disabled' | 'daily' | 'weekly' | 'monthly'
          maxCompanies?: number
          name: string
          processInitialized?: boolean
          query?: components['schemas']['SegmentationCondition'][]
          similarDomains?: string[]
        }
      }
    }
    responses: {
      /** @description Create a new list. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['List']
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  deleteList: {
    parameters: {
      query?: never
      header?: never
      path: {
        listId: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Delete a list. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['List']
        }
      }
      /** @description The error message */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'listNotFound'
            status: number
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'userCurrentTeamIsNotInstanceOwner'
            status: number
          }
        }
      }
    }
  }
  updateList: {
    parameters: {
      query?: never
      header?: never
      path: {
        listId: number
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          dynamic?: boolean
          lastSeen?: boolean
          /** @enum {string} */
          mailFrequency?: 'disabled' | 'daily' | 'weekly' | 'monthly'
          maxCompanies?: number | null
          name?: string
          query?: components['schemas']['SegmentationCondition'][]
          resync?: boolean
        }
      }
    }
    responses: {
      /** @description Update a list. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['List']
        }
      }
      /** @description The error message */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'listNotFound'
            status: number
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'userCurrentTeamIsNotInstanceOwner'
            status: number
          }
        }
      }
    }
  }
  fetchCompaniesInList: {
    parameters: {
      query?: {
        actionId?: number
        page?: number
        query?: components['schemas']['SegmentationCondition'][]
        simplified?: boolean
        size?: number
        sortFields?: {
          /** @enum {string} */
          key: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'locations.headquarters.city.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'urls'
          /** @enum {string} */
          missing?: '_first' | '_last'
          /** @enum {string} */
          order: 'asc' | 'desc'
        }[]
        sortKey?: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'locations.headquarters.city.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'urls'
        sortOrder?: 'asc' | 'desc'
      }
      header?: never
      path: {
        listId: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get companies in a list with a segmentation query. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            companies: components['schemas']['CompanyV2'][]
            maxScrollResultsReached: boolean
            meta: components['schemas']['PaginationMeta']
            query?: components['schemas']['SegmentationCondition'][]
          }
        }
      }
      /** @description The error message */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'listNotFound'
            status: number
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'userCurrentTeamIsNotInstanceOwner'
            status: number
          }
        }
      }
    }
  }
  fetchCompaniesInListPost: {
    parameters: {
      query?: never
      header?: never
      path: {
        listId: number
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          actionId?: number
          page?: number
          query?: components['schemas']['SegmentationCondition'][]
          simplified?: boolean
          size?: number
          sortFields?: {
            /** @enum {string} */
            key: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'locations.headquarters.city.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'urls'
            /** @enum {string} */
            missing?: '_first' | '_last'
            /** @enum {string} */
            order: 'asc' | 'desc'
          }[]
          /** @enum {string} */
          sortKey?: 'about.businessType' | 'about.industries' | 'about.industry' | 'about.name' | 'about.totalEmployees' | 'about.yearFounded' | 'analytics.monthlyVisitors' | 'apps' | 'codes.naics' | 'codes.sic' | 'contacts' | 'domain.domain' | 'domain.tld' | 'finances.revenue' | 'locations.headquarters.city.code' | 'locations.headquarters.country.code' | 'locations.headquarters.county.code' | 'locations.headquarters.state.code' | 'meta.score' | 'meta.syncedAt' | 'socials' | 'technologies.active' | 'urls'
          /** @enum {string} */
          sortOrder?: 'asc' | 'desc'
        }
      }
    }
    responses: {
      /** @description Get companies in a list with a segmentation body. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            companies: components['schemas']['CompanyV2'][]
            maxScrollResultsReached: boolean
            meta: components['schemas']['PaginationMeta']
            query?: components['schemas']['SegmentationCondition'][]
          }
        }
      }
      /** @description The error message */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'listNotFound'
            status: number
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'userCurrentTeamIsNotInstanceOwner'
            status: number
          }
        }
      }
    }
  }
  listsToggleCompanies: {
    parameters: {
      query?: never
      header?: never
      path: {
        listId: number
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /** @enum {string} */
          action: 'attach' | 'detach'
          companyIds?: number[]
          domains?: string[]
          sync?: boolean
        }
      }
    }
    responses: {
      /** @description Toggle one or more companies in a list. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['List']
        }
      }
      /** @description The error message */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'listNotFound'
            status: number
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'userCurrentTeamIsNotInstanceOwner'
            status: number
          }
        }
      }
      /** @description The error message */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'companyNotFound'
            status: number
          }
        }
      }
    }
  }
  fetchTeam: {
    parameters: {
      query?: never
      header?: never
      path: {
        teamId: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get team information. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Team']
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'userNotInTeam'
            status: number
          }
        }
      }
      /** @description The error message */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'teamNotFound'
            status: number
          }
        }
      }
    }
  }
  updateTeam: {
    parameters: {
      query?: never
      header?: never
      path: {
        teamId: number
      }
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          country?: string
          name?: string
          websiteUrl?: string
        }
      }
    }
    responses: {
      /** @description Update a team. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Team']
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'userNotInTeam'
            status: number
          }
        }
      }
      /** @description The error message */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'teamNotFound'
            status: number
          }
        }
      }
    }
  }
  fetchUser: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Get current user information. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['User']
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  fetchPrompts: {
    parameters: {
      query?: {
        companyId?: number
        context?: 'analytics' | 'api' | 'companies' | 'company' | 'documentation' | 'enrichment' | 'landing' | 'list' | 'similarity'
        feature?: 'ask' | 'cleanup' | 'enrich' | 'product' | 'search' | 'similar'
        limit?: number
        listId?: number
        model?: 'small' | 'large'
        page?: number
        prompt?: string
        search?: string
        size?: number
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Fetch prompts history. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            meta: components['schemas']['PaginationMeta']
            prompts: components['schemas']['Prompt'][]
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
  deletePrompt: {
    parameters: {
      query?: never
      header?: never
      path: {
        promptId: number
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Delete a prompt. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['Prompt']
        }
      }
      /** @description The error message */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'promptNotFound'
            status: number
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'userCurrentTeamIsNotInstanceOwner'
            status: number
          }
        }
      }
    }
  }
  productPrompt: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          companyId?: number
          /** @enum {string} */
          context?: 'analytics' | 'api' | 'companies' | 'company' | 'documentation' | 'enrichment' | 'landing' | 'list' | 'similarity'
          /** @enum {string} */
          feature?: 'ask' | 'cleanup' | 'enrich' | 'product' | 'search' | 'similar'
          force?: boolean
          listId?: number
          /** @enum {string} */
          model?: 'small' | 'large'
          prompt: string
        }
      }
    }
    responses: {
      /** @description Query the product prompt. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            meta: components['schemas']['PaginationMeta']
            prompt: components['schemas']['Prompt']
            response: {
              all?: boolean
              cost?: number
              count?: number
              domain?: string
              error?: string
              action?: {
                cost?: number
                data?: {
                  answer: components['schemas']['LLMAnswer']
                  domains?: string[]
                  fields: {
                    description?: string
                    key: string
                    /** @enum {string} */
                    type: 'array|boolean' | 'array|number' | 'array|string' | 'boolean' | 'number' | 'string'
                    values?: string[]
                  }[]
                  /** @enum {string} */
                  job: 'ask-list'
                  query?: components['schemas']['SegmentationCondition'][]
                  question: string
                }
                listId?: number
                promptId: number
                /** @enum {string} */
                status: 'pending'
                /** @enum {string} */
                type: 'jobs:request'
              }
              answer?: {
                explanation?: string
                output: {
                  [key: string]: unknown
                }
                score: number
              }
            } | {
              all?: boolean
              cost?: number
              count?: number
              domain?: string
              error?: string
              action?: {
                /** @enum {number} */
                cost?: 0
                data?: {
                  domains?: string[]
                  /** @enum {string} */
                  job: 'cleanup-list'
                  query?: components['schemas']['SegmentationCondition'][]
                }
                listId?: number
                promptId: number
                /** @enum {string} */
                status: 'pending'
                /** @enum {string} */
                type: 'jobs:request'
              }
            } | {
              all?: boolean
              cost?: number
              count?: number
              domain?: string
              error?: string
              action?: {
                cost?: number
                data: {
                  domains?: string[]
                  /** @enum {string} */
                  job: 'enrich-companies' | 'enrich-list'
                  query?: components['schemas']['SegmentationCondition'][]
                }
                listId?: number
                promptId: number
                /** @enum {string} */
                status: 'pending'
                /** @enum {string} */
                type: 'jobs:request'
              }
            } | {
              all?: boolean
              cost?: number
              count?: number
              domain?: string
              error?: string
              domains?: string[]
              listId?: number
              query?: components['schemas']['SegmentationCondition'][]
            } | {
              all?: boolean
              cost?: number
              count?: number
              domain?: string
              error?: string
              domains?: string[]
            }
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
      /** @description The error message */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'noCreditsRemaining'
            status: number
          }
        }
      }
    }
  }
  promptToSegmentation: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: {
      content: {
        'application/json': {
          /** @enum {string} */
          context?: 'analytics' | 'api' | 'companies' | 'company' | 'documentation' | 'enrichment' | 'landing' | 'list' | 'similarity'
          force?: boolean
          listId?: number
          /** @enum {string} */
          model?: 'small' | 'large'
          prompt: string
        }
      }
    }
    responses: {
      /** @description Convert a query to a segmentation. */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            meta: components['schemas']['PaginationMeta']
            prompt: components['schemas']['Prompt']
            response: {
              all?: boolean
              cost?: number
              count?: number
              domain?: string
              error?: string
              domains?: string[]
              listId?: number
              query?: components['schemas']['SegmentationCondition'][]
            }
          }
        }
      }
      /** @description The error message */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': {
            details?: unknown
            /** @enum {string} */
            messages: 'tokenNotFound' | 'invalidApiSecret' | 'missingApiSecret' | 'userNotAuthenticated'
            status: number
          }
        }
      }
    }
  }
}

export const operationsMap = { fetchApiHealth: { path: '/', method: 'get', pathParams: [] }, fetchOpenApi: { path: '/v2/openapi', method: 'get', pathParams: [] }, fetchActions: { path: '/v2/actions', method: 'get', pathParams: [] }, requestAction: { path: '/v2/actions', method: 'post', pathParams: [] }, searchCompanies: { path: '/v2/companies', method: 'get', pathParams: [] }, searchCompaniesPost: { path: '/v2/companies', method: 'post', pathParams: [] }, fetchCompany: { path: '/v2/companies/{domain}', method: 'get', pathParams: ['domain'] }, searchCompaniesByName: { path: '/v2/companies/by-name', method: 'get', pathParams: [] }, searchCompaniesByPrompt: { path: '/v2/companies/by-prompt', method: 'get', pathParams: [] }, searchSimilarCompanies: { path: '/v2/companies/similar', method: 'get', pathParams: [] }, countCompanies: { path: '/v2/companies/count', method: 'get', pathParams: [] }, countCompaniesPost: { path: '/v2/companies/count', method: 'post', pathParams: [] }, fetchCompanyByEmail: { path: '/v2/companies/by-email', method: 'get', pathParams: [] }, fetchCompanyBySocial: { path: '/v2/companies/by-social', method: 'get', pathParams: [] }, fetchCompanyEmailPatterns: { path: '/v2/companies/{domain}/email-patterns', method: 'get', pathParams: ['domain'] }, askCompany: { path: '/v2/companies/{domain}/ask', method: 'get', pathParams: ['domain'] }, fetchCompanyContext: { path: '/v2/companies/{domain}/context', method: 'get', pathParams: ['domain'] }, fetchCompaniesAnalytics: { path: '/v2/companies/analytics', method: 'get', pathParams: [] }, exportCompaniesAnalytics: { path: '/v2/companies/analytics/export', method: 'get', pathParams: [] }, searchIndustries: { path: '/v2/industries', method: 'get', pathParams: [] }, searchIndustriesSimilar: { path: '/v2/industries/similar', method: 'get', pathParams: [] }, searchTechnologies: { path: '/v2/technologies', method: 'get', pathParams: [] }, searchCities: { path: '/v2/locations/cities', method: 'get', pathParams: [] }, searchCounties: { path: '/v2/locations/counties', method: 'get', pathParams: [] }, searchCountries: { path: '/v2/locations/countries', method: 'get', pathParams: [] }, searchStates: { path: '/v2/locations/states', method: 'get', pathParams: [] }, searchContinents: { path: '/v2/locations/continents', method: 'get', pathParams: [] }, enrichJobTitles: { path: '/v2/job-titles/enrich', method: 'get', pathParams: [] }, fetchLists: { path: '/v2/lists', method: 'get', pathParams: [] }, createList: { path: '/v2/lists', method: 'post', pathParams: [] }, updateList: { path: '/v2/lists/{listId}', method: 'patch', pathParams: ['listId'] }, deleteList: { path: '/v2/lists/{listId}', method: 'delete', pathParams: ['listId'] }, fetchCompaniesInList: { path: '/v2/lists/{listId}/companies', method: 'get', pathParams: ['listId'] }, fetchCompaniesInListPost: { path: '/v2/lists/{listId}/companies', method: 'post', pathParams: ['listId'] }, listsToggleCompanies: { path: '/v2/lists/{listId}/companies/toggle', method: 'post', pathParams: ['listId'] }, fetchTeam: { path: '/v2/teams/{teamId}', method: 'get', pathParams: ['teamId'] }, updateTeam: { path: '/v2/teams/{teamId}', method: 'patch', pathParams: ['teamId'] }, fetchUser: { path: '/v2/user', method: 'get', pathParams: [] }, fetchPrompts: { path: '/v2/prompts', method: 'get', pathParams: [] }, deletePrompt: { path: '/v2/prompts/{promptId}', method: 'delete', pathParams: ['promptId'] }, productPrompt: { path: '/v2/prompts/product', method: 'post', pathParams: [] }, promptToSegmentation: { path: '/v2/prompts/segmentation', method: 'post', pathParams: [] } } as const
export type OperationsMap = { [K in keyof operations]: typeof operationsMap[K] }
