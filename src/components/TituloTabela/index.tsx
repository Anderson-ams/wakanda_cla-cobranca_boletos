
function TituloTabela(props: any) {
    return (
        <div className='flex flex-col justify-center'>
            <h1 className='text-center text-3xl mt-1 font-bold'>
                {props.children}
            </h1>
            <hr />
        </div>
    )
}

export default TituloTabela;