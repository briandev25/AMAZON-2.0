import Image from 'next/image'
import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter';

function Product({id,title,price,description,category,image,rating}) {
    
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 text-gray-900 cursor-pointer'>
    <p className='absolute top-0 right-0 text-gray-400 mr-2 '>{category}</p>
    <Image src={image} height={200} width={200} objectFit='contain' />
    <h4 className=' text-base font-semibold mt-2 line-clamp-3'>{title}</h4>
    <div className='flex py-2'>
        {Array(parseInt(rating.rate)).fill().map((_,i) =>(
            <StarIcon className='h-5 text-yellow-500' />
        ))}
    </div>
    <p className='my-2 text-sm text-gray-600 font-semibold line-clamp-2'>{description}</p>
    <div className='mb-5'>
        <Currency currency='GBP' quantity={price} />
    </div>
    <div className='flex items-center space-x-2 my-5'>
        <img className='w-12' src='https://links.papareact.com/fdw' />
        <p className='text-xm text-gray-500'>FREE Next-day Delivery</p>
    </div>
    <button className='mt-auto button'>Add to basket</button>
    </div>
  )
}

export default Product