export interface Main {
  status:       string
  totalResults: number
  articles:     Article[]
}

export interface Article {
  source:      Source
  author:      null | string
  title:       string
  description: null | string
  url:         string
  urlToImage:  null | string
  publishedAt: Date
  content:     null | string
}

export interface Source {
  id:   null | string
  name: string
}

export interface TopHeadlines {
  endpoint:       string
  country?:       Country
  category?:      Category
  q?:             string
  pageSize?:      number
  page?:          number
  wrappedByKey?:  string
  wrappedByList?: boolean
}

export type Country = "id" | "us"

export type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology"
