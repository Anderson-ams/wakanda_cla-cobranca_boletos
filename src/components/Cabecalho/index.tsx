import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from './Toobar.module.scss'
// import Logo from '../../assets/icons/logo-embreve-01-300x129.png'

function Toobar() {
    return (
        <header >
            <div className={style.toBar}>
                <a href="/" className={style.wakanda}>
                    Gestão de Cobranca
                </a>
            </div>
            {/* Trabakhar com sgv é melhor */}
            {/* <img src={Logo} alt="logoNaturaves" /> */}
        </header>)
}
export default Toobar

