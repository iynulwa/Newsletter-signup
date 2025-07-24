import {useNavigate} from 'react-router-dom'
import './App.css'

function SuccessMsg(){

    const navigate = useNavigate();

    function handleReturn() {
        navigate('/', {replace: true})
    }

    return(
        <div className='success-message'>
            <div>
                <img src='/images/icon-success.svg' alt='success icon' loading='lazy'/>
                <h1>Thanks for subscribing!</h1>
                <p>
                    A confirmation email has been sent to <span className='email-styling'>ash@loremcompany.com</span>. 
                    Please open it and click the button inside to confirm your subscription.
                </p>
            </div>
            <button onClick={handleReturn} id='dismiss-btn'>Dismiss message</button>
        </div>
    )
}

export default SuccessMsg;