import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from "./styles/paralax.module.css"
import p1 from "./assets/p1.png"
import p2 from "./assets/p2.webp"
import p3 from "./assets/p3.jpg"
import p4 from "./assets/p4.webp"
function App() {
 


  return (
    <>
   <section className={styles.about}>
<img src={p4} alt="" />
   </section>
    <section className={styles.photo1}>
      <img className='h-[100vh] w-full' src={p2} alt="" />
   </section>
    <section className={styles.photo2}>
      <img src={p1} alt="" />
   </section>
   <section className={styles.photo3}>
    <img src={p3} alt="" />
    </section>
   </>
  )
}

export default App