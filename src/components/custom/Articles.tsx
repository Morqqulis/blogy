'use client'
import useMainStore from '../../stores/store'
import Article from './Article'

interface IArticles {}

const Articles: React.FC = (): JSX.Element => {
  const articles = useMainStore((state) => state.articles)

  return (
    <div className={`mx-auto grid max-w-[640px] grid-cols-1 justify-items-center gap-7 md:grid-cols-2`}>
      {articles.map((article: any, index: number) => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  )
}

export default Articles
