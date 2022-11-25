import styleCabecalho from './Cabecalho.module.scss'
import logoNaturaves from '../../assets/icons/naturaves.png'

function Cabecalho() {
    return (
        <>
            <header >
                <div className={styleCabecalho.toBar}>
                    <div className={styleCabecalho.div_logoNaturaves}>
                        <img src={logoNaturaves} className={styleCabecalho.logoNaturaves} />
                    </div>
                </div>
            </header>
            <div>
            <p className={styleCabecalho.texto_cabecalho}>GESTÃO DE COBRANÇA</p>
            </div>
        </>
    )
}
export default Cabecalho

