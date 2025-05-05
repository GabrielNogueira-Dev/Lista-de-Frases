import { useState } from 'react';
import './App.css';
import logoimg from'./assets/logo.png'

function App() {
 
const [textofrase,setTextoFrase] = useState("")
const [categoriaSelecionada,setCategoriaSelecionada] = useState(0)
 
const allfrases = [{
id:1,
nome:"motivação",
frases:["Siga os bons e aprenda com eles",
"A mente de um homem o torna rei ",
"O bom-senso vale mais do que muito conhecimento",
"Deixe de lado suas preocupações e seja feliz","Acredite em milagres, mas não dependa deles",
"A maior fraqueza do sucesso é o medo do fracasso"]
 },
 {
  id:2,
  nome:"Bom dia",
  frases:["Acorde pela manhã e encha o coração de gratidão e otimismo", "sorria perante os desafios e tenha um bom dia!",
"Agradecer é o primeiro passo para ter um dia feliz e abençoado!",
"Sorria e confie nos planos que o universo preparou para você!",
"Que o amor esteja presente do começo ao fim do seu dia!"]
 }
 ]



  return (
    <div className="container">
     <img src={logoimg} alt="" className='logo' />

<h2 className='title'>Categorias</h2>
<section className='category-area'>
 {allfrases.map((item,index)=>(
  
     <button key={item.id}
      className='category-button'
      style={{
        borderWidth:item.nome === allfrases[categoriaSelecionada].nome ? 2 : 0,
        borderColor: "#007bff"
      }}
      >
        {item.nome}
        </button>
    
 ))}
</section>
<button className='buttom-frase' 
>Gerar Frases</button>

{textofrase !== "" && <p className='textofrase'>"{textofrase}"</p>}
        </div>
          
  )
}
export default App;