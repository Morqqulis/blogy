// store.ts
import { articles as initialArticles } from '@data/index'
import { IArticles } from '@interfaces/index'
import { create } from 'zustand'

interface IMainStore {
  articles: IArticles[]
  addArticle: (article: IArticles) => void
}

const useMainStore = create<IMainStore>((set) => ({
  articles: [...initialArticles],

  addArticle: (article: IArticles) =>
    set((state) => ({
      articles: [...state.articles, article]
    }))
}))

export default useMainStore
