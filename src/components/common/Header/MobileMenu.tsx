import { navigation } from '@data/index'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@ui/sheet'
import { Menu as Burger } from 'lucide-react'

import Link from 'next/link'

interface IMobileMenu {}

const MobileMenu: React.FC = (): JSX.Element => {
  return (
    <div className={`block sm:hidden`}>
      <Sheet>
        <SheetTrigger asChild className={`flex flex-col items-center justify-center`} aria-label={'Open menu button'}>
          <Burger size={30} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className={`my-10`}>Pages:</SheetTitle>
            <div className={`mt-10 flex flex-col items-center gap-5`}>
              {navigation.map((item) => (
                <SheetClose asChild key={item.id}>
                  <Link className={`text-2xl text-blue-500 underline`} href={item.href}>
                    {item.name}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu
