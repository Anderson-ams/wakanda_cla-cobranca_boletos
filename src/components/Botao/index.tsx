
import React from 'react';
import style from './Botao.module.scss';


type IProps = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
}


const Botao: React.FC<IProps> = (props) => {

    const { onClick } = props
    return (
        <button onClick={onClick}  className={style.botao} >
            {props.children}
        </button>
    )
}
export default Botao

