import type { Article, Main, TopHeadlines } from "@interfaces/newsapi"

export const FTopHeadlines = async <T>({
  endpoint,
  category,
  pageSize = 10,
  wrappedByKey,
  wrappedByList
}: TopHeadlines): Promise<T> => {
  // prettier-ignore
  const url = new URL(
    import.meta.env.NEWSAPI_URL + "/v2/" + endpoint
    + "?apiKey=" + import.meta.env.NEWSAPI_API_KEY
    + "&country=" + "us"
    + "&category=" + category
    + "&pageSize=" + pageSize
  )

  const response = await fetch(url)
  let data: Main | Article[] = await response.json()

  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1)
  }

  if (wrappedByKey) {
    data = data[wrappedByKey as keyof typeof data]
  }

  if (wrappedByList) {
    data = data[0 as keyof typeof data]
  }

  return data as T
}
