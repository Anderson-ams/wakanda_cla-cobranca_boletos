import { useNavigate } from 'react-router-dom';

export const useProximaRota = () => {
    const navigate = useNavigate()
    navigate(`/boleto`)
}