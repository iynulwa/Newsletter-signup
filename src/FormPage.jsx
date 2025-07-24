import './App.css'
import Input from './Input'

function FormPage() {

    return(
        <main className='signup-form'>
            <picture>
                <source media='(min-width: 40rem)' srcSet='/images/illustration-sign-up-desktop.svg' alt='page illustration' loading='lazy'/>
                <img src='/images/illustration-sign-up-mobile.svg' alt='page illustration' loading='lazy'/>
            </picture>
            <div className='form-info'>
                <h1>Stay updated!</h1>
                <p>
                    Join 60,000+ product managers receiving monthly updates on:
                </p>
                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>
                <Input />
            </div>
        </main>
    )
}

export default FormPage;