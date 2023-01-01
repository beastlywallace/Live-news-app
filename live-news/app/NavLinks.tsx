'use-client'
import { Categories } from "../constants"
import { NavLink } from "./NavLink"
import {usePathname} from 'next/navigation'
export const NavLinks = () => {
    const pathname = usePathname()

    //comparing if the popped paart pf the url is equalto the path passed into it 
    const isActive = (path: string) => {
        return pathname?.split('/').pop() === path  
    }
  return (
      <nav className="grid grid-cols-4 md:grid-col-7  text-xs md:text-sm gap-4 pb-10 max-w-6xl  mx-auto border-b">
          {Categories.map((category) => (
              <NavLink key={category} category={category} isActive={isActive(category)} />
          )
              
           )}  
    </nav>
  )
}
