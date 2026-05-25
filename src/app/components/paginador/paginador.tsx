"use client"

import "./paginador.css"
type Props = {
    page:number,
    next:boolean,
    prev:boolean,
    totalPages:number,
    setPage: (page:number) => void
}
export const FuncionPaginacion = ({page,next,prev,totalPages,setPage}: Props) =>{
    const paginas = [
        1,2,3,page,totalPages-2,totalPages-1,totalPages]
    const paginasSinRepetir = paginas.filter((e,index)=>{
        return paginas.indexOf(e) === index
    })
    return ( 
        <div className="generalPaginacion">
           <div className="izq">
                <button onClick={()=>{if(prev){setPage(page-1)}}}> ← </button>
            </div>
            <div className="numeros">
                {paginasSinRepetir.map((e)=>{
                    if(e > 0 && e <= totalPages){
                        return(
                            <button key={e} onClick={()=>setPage(e)}>{e}</button>
                        )
                    }
                })}
            </div>
            <div className="der">
                <button onClick={(()=>{if(next){setPage(page+1)}})}> → </button>
            </div>
        </div>
    )

}