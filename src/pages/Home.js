import '../css/Home.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../images/LogoThemes.png';
import { VscGithub } from 'react-icons/vsc';
import { BiCoffeeTogo } from 'react-icons/bi';
import { IconContext } from 'react-icons';

function Home() {
    const history = useHistory();

    const onClick = (path) => {
        history.push(path);
    }

    return (
        <body class="imgback">
            <div class="navbar">
                <img src={logo} alt="" />

                <Link to="/" class="navbutton1">
                    <h3>Theme Customizer</h3>
                </Link>

                <Link to="/vscode" class="navbutton2">
                    <h4>VS Code</h4>
                </Link>
            </div>

            <table class="mainbox">

                <tr>
                    <td class="welcomebox">
                        <h1>Theme Customizer</h1>
                    </td>

                    <td class="mainoptions">
                        <div>
                            <h2>Select a platform</h2>

                            <Button
                            onClick={() => onClick("/vscode")}
                            >
                                VS Code
                            </Button>
                        </div>
                    </td>
                </tr>
            </table>

            <footer>
                <IconContext.Provider value={{ style: {
                    position: 'relative',
                    top: '12.5px',
                    fontSize: '40px',
                    color: '#d6d6d6'
                }}}>
                    <p>
                        <a target="_blank" rel="noreferrer" href="https://github.com/ZaderRox1111">
                            <VscGithub />  
                        </a>
                        &nbsp; Check out my other projects! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a target="_blank" rel="noreferrer" href="https://paypal.me/zachariahderrick">
                            <BiCoffeeTogo />
                        </a>
                        &nbsp; Buy me a coffee!
                    </p>
                </IconContext.Provider>
            </footer>
        </body>
    )
}

export default Home;
