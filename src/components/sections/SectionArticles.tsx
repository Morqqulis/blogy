import { articles } from '@data/index'
import Article from '../custom/Article'
import Articles from '../custom/Articles'

interface ISectionArticles {}

const SectionArticles: React.FC = (): JSX.Element => {
  return (
    <section className={`pb-12 lg:pb-20`}>
      <div className="container">
        <h2 className={`mb-10 text-center text-[44px] font-bold leading-[52px]`}>All articles</h2>
        <Articles />
      </div>
    </section>
  )
}

export default SectionArticles
