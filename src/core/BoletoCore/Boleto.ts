
export default class Boleto {
    // private #id: UUID;
     private numeroBoleto: string
     private numeroDaParcela: string
     private dataDoVencimento: Date
     private valorDoBoleto: number

    constructor(numeroBoleto: string, numeroDaParcela: string, dataDoVencimento: Date, valorDoBoleto: number){
        this.numeroBoleto = numeroBoleto
        this.numeroDaParcela = numeroDaParcela
        this.dataDoVencimento = dataDoVencimento
        this.valorDoBoleto = valorDoBoleto
    }
    static vazio(){
        return new Boleto("", "", new Date(), 0)
      }
    get numeroDoBoleto(){
        return this.numeroBoleto
    }

    get numeroParcela(){
        return this.numeroDaParcela
    }

    get dataVencimento(){
        return this.dataDoVencimento
    }
    get valorBoleto(){
        return this.valorDoBoleto
    }
}