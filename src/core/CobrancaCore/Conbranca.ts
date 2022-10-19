export default class Cobranca {
  private valorNegociado: number;
  private dataDeRetorno: Date;
  private anotacao: string;
  constructor(valorNegociado: number, dataDeRetorno: Date, anotacao: string) {
    this.valorNegociado = valorNegociado;
    this.dataDeRetorno = dataDeRetorno;
    this.anotacao = anotacao;
  }

  static vazio(){
    return new Cobranca(0, new Date(), "")
  }

  get valorNegociadoAPagar() {
    return this.valorNegociado;
  }
  get dataDoRetorno() {
    return this.dataDeRetorno;
  }
  get anotacaoCobranca() {
    return this.anotacao;
  }
}
