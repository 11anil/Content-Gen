import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import { Interface } from 'readline'
import TemplateCards from './TemplateCards'

export interface TEMPLATE{
  name:string,
  desc:string,
  icon:string,
  category:string,
  slug:string,
  aiPrompt:string,
  form?:FORM[]
}

export interface FORM{
  label:string,
  field:string,
  name:string,
  required?:boolean
}

const Templatelist = ({userSearchInput}:any) => {

  const [Templatelist,setTemplatelist] = useState(Templates)

  useEffect(()=>{

     if(userSearchInput){
      const filterdata = Templates.filter(item=>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplatelist(filterdata)
     }
     else{
      setTemplatelist(Templates)
     }
     
  },[userSearchInput])
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
      {Templatelist.map((item:TEMPLATE,index:number)=>(
       <TemplateCards {...item}/>
      ))}
    </div>
  )
}

export default Templatelist
