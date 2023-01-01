'use client'

import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

export const SearchBox = () => {
    const router =useRouter( )
    const [input, setInput] = useState('')
    function handleSearch( e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!input) return
        router.push(`./search?term=${input}`)
        //or `./search/${input} `
    }
  return (
      <form onSubmit={handleSearch} className="max-w-6xl mx-auto flex items-center px-5 border justify-between">
          <input value={input}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
              type='text'
              className='w-full h-14 rounded-sm flex-1 outline-none placeholder-gray-500 text-gray-500 bg-transparent dark:text-orange-400' placeholder="Search keywords..." />
          <button  type='submit' disabled={!input} className=' text-orange-400 disabled:text-gray-400'>Search</button>
    </form>
  )
}
