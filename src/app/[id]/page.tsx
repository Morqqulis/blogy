import SectionCurrentArticle from '@sections/SectionCurrentArticle'
import { acticlePageMeta } from '@settings/meta'

interface Ipage {}

export const metadata = acticlePageMeta

const Page = ({ params }: { params: { id: string } }): JSX.Element => {
  return (
    <main>
        
      <SectionCurrentArticle params={params} />
    </main>
  )
}

export default Page
