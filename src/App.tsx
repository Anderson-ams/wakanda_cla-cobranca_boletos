import Cabecalho from './components/Cabecalho';
import Rotas from './routes';
import { RecoilRoot } from 'recoil'


function App() {
    return (
        <RecoilRoot>
            <Cabecalho />
            <Rotas />
        </RecoilRoot>
    )
}
export default App;


