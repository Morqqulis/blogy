'use client'
import Image from 'next/image'
import useMainStore from '../../stores/store'
import Article from '../custom/Article'

interface ISectionCurrentArticle {}

const SectionCurrentArticle = ({ params }: { params: { id: string } }): JSX.Element => {
  const article = useMainStore((state) => state.articles.find((article) => article.id === Number(params.id)))
  
  return (
    <section className={`py-10`}>
      <div className="container">
        <h1 className={`mb-10 text-center text-5xl font-bold`}>Article № {params.id}</h1>
        {article && (
          <div className={`flex flex-col gap-5`}>
            <h2 className={`text-center font-medium sm:text-lg md:text-xl lg:text-2xl`}>{article.title}</h2>
            <Image
              className={`mx-auto h-auto w-full max-w-[800px] rounded-xl`}
              src={article.img}
              alt={article.title}
              priority
              width={304}
              height={176}
            />
            <p className={`text-[20px] italic`}>{article.desc}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default SectionCurrentArticle
