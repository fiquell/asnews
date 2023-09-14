interface Props {
  endpoint: string
  country: "id" | "us"
  category:
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology"
  pageSize?: number
  wrappedByKey?: string
  wrappedByList?: boolean
}

export default async <T>({
  endpoint,
  country,
  category,
  pageSize = 10,
  wrappedByKey,
  wrappedByList
}: Props): Promise<T> => {
  // prettier-ignore
  const url = new URL(
    import.meta.env.NEWSAPI_URL + "/v2/" + endpoint
    + "?apiKey=" + import.meta.env.NEWSAPI_API_KEY
    + "&country=" + country
    + "&category=" + category
    + "&pageSize=" + pageSize
  )

  const response = await fetch(url)
  let data = await response.json()

  if (wrappedByKey) {
    data = data[wrappedByKey]
  }

  if (wrappedByList) {
    data = data[0]
  }

  return data as T
}
