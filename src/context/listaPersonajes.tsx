import React, { Children, createContext, useContext, useEffect, useState } from "react"

type Favorito = {
    addToLista : (id:string)=>void
    lista : string[]
    deleteFromLista : (id:string)=>void
}

const PersonajeContexto = createContext<Favorito|null>(null)

export const PersonajeProvider = ({children}:{children:React.ReactNode}) =>{
   const [lista,setLista] = useState<string[]>([])
   const guardado = localStorage.getItem("ids")
   useEffect(()=>{
    if(guardado){
    const c = guardado?guardado?.split(","):[]
    setLista(c)
    }
   },[])
   useEffect(()=>{
    localStorage.setItem("ids",String(lista))
   },[lista])
   const addToLista = (id:string) =>{setLista([...lista,id])}
   const deleteFromLista = (id:string) =>{setLista(lista.filter(x=>x !== id))}
return(
    <div>
        <PersonajeContexto.Provider value={{addToLista,lista,deleteFromLista}}>{children}</PersonajeContexto.Provider>
    </div>
)}

export const useLista=()=>{
    const Context = useContext(PersonajeContexto)
    if(!Context) throw new Error("El contexto es nulo")
        return Context
    }