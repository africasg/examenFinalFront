"use client"
import { useState } from "react"

type Props = {
    setSearch:React.Dispatch<React.SetStateAction<string>>
}

const Buscador =  ({setSearch}:Props)=>{
    const [name,setName]= useState<string>("")
    return(
        <div>
        <p>Nombre:</p>
        <input onChange={(e) => { setName(e.target.value) } }></input>
        <button onClick={()=>{setSearch(name)}}>Buscar</button>
        </div>
    )

}
export default Buscador