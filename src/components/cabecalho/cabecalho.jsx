import {Navigate,NavLink as Link} from 'react-router-dom'
import style from './cabecalho.module.css'
export function Header(){


    return (
        <header className={style.header}>
            <span>Logo</span>
            <nav>
                <ul className={style.ul}>
                    <li> <Link to="/">inicio</Link> </li>
                    <li> <Link to="/sobre">sobre</Link></li>
                    <li> <Link to="/servicos">servicos</Link></li>
                    <li> <Link to="/contacto">contactos</Link></li>
                </ul>
            </nav>
        </header>
    )
}