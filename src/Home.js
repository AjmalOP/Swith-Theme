import React from 'react'
import { useState } from 'react'

function Home() {
  const [ change , setChange ] = useState({bodycolor:'white',headcolor: 'black'})
    function Change (){
         if(document.body.style.backgroundColor === 'white'){
          setChange({
            bodycolor:'black' ,
            headcolor:'white' 
          })
         }else{
          setChange({
            bodycolor: 'white',
            headcolor: 'black'
          })
         }
    }
    document.body.style.backgroundColor = change.bodycolor
  return (
    <div>
    <h1 style={{color:change.headcolor}}>This Is Home Page</h1>
    <button onClick={Change}  style={{padding:'5px 10px' , border:'2px solid' , borderColor:change.headcolor , color:change.bodycolor , borderRadius:'28px', backgroundColor:change.headcolor}}><b>Switch Theme</b></button>
    </div>
  )
}

export default Home