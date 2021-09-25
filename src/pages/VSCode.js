import '../css/VSCode.css';
import { Link } from 'react-router-dom';
import logo from '../images/LogoThemes.png';

function VSCode() {
    return (
        <body>
            <div class="navbar">
                <img src={logo} alt="" />

                <Link to="/" class="navbutton1">
                    <h3>Theme Customizer</h3>
                </Link>

                <Link to="/vscode" class="navbutton2">
                    <h4>VS Code</h4>
                </Link>
            </div>
            
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
        </body>
    )
}

export default VSCode;
