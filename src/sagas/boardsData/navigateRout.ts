import { useNavigate } from 'react-router-dom';

function navigateTo(route:string) {
    const navigate = useNavigate();
    navigate(route);
}

export default navigateTo;