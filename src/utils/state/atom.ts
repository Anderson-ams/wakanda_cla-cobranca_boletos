import {atom} from 'recoil'
import IAgregadosDeClientes from '../interfaces/AgregadosDeCliente';
import IFiltroTabela from '../interfaces/IFiltroTabela';

export const filtroDeTabela = atom<IAgregadosDeClientes>({
    key: 'filtroDeTabela',
    // default: {}
})