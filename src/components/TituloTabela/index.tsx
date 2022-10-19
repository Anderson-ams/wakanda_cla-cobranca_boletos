
// type TituloProps = {
//     children: string
// }


//VOCÊ PAROU NA AULA COMPONENTE LAYOUT MIN[8:00]
function TituloTabela(props: any) {
    return (
        <div className='flex flex-col justify-center'>
            <h1 className='p-9 text-5xl'>
                {props.children}
            </h1>
            <hr />
        </div>
    )
}

export default TituloTabela;