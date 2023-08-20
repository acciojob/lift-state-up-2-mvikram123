import React, { useState } from "react";



const Child=({inputValue,setInputValue})=>{
    


   return (
    
         <div className="child">
            <h2>Child component</h2>

         <input type="text" placeholder="write something here" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>



    </div>
       
    )
}
export default Child;