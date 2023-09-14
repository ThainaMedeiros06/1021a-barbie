import { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
type FilmeType = {
       id:number,
       titulo:string,
       sinopse:string,
       imagem:string
}

export default function Main(){
       const [texto,setTexto]=useState("")

       const filmes:FilmeType[] = [
              {
                     id:1,
                     titulo:'Barbie',
                     sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
                     imagem:'/barbie.png'
              },
              {
                     id:2,  
                     titulo:'ken',
                     sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
                     imagem:'/KEN.png'
              },
              {
                     id:3,
                     titulo:'Barbie',
                     sinopse:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
                     imagem:'/boneca-linda-garota-gerada-por-ai.jpg'
              }
       ]

       function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
              setTexto(e.target.value)
       }
    return(
    <>
        <div className='campo-pesquisa'>
              <p>Busque um filme</p>
            <input type="text" className='input' placeholder='Pesquise um Filme' onChange={TrataTexto}/>
            <img className='img-lupa' src="lupa.png" alt="" />
            { 
               (texto)?<p>Resultados Para: {texto}</p>:"" 
            }
        </div>
        {/** use algo do vetor para tentar criar os filmes */}
        {
              filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto)).map((filme)=><Filme key={filme.id} sinopse={filme.sinopse} titulo={filme.titulo} imagem={filme.imagem}/>)
        }
        <main className="content-main">
            {/*<Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'/>
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/boneca-linda-garota-gerada-por-ai.jpg'/>
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/KEN.png'/>
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'/>
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'/>
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'/>
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'/>
            <Filme titulo='Barbie'
                   sinopse='Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.'
                   imagem='/barbie.png'/>*/}
        </main>
        </>
    )
}