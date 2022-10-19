export default class Cliente {
    private razaoSocial: string
    private telefone: number

    constructor(razaoSocial: string, telefone: number){
        this.razaoSocial = razaoSocial
        this.telefone = telefone
    }
    static vazio(){
        return new Cliente("", 0)
      }
    get nomeCliente() {
        return this.razaoSocial
    }

    
    get telefoneCliente() {
        return this.telefone
    }
}