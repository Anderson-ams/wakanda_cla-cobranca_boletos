import React from "react";
import TituloTabela from '../TituloTabela';
interface LayoutProps {
    titulo?: string
    children: any
} 
function LayoutTabela(props: LayoutProps) {
    return (
        <div
            className={` w-11/12 p-6 border-4 h-72 mt-6 ml-9 mr-8 border-black bg-gray-200 text-center`}>
                {/* <TituloTabela>{props.titulo}</TituloTabela> */}
            <span>{props.children}</span> 
        </div>
    );
} 

export default LayoutTabela;
