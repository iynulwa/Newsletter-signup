import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import './App.css'

function Input(){

    const [email, setEmail] = useState("");
    const [errorState, setErrorState] = useState(false); 
    const navigate = useNavigate();

    function handleChange(event){
        setEmail(event.target.value);
        if (errorState) setErrorState(false) // clear error when user starts typing
    }

    function validate(input) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(input);
    }

    function handleSubmit(event) {
        // must validate the email entry & display the next page
        event.preventDefault();

        if (email.trim() === "" || !validate(email)) {
            setErrorState(true)
        } else {
            setErrorState(false);
            navigate('/successpage');
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='email'>Email address 
                    {errorState && <span className='error-msg'>Valid email required</span>}
                </label>
                <input onChange={handleChange} name='email' id='email' type='email' placeholder='email@company.com' value={email} required></input>
                <button id='submit-btn'>Subscribe to monthly newsletter</button>      
            </form>
        </>
    )
}

export default Input;