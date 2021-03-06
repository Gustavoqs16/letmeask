import { useNavigate } from 'react-router-dom'

import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';


export function Home(){
    const history = useNavigate();

    function navigateToNewRoom() { 
        history('/roons/new')
    }
    return(
        <div id='page-auth'>
            <aside>
                <img src={illustration} alt=""/>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as d&uacute;vidas da sua audi&ecirc;ncia em tempo real </p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="Logo LetmeAsk" />
                    <button className='create-room' onClick={navigateToNewRoom}>
                        <img src={googleIconImg} alt="logo do Google"/>
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type='submit'>
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}