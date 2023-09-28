import './Hearder.css'
import LinkNav from '../linknav/LinkNav'
function Header(){
    return(
        <header>
            <div>
                <h1 className='logo'>Babie</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <LinkNav url="/" texto='Home'/>
                    </li>
                    <li>
                        <LinkNav url="/Noticía" texto='Notícia'/>
                    </li>
                    <li>
                        <LinkNav url="/Sobre" texto='Sobre'/>
                    </li>
                    <li>
                        <LinkNav url="/Contato" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header