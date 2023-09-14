export type Articles = {
  source: {
    id: string
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export default interface TopHeadlines {
  status: string
  totalResults: number
  articles: Articles
}
