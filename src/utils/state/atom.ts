import { IFiltroDeTabela } from '../interfaces/IFiltroTabela';
import {atom} from 'recoil'

export const filtroDeTabela = atom<IFiltroDeTabela>({
    key: 'filtroDeTabela',
    default: {}
})