import { IArticles } from '@interfaces/index'
import Image from 'next/image'
import Link from 'next/link'

const Article: React.FC<IArticles> = ({ className, title, desc, img, id }: IArticles): JSX.Element => {
  return (
    <article className={`${className || ''} w-full md:max-w-[304px]`}>
      <Link className={`group/article flex h-full flex-col rounded-lg shadow-2xl`} href={`${id}`}>
        <Image
          className={`w-full rounded-lg group-hover/article:scale-95`}
          src={img}
          alt={'Article image'}
          width={304}
          height={176}
        />
        <h3
          className={`p-5 text-center text-[22px] font-medium leading-[120%] animate-in group-hover/article:animate-pulse group-hover/article:text-red-500`}
        >
          {title}
        </h3>
      </Link>
    </article>
  )
}

export default Article
