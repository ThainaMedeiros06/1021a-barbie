import './Hearder.css'
import Link from './../link/Link'
function Header(){
    return(
        <header>
            <div>
                <h1 className='logo'>Babie</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link texto='Home'/>
                    </li>
                    <li>
                        <Link texto='Notícia'/>
                    </li>
                    <li>
                        <Link texto='Sobre'/>
                    </li>
                    <li>
                        <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header