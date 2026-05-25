"use client"
type Props={
    status:string,
    setStatus:React.Dispatch<React.SetStateAction<string>>
}
export const FiltroStatus = (props:Props)=>{
    const estados = ["Dead","Alive","unknown"]
    const cambiarEstado = ()=>{
        const posicion = estados.indexOf(props.status)
        if(posicion === estados.length-1){
            props.setStatus(estados[0])
        }
        else{
            props.setStatus(estados[posicion+1])
        }
    }
    return(
        <button onClick={cambiarEstado}>Status: {props.status}</button>
    )
}