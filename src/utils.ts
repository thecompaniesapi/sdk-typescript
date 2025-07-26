export function querySerializer(query: Record<string, any>) {
  const search = new URLSearchParams()

  // Convert all GET params to strings
  for (const key in query) {
    if (typeof query[key] === 'object') {
      search.set(key, encodeURIComponent(JSON.stringify(query[key])))
      continue
    }

    if (Array.isArray(query[key])) {
      search.set(key, encodeURIComponent(JSON.stringify(query[key])))
      continue
    }

    search.set(key, (query[key]?.toString() || query[key]) as string)
  }

  return {
    string: search.toString(),
    object: Object.fromEntries(search.entries()),
  }
}
