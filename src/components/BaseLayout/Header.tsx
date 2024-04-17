import React from 'react'

export default function Header() {

  return (
    <div className="w-full  h-[77px]  mx-auto text-center py-4 ">
    <h1 className="text-4xl font-bold  leading-tight mb-2 pb-4 relative">
        <span className="bg-clip-text text-transparent  bg-gradient-to-r from-gray-200 to-gray-400">Photo Gallery </span>
        <span className="absolute bottom-0 left-0 w-full h-1  bg-gradient-to-r from-gray-200 to-gray-900"></span>
    </h1>
</div>
  )
}
