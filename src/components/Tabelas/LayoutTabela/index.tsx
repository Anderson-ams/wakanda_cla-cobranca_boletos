import React from "react";
//import TituloTabela from '../TituloTabela';

interface LayoutProps {
    titulo?: string
    children: any
} 
function LayoutTabela(props: LayoutProps) {
    return (
        <div
            className={` pt-4  flex justify-center bg-slate-400 text-center`}>
                {/* <TituloTabela>{props.titulo}</TituloTabela> */}
            <span>{props.children}</span> 
        </div>
    );
} 

export default LayoutTabela;
