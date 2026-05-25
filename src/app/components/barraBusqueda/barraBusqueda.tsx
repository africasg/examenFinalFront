"use client"
import { useState } from "react"
import "./barraBusqueda.css"
type Props = {
    setSearch:React.Dispatch<React.SetStateAction<string>>
}
const Buscador =  ({setSearch}:Props)=>{
    const [name,setName]= useState<string>("")
    return(
        <div className="generalBarra">
        <p>Nombre:</p>
        <input value={name} onChange={(e)=>setName(e.target.value)} 
                onKeyDown={(e)=>{
                  if(e.key === "Enter"){setSearch(name)}}}></input>
                <button onClick={()=>setSearch(name)}>Buscar</button>
        </div>
    )

}
export default Buscador