import { createClient } from '@thecompaniesapi/sdk'

async function run() {
  try {
    const tca = createClient({ apiToken: 'XXXX' })

    const user: Record<string, string> = {
      email: 'julien@thecompaniesapi.com',
      name: 'Julien',
    }

    const response = await tca.fetchCompanyByEmail({ email: user.email })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }

    const responseData = await response.json()

    if (responseData?.company?.about) {
      user.companyName = responseData.company.about.name
      user.companyLogo = responseData.company.about.logo
      user.companyIndustry = responseData.company.about.industryMain
      user.companyEmployees = responseData.company.about.totalEmployees
    }

    if (responseData?.company?.finances) {
      user.companyRevenue = responseData.company.finances.revenue
    }

    if (responseData?.company?.urls) {
      user.companyWebsite = responseData.company.urls.website
    }

    if (responseData?.email) {
      user.fullName = responseData.email.fullName
      user.freeEmail = responseData.email.isFree
      user.disposableEmail = responseData.email.isDisposable
    }

    console.log(user)
  }
  catch (error) {
    console.error('❌ Error:', error)
  }
}

run()
