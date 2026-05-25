"use client"

import "./globals.css"
import { useEffect, useState } from "react"
import { Character } from "./types"
import { CharacterCard } from "./components/characterCard/characterCard"
import { FiltroStatus } from "./components/filtroStatus/filtroStatus"
import { FiltroGender } from "./components/filtroGender/filtroGender"
import { FuncionPaginacion } from "./components/paginador/paginador"
import { api } from "@/lib/api"
import Buscador from "./components/barraBusqueda/barraBusqueda"
const Home = ()=>{
    const [personajes,setPersonajes] = useState<Character[]>([])
    const [page,setPage] = useState<number>(1)
    const [status,setStatus] = useState<string>("")
    const [gender,setGender] = useState<string>("")
    const [name,setName] = useState<string>("")
    const [search,setSearch] = useState<string>("")
    const [totalPages,setTotalPages] = useState<number>(1)
    const [prev,setPrev] = useState<boolean>(false)
    const [next,setNext] = useState<boolean>(false)
    const [error,setError] = useState<string>("")
    const [loading,setLoading] = useState<boolean>(true)
useEffect(()=>{
   api.get(`/character/?page=${page}&status=${status}&gender=${gender}&name=${search}`).then((e)=>{
    setPersonajes(e.data.results)
    setTotalPages(e.data.info.pages)
    setNext(e.data.info.next)
    setPrev(e.data.info.prev)}).catch((e)=>{
        setError(e.message)
        }).finally(()=>{
          setLoading(false)
         })
    },[page,status,gender,search])
    return(
        <div className="generalPagina">
          <Buscador setSearch={setSearch}></Buscador>
            <div className="filtros">
            <div className="filtroStatus">
                <FiltroStatus status={status} setStatus={setStatus}></FiltroStatus>
                </div>
                
                <div className="filtroGender">
                <FiltroGender gender={gender} setGender={setGender}></FiltroGender>
                </div>
                </div>
            <h1>Número de personajes por página: {personajes.length}</h1>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            <div className="organizado">
                {personajes && personajes.map((e)=>{
                    return(<CharacterCard key={e.id} personaje={e}></CharacterCard>)
                })}
            </div>
            <FuncionPaginacion page={page}setPage={setPage}totalPages={totalPages} next={next} prev={prev}></FuncionPaginacion>
        </div>
    )
}
export default Home