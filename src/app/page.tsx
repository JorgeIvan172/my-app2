

import Image from "next/image";
import styles from "./page.module.css";
import i18n from "../../i18n/i18n";
import Home  from "@/Components/Home";
import { Navar } from "@/Components/Navar";
//import Proyects from "@/Components/Proyects";




export default function Page() {
  return (
    <>
    <Navar />
    <Home />
  
    </>
  );
}
