import Image from 'next/image'

interface ISectionHero {}

const SectionHero: React.FC = (): JSX.Element => {
  return (
    <section className={`py-[30px] lg:py-[75px]`}>
      <div className="container">
        <div className={`flex min-h-[calc(80vh-134px)] flex-col items-center justify-center`}>
          <div className={`mb-11`}>
            <Image src={'/hero.jpg'} alt={'hero'} priority quality={75} width={1920} height={1080} />
          </div>
          <h1
            className={`mx-auto mb-8 max-w-[858px] text-balance text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl`}
          >
            A few words about this blog platform, Ghost, and how this site was made
          </h1>
          <p className={`mx-auto max-w-[592px] pb-[33px] text-center text-xl leading-[170%]`}>
            Why Ghost (& Figma) instead of Medium, WordPress or other options?
          </p>
          <span className={`mx-auto block h-0.5 w-full max-w-[640px] bg-black`}></span>
        </div>
      </div>
    </section>
  )
}

export default SectionHero
