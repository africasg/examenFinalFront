"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Buscador from "./components/barraBusqueda/barraBusqueda";

const Home = () => {
  const [search,setSearch] = useState<string>("")
  return (
   <div>
   <Buscador setSearch={setSearch} ></Buscador>
   <p>{search}</p>
   </div>
  );
}
export default Home
