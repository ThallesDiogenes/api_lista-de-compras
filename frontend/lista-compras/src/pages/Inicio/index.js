import { useHistory } from 'react-router-dom';
import './styles.css';
import Logo from '../assets/logo.png';

export default function Inicio () {

    const history = useHistory();

    async function listarProdutos(event) {
        history.push('./produtos');
    }

    return(
        <div className='inicio__container'>
            <section>
                <img src={ Logo } alt='Logo' className='image__center' />
                <br />
            </section>
        </div>
    )
}