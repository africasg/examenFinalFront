"use client"
import { Character } from "@/app/types"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import "./characterCard.css"
import { api } from "@/lib/api"
type Props = {
    id?:number,
    personaje?:Character
}
export const CharacterCard = ({id,personaje}:Props) =>{
    const router = useRouter()
    const [personajeOficial,setPersonajeOficial] = useState<Character|null>(null)
    useEffect(()=>{
        if(id){
            api.get(`/character/${id}`).then((e)=>{
                setPersonajeOficial(e.data)
            })
        }
        else if(personaje){
            setPersonajeOficial(personaje)
        }
    },[id,personaje])

    return(
        <div className="generalCartaPersonaje">
            <img src = {personajeOficial?.image}></img>
            <h1>Nombre: {personajeOficial?.name}</h1>
            <h2>Status: {personajeOficial?.status}</h2>
            <h2>Gender: {personajeOficial?.gender}</h2>
            <button onClick={()=>router.push(`/character/${personajeOficial?.id}`)}>Ver más</button>
        </div>
    )
}