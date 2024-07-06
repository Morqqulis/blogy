'use client'
import { navigation } from '@data/index'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface IMenu {
  className?: string
}

const Menu: React.FC<IMenu> = ({ className }: IMenu): JSX.Element => {
  const path = usePathname()

  return (
    <ul
      className={`hidden items-center gap-8 text-xl font-medium uppercase tracking-widest sm:flex ${className || ''}`}
    >
      {navigation.map((item) => (
        <li className={``} key={item.id}>
          <Link
            href={item.href}
            className={`relative block ${path === item.href ? 'before:absolute before:left-0 before:-z-[-1] before:h-0.5 before:w-full before:bg-black sm:before:-bottom-[34px] md:before:-bottom-[54px]' : ''} text-lg font-medium transition-colors hover:text-primary`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu
