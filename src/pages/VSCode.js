import '../css/VSCode.css';
import { Link } from 'react-router-dom';
import logo from '../images/LogoThemes.png';
import VSCodeBox from '../components/VSCodeBox';
import { VscGithub } from 'react-icons/vsc';
import { BiCoffeeTogo } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    exportbutton: {
        display: "inline",
        fontSize: "40px",
        width: "200px",
        height: "75px"
    },
}));

const VSCode = () => {
    const { exportbutton } = useStyles();

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

            <div class="head">
                <h2 class="headcreate">
                    Create Your Own VSCode Theme!
                </h2>
                <h4 class="headplug">
                    Like what you see? Download my theme&nbsp;
                    <a class="plug" target="_blank" href="https://marketplace.visualstudio.com/items?itemName=ZaderRox1111.stormy-lighthouse-dark" rel="noreferrer">Stormy Lighthouse</a>
                    &nbsp;on VSCode Marketplace
                </h4>
            </div>

            <VSCodeBox />

            <div class="export">
                <h2 class="exporth">Ready to export it?</h2>
                <Button 
                    className={exportbutton}
                >
                Export
                </Button>
            </div>

            <div class="instructions">
                <h2 class="exporth" style={{textAlign:'center', padding: '50px'}}>Instructions</h2>
            </div>

            <footer class="footerthemes">
                <IconContext.Provider value={{ style: {
                    position: 'relative',
                    top: '12.5px',
                    fontSize: '40px',
                    color: '#d6d6d6'
                }}}>
                    <p class="pthemes">
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

export default VSCode;
