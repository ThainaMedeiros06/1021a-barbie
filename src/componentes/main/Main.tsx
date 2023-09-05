import Filme from './../filme/Filme'
import './Main.css'

export default function Main(){
    return(
    <>
        <div className='campo-pesquisa'>
            <input type="text" className='input' placeholder='O que deseja'/>
            <p>Digitado:</p>
        </div>
        <main className="content-main">
            <Filme titulo='Barbie'
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
                   imagem='/barbie.png'/>
        </main>
        </>
    )
}