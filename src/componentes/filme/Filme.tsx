//Como importar uma imagem em REACT

import Imagem from "./../../assets/img/barbie.png"
import './Filme.css'
function Filme(){
    return(
        <div className="filme-content">
            {/** O comentario dentro do JSX é desse formato */}
            {/** Dentro das chaves você pode  utilzar java script*/}
            {/**Por isso podemos importar o "imagem" dentro*/}
            <img src={Imagem} alt="" />
            <div className="text-barbie">
                <h1>Barbie</h1>
                <p className="sinopse">DEpois de ser expulsa da Barbieland por ser uma boneca de aparencia</p>
            </div>
        </div>
    )
}
export default Filme