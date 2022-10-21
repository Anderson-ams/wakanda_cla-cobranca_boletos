
export default class Boleto {
    // private #id: UUID;
    private numeroBoleto: string
    private numeroDaParcela: string
    private valorDoBoleto: number
    private dataDoVencimento: string

    constructor(numeroBoleto: string, numeroDaParcela: string, valorDoBoleto: number, dataDoVencimento: string) {
        this.numeroBoleto = numeroBoleto
        this.numeroDaParcela = numeroDaParcela
        this.dataDoVencimento = dataDoVencimento
        this.valorDoBoleto = valorDoBoleto
    }
    static vazio() {
        return new Boleto("", "", 0, "")
    }
    get numeroDoBoleto() {
        return this.numeroBoleto
    }

    get numeroParcela() {
        return this.numeroDaParcela
    }

    get dataVencimento() {
        return this.dataDoVencimento
    }
    get valorBoleto() {
        return this.valorDoBoleto
    }
}