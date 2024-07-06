import SectionEdit from '@sections/SectionEdit'
import { editPageMeta } from '@settings/meta'
import { NextPage } from 'next'

interface Ipage {}

export const metadata = editPageMeta

const EditPage: NextPage = (): JSX.Element => {
  return (
    <main>
      <SectionEdit />
    </main>
  )
}

export default EditPage
