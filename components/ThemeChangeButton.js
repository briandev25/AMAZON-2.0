import React,{ useEffect, useState } from 'react';
import { useTheme } from 'next-themes'
import { MoonIcon,SunIcon } from '@heroicons/react/solid'

function ThemeChangeButton() {

 const {systemTheme,theme,setTheme} = useTheme();
 const [mounted,setMounted] = useState(false);


    useEffect(() =>{
        setMounted(true)
    },[])

    const renderThemeChanger = () =>{
        if(!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;

        if(currentTheme === 'dark'){
            return <SunIcon className=' text-yellow-400 w-7 h-7' role='button' onClick={() => setTheme('light')} />
        }else
        {
            return <MoonIcon className=' text-gray-50 w-7 h-7' role='button' onClick={() => setTheme('dark')}  />
        }
    }
 
  return (
    <div>{renderThemeChanger()}</div>
  )
}

export default ThemeChangeButton