import Logo from '@common/Logo'
import Menu from './Menu'
import MobileMenu from './MobileMenu'

interface IHeader {}

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={`relative z-50 bg-white shadow-md py-6 sm:py-8 md:py-12`}>
      <div className="container">
        <nav className={`flex items-center justify-between gap-2.5`}>
          <Logo className={`w-full max-w-[200px] sm:max-w-[300px] md:max-w-[395px]`} color="black" />
          <Menu />
          <MobileMenu />
        </nav>
      </div>
    </header>
  )
}

export default Header
