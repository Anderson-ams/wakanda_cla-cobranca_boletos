import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import Botao from '../../components/Botao'
import style from './Cobranca.module.scss'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';


function Cobranca() {

    const [valorNegociado, setValorNegociado] = useState("");
    const [anotacao, setAnotacao] = useState("");
    const [dataDeRetorno, setDataDeRetorno] = useState("");

    const navigate = useNavigate();
    const idBoleto = localStorage.getItem('idBoleto')

    const salvarDadoInput = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        const data = {
            valorNegociado: valorNegociado,
            anotacao: anotacao,
            dataDeRetorno: dataDeRetorno
        }
        await axios.post('gestao-de-cobranca/api/v1/boleto/' + idBoleto + '/cobranca', data)
            .then(() => {
                // Swal.fire({
                //     position: 'top-end',
                //     icon: 'success',
                //     title: 'CLIENTE SALVO',
                //     showConfirmButton: false,
                //     timer: 1700
                // });
                swal("Good job!", "You clicked the button!", "success");
                setTimeout(() => {
                    navigate('/')
                }, 2000)

            })
            .catch(() => {
                const MySwal = withReactContent(Swal)
                MySwal.fire({
                    title: <strong>ALGO DEU ERRADO</strong>,
                    html: <i>You clicked the button!</i>,
                    icon: 'error'
                })
            })
        console.log('state',
            valorNegociado,
            anotacao,
            dataDeRetorno
        )

    }

    return (
            <form onSubmit={salvarDadoInput}>
                <section className={style.elementosLinha}>
                    <div >
                        <label htmlFor="codigo-cliente">NOME DO CLIENTE:</label>
                        <input
                            className={style.inputCodigoCliente}
                            type="text"
                            disabled
                            name="codigo-cliente"
                            required
                            min="0" />
                    </div>
                    <div >
                        <label htmlFor="inscricao-social">
                            NÚMERO DE PARCELAS:
                        </label>
                        <input className={style.inputNumeroParcela}
                            disabled
                            type="text" />
                    </div>
                </section>

                <section>
                    <div className={style.inputNumeroBoleto} >
                        <label htmlFor="codigo-cliente">NÚMERO DO BOLETO:</label>
                        <input
                            type="text"
                            disabled
                            name="codigo-cliente"
                            required
                            min="0" />
                    </div>
                    <div className={style.inputValorBoleto} >
                        <label htmlFor="codigo-cliente">VALOR DO BOLETO:</label>
                        <input
                            type="text"
                            disabled
                            name="codigo-cliente"
                            required
                            min="0" />
                    </div>
                    <div className={style.inputValorNegociado} >
                        <label htmlFor="codigo-cliente">VALOR NEGOCIADO:</label>
                        <input
                            value={valorNegociado}
                            onChange={e => setValorNegociado(e.target.value)}
                            className={style.iValorNegociado}
                            type="text"
                            name="codigo-cliente"
                            required
                            min="0"
                        />
                    </div>
                </section>

                <section>
                    <div className={style.labelAnotacao}>
                        <label htmlFor="#" typeof='text' id='anotacao' >ANOTAÇÃO:</label>
                    </div>

                    <div className={style.campoTextarea}>
                        <textarea
                            value={anotacao}
                            onChange={e => setAnotacao(e.target.value)}
                            required
                            name=""
                            id="anotacao"
                        ></textarea>
                    </div>

                    <div className={style.labelDataRetorno}>
                        <label htmlFor="">DATA DE RETORNO:</label>
                    </div>
                    <div className={style.inputDataRetorno}>
                        <input
                            value={dataDeRetorno}
                            onChange={e => setDataDeRetorno(e.target.value)}
                            type="date" />
                    </div>

                    <div className={style.botaoCliente}>
                        <Botao >
                            Salvar
                        </Botao>
                    </div>
                </section>
            </form>
    )
}
export default Cobranca