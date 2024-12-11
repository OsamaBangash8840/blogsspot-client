'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import RandomNews from './RandomNews';


export const RestrictedNews = () => {
    const pathname = usePathname(); 

  return (
    <>
        {pathname !== '/contact' && ( 
              <div className="hidden lg:block">
                <RandomNews />
              </div>
            )}
    </>
  )
}
