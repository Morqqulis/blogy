import Logo from '@common/Logo'
import Link from 'next/link'

interface IFooter {}

const footerWords = [
  'Digital product design',
  'Remote work',
  'UX design',
  'Distributed teams',
  'Creativity',
  'Strategy',
  'Suspense',
  'Growth'
]

const footerLinks = [
  {
    id: 1,
    name: 'Twitter',
    href: 'https://twitter.com'
  },
  {
    id: 2,
    name: 'Linkedin',
    href: 'https://linkedin.com'
  },
  {
    id: 3,
    name: 'RSS',
    href: 'https://rss.com'
  }
]

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={`bg-black pb-8 pt-[18px] text-center text-white`}>
      <div className={`mb-[105px] flex items-center justify-center gap-2.5 overflow-hidden`}>
        {footerWords.map((word) => (
          <span className={`whitespace-nowrap text-xl font-extrabold uppercase tracking-widest text-white`} key={word}>
            {word}
          </span>
        ))}
      </div>
      <div className="container">
        <Logo className={`mx-auto mb-6 flex max-w-[290px] justify-center`} color={'white'} />
        <p className={`mx-auto mb-8 max-w-[488px] text-base`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac
          habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.
        </p>
        <div className={`mb-16 flex items-center justify-center gap-7`}>
          {footerLinks.map((link) => (
            <Link className={`underline`} href={link.href} key={link.id}>
              {link.name}
            </Link>
          ))}
        </div>
        <p className={`mx-auto max-w-[177px] text-xs`}>© 2012–2020 Nordic Rose Co. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
