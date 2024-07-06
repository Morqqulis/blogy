import SectionArticles from '@sections/SectionArticles'
import SectionHero from '@sections/SectionHero'
import { homePageMeta } from '@settings/meta'
import { NextPage } from 'next'

export const metadata = homePageMeta

const Home: NextPage = () => {
  return (
    <main>
      <SectionHero />
      <SectionArticles />
    </main>
  )
}

export default Home
