import Image from 'next/image'
import React from 'react'
import ThemeChangeButton from './ThemeChangeButton'
import { MenuIcon,SearchIcon,ShoppingCartIcon,ChevronDownIcon } from '@heroicons/react/outline'
import { signIn,signOut,useSession} from 'next-auth/react'
function Header() {
    const { data: session } = useSession();

    
    return (
    <div className='sticky top-0 z-50 shadow-md'>
         {/* Top Nav */}
        <div className='flex flex-grow items-center bg-amazon_blue py-2 w-full overflow-x-hidden'>
                      {/* Logo */}
              <div className='relative w-40  h-10 flex-shrink-0 mx-2 mt-3 cursor-pointer flex flex-grow sm:flex-grow-0'>
                  <Image alt='' src="https://links.papareact.com/f90" layout='fill' objectFit='contain'  />
              </div>
                    {/* Search */}
             <div className='hidden sm:flex bg-amber-400 hover:bg-yellow-500 h-10 flex-grow cursor-pointer rounded-sm mr-4'>
                 <div className='flex items-center bg-gray-100 text-black hover:font-semibold px-2 rounded-tl-sm rounded-bl-sm'>
                     <span className=' text-xs'>All</span>
                     <ChevronDownIcon className='h-7  p-2 ' />
                 </div>
                 <input className=' flex-grow flex-shrink dark:bg-white outline-none px-3' type='text'></input>
                 <SearchIcon className='h-9 p-2' />
             </div>
                 {/* Right Items */}
            <div className='hidden lg:flex items-center mx-6 md:gap-x-3 lg:gap-x-6 md:flex-shrink lg:flex-shrink-0  text-white whitespace-nowrap'>
                <div onClick={() =>!session ? signIn() : signOut()} className='link pb-1'>
                    <p className=' text-xs'>
                        {session ? `Hello, ${session.user.name}`:'Hello,Sign In' }
                        </p>
                    <p className=' font-semibold'>Account & Lists</p>
                </div>
                <div className='link pb-1 '>
                    <p className=' text-xs'>Returns</p>
                    <p className=' font-semibold'>& Orders</p>
                </div>
                <div className='link border-none relative'>
                    <ShoppingCartIcon className='h-10' />
                    <div className=' text-xs font-bold absolute h-4 w-4 top-0 right-0 flex items-center justify-center bg-yellow-400 p-3 rounded-full text-black'>0</div>
                </div>
                <div> <ThemeChangeButton  /> </div>
                
            </div>
        </div>
        {/* Bottom Nav */}
        <div className=' flex items-center space-x-1 py-2 text-white bg-amazon_blue-light whitespace-nowrap overflow-scroll scrollbar-hide'>
           <div className='flex items-center space-x-3 secondLink'>
           <MenuIcon className=' h-6 ml-1 cursor-pointer' />
           <p>All</p>
           </div>
           <p className=' secondLink '>Today's Deals</p>
           <p className=' secondLink'>Customer Service</p>
           <p className=' secondLink' >Registry</p>
           <p className=' secondLink'>Today's Deals</p>
           <p className=' secondLink'>Gift Cards</p>
           <p className='secondLink'>Sell</p>
        </div>
    </div>
  )
}

export default Header