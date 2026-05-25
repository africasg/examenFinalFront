"use client"
import { useEffect, useState } from "react"
import { Character } from "@/app/types"
import { useParams } from "next/navigation"
import "./page.css"
import { api } from "@/lib/api"

const PaginaPersonaje = ()=>{
    const [personaje,setPersonaje] = useState<Character | null>(null)
    const {id} = useParams()
    useEffect(()=>{
        api.get(`/character/${id}`).then((e)=>{
            setPersonaje(e.data)})
    },[])
    return(
        <div className="generalPaginaPersonaje">
        <div className="generalPersonaje">
            <img src={personaje?.image}></img>
            <h1>{personaje?.name}</h1>
            <h2>Estado: {personaje?.status}</h2>
            <h2>Género: {personaje?.gender}</h2>
            <h2>Especie: {personaje?.species}</h2>
            <h2>ID: {personaje?.id}</h2>
            <h2>Origen: {personaje?.origin.name}</h2>
            <h2>Localizacion: {personaje?.location.name}</h2>
        </div>
        </div>
    )
}

export default PaginaPersonaje