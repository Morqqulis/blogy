import EditForm from '../ui/EditForm'

interface ISectionEdit {}

const SectionEdit: React.FC = (): JSX.Element => {
  return (
    <section className={`py-10 lg:py-20`}>
      <div className="container">
        <h1 className={`mb-10 text-center text-2xl font-bold lg:text-3xl`}>Add Article</h1>
        <EditForm />
      </div>
    </section>
  )
}

export default SectionEdit
