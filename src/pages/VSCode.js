import '../css/VSCode.css';
import { Link } from 'react-router-dom';
import logo from '../images/LogoThemes.png';
import VSCodeBox from '../components/VSCodeBox';
import { VscGithub } from 'react-icons/vsc';
import { BiCoffeeTogo } from 'react-icons/bi';
import { IconContext } from 'react-icons';

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

            <br />

            <table class="themevs">
                <tr>
                    <td class="colors">
                        <h4>test</h4>
                    </td>

                    <td class="themebox">
                        <VSCodeBox />
                    </td>
                </tr>
            </table>

            <footer class="footerthemes">
                <IconContext.Provider value={{ style: {
                    position: 'relative',
                    top: '12.5px',
                    fontSize: '40px',
                    color: '#d6d6d6'
                }}}>
                    <p class="pthemes">
                        <a href="https://github.com/ZaderRox1111">
                            <VscGithub />  
                        </a>
                        &nbsp; Check out my other projects! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://paypal.me/zachariahderrick">
                            <BiCoffeeTogo />
                        </a>
                        &nbsp; Buy me a coffee!
                    </p>
                </IconContext.Provider>
            </footer>
        </body>
    )
}

export default VSCode;
