"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import Templatelist from './_components/Templatelist'

const Dashboard = () => {
  const [userSearchInput,setuserSearchInput] = useState<string>()
  return (
    <div>
     {/* search section */}
     <SearchSection onSearchInput={(value:string)=>setuserSearchInput(value)}
     />
     <Templatelist userSearchInput={userSearchInput}/>
     {/* template list section */}
    </div>
  ) 
}

export default Dashboard
