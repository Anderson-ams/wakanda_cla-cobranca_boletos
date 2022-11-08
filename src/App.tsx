import Toobar from './components/Cabecalho';
import Rotas from './routes';
import { RecoilRoot } from 'recoil'


function App() {
    return (
        <RecoilRoot>
            <Toobar />
            <Rotas />
        </RecoilRoot>
    )
}
export default App;


