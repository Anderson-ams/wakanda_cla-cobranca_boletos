
export default class AgregadosDeClientes {
    private nomeCliente: string
    private telefone: string
    private documento: string
    private parcela: string
    private saldoDevedor: number
    private dataVencimento: string;
    private valorNegociado: number
    private anotacao: string
    private dataDeRetorno: string


    constructor(
        nomeCliente: string,
        telefone: string,
        documento: string,
        parcela: string,
        saldoDevedor: number,
        dataVencimento: string,
        valorNegociado: number,
        anotacao: string,
        dataDeRetorno: string) {
        this.nomeCliente = nomeCliente
        this.telefone = telefone
        this.saldoDevedor = saldoDevedor
        this.documento = documento
        this.parcela = parcela
        this.dataVencimento = dataVencimento
        this.valorNegociado = valorNegociado
        this.anotacao = anotacao
        this.dataDeRetorno = dataDeRetorno
    }

    static vazio(){
        return new AgregadosDeClientes("", "","","",0,"",0,"","")
      }
    

    get nomeDoCliente() {
        return this.nomeCliente
    }
    get telefoneDoCliente() {
        return this.telefone
    }

    get saldoDevedorDoBoleto() {
        return this.saldoDevedor
    }
    get numeroDocumentoBoleto() {
        return this.documento
    }
    get parcelaBoleto() {
        return this.parcela
    }
    get vencimentoDoBoleto() {
        return this.dataVencimento
    }
    get valorNegociadoCobranca() {
        return this.valorNegociado

    }
    get anotacaoCobranca() {
        return this.anotacao
    }
    get dataDeRetornoCobrnaca() {
        return this.dataDeRetorno

    }

}