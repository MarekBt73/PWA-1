
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {

const [name1, setName1] = useState('');
const [name2, setName2] = useState('');
const [adres1, setAdres] = useState('');


const data = {
imie : name1,
nazwisko : name2,
ulica : adres1,
}
console.log('imie:'+ data.imie, 'nazwisko:'+ data.nazwisko, 'adres:'+data.ulica);



const handleName1 = (e) => {

setName1(e.target.value)
}
const handleName2 = (e) => {

setName2(e.target.value)
}
const handleAdres1 = (e) => {

setAdres(e.target.value)
}

const handleSubmit = (e) => {
 /*  e.preventDefault() */
  console.log('klikniete');
}

  return (
    <div className={styles.container}>
      <h1>Hallo Next</h1>
      <div className={styles.form_wrapper}>
        <form  className={styles.form_1} action="/api/form" method="post" onSubmit={handleSubmit}>
          {" "}
          <label htmlFor='name1'>
            Imie 
            <input required type='text' name='name1' id='name1'  onChange={handleName1}/></label>
          
          <label htmlFor='name2'>
            Nazwisko
            <input required type='text' name='name2' id='name2' onChange={handleName2} /></label>
          
          <label htmlFor='adres1'>
            Adres 
            <input required type='text' name='adres1' id='adres1'  onChange={handleAdres1}/></label>
            <input type='submit' value='zapisz'  />
         
        </form>
      </div>
    </div>
  );
}
