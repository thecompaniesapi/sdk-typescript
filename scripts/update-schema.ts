import fs from 'node:fs'
import process from 'node:process'
import dotenv from 'dotenv'
import openapiTS, { astToString } from 'openapi-typescript'

dotenv.config()

async function update() {
  const version = process.env.TCA_API_VERSION || 'v2'
  const apiUrl = process.env.TCA_API_URL ? `${process.env.TCA_API_URL}/${version}/openapi` : `https://api.thecompaniesapi.com/${version}/openapi`
  const schema = (await fetch(apiUrl).then(res => res.json())) as any

  console.log('Pulling schema from:', apiUrl)

  const operations = Object
    .entries(schema.paths as Record<string, any>)
    .reduce(
      (acc, [path, operation]: [string, Record<string, any>]) => {
        for (const [method, op] of Object.entries(operation)) {
          acc[op.operationId] = {
            path,
            method,
            pathParams: op?.parameters?.filter((param: any) => param.in === 'path').map((param: any) => param.name) || [],
          }
        }

        return acc
      },
      {} as Record<string, { path: string, method: string, pathParams: string[] }>,
    )

  console.log(`Found ${Object.keys(operations).length} operations`)

  const ast = await openapiTS(JSON.stringify(schema))

  let contents = astToString(ast)

  contents = `${contents}\nexport const operationsMap = ${JSON.stringify(operations)} as const`

  contents = `${contents}\nexport type OperationsMap = { [K in keyof operations]: typeof operationsMap[K] }`

  const typescriptPath = './sdks/typescript/src/schema.ts'

  fs.writeFileSync(typescriptPath, contents)

  console.log(`TypeScript schema written in ${typescriptPath}`)
}

update()
