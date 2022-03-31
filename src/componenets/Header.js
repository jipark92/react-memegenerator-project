import react from 'react'
import titleLogo from '../images/titlelogo.png'

export default function Header() {
    return (
        <div className="header-container">
            <header>
                <img src={titleLogo} className="title-logo"/>
                <h1>MEME GENRATOR</h1>
            </header>
            <p>React Mini Project</p>

        </div>
    )
}