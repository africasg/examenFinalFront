"use client"
import "../filtroStatus/filtroStatus.css"
type Props={
    gender:string,
    setGender:React.Dispatch<React.SetStateAction<string>>
}
export const FiltroGender = (props:Props)=>{
    const generos = ["Female","Male","Genderless","unknown"]
    const cambiarGenero = ()=>{
        const posicion = generos.indexOf(props.gender)
        if(posicion === generos.length-1){
            props.setGender(generos[0])
        }
        else{
            props.setGender(generos[posicion+1])
        }
    }
    return(
        <div className="botonFiltro">
        <button onClick={cambiarGenero}>Gender: {props.gender}</button>
        </div>
    )
}