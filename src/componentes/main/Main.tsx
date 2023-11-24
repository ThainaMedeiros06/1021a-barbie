import axios from "axios";
import { useState, useEffect } from 'react';
import Filme from './../filme/Filme'
import './Main.css'

type FilmeType = {
  id: number,
  titulo: string,
  descricao: string,
  foto: string
}

export default function Main() {
  const [texto, setTexto] = useState("");
  const [dados, setDados] = useState<FilmeType[]>([]);

  useEffect(() => {
    const buscarFilmes = async () => {
      try {
        // Usando axios para buscar dados do backend 
        const resposta = await axios.get('http://localhost:3000/filmes'); // Adicionei o protocolo http
        // Atualizando o estado com os dados recebidos
        setDados(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }

    buscarFilmes(); // Chamada correta da função
  }, []); // Adicionei os colchetes vazios para garantir que o useEffect seja executado apenas uma vez

  function trataTexto(e: React.ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value)
  }

  return (
    <>
      <div className="pesquisar">
        <input type="text" className='botao-pesquisa' placeholder='Pesquise um filme' onChange={trataTexto} />
        {texto && <p>Resultados para: {texto}</p>}
      </div>

      <main className="content-main">
        {
          dados.filter((filme) => filme.titulo.toLowerCase().includes(texto)).map(
            (filme) =>
              <Filme
                key={filme.id}
                descricao={filme.descricao}
                titulo={filme.titulo}
                foto={filme.foto}
              />
          )
        }
      </main>
    </>
  )
}