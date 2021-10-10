import '../css/VSCode.css';
import { exportTemplate } from '../api/export';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/LogoThemes.png';
import VSCodeBox from '../components/VSCodeBox';
import { VscGithub } from 'react-icons/vsc';
import { BiCoffeeTogo } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core';
import Instructions from '../components/Instructions'

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

    const [c1, setC1] = useState('#1c252e');
    const [c2, setC2] = useState('#44929e');
    const [c3, setC3] = useState('#c15f6f');
    const [c4, setC4] = useState('#64b2be');
    const [c5, setC5] = useState('#84b5ca');
    const [c6, setC6] = useState('#a7a8af');
    const [c7, setC7] = useState('#54ac86');
    const [c8, setC8] = useState('#24727e');
    const [c9, setC9] = useState('#171f26');
    const [c10, setC10] = useState('#719bad');
    const [c11, setC11] = useState('#f9a64e');
    const [c12, setC12] = useState('#84b5ca');
    const [c13, setC13] = useState('#6d6f7c');
    const [c14, setC14] = useState('#C871B7');

    const [exp, setExp] = useState({});

    const onClick = async () => {
        let expBody = '';

        for (const [key, value] of Object.entries(exp)) {
            expBody += `${key}=${value}&`
        }

        const template = await exportTemplate( expBody );

        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(template.data, null, 4));

        const doc = document.createElement('a');

        doc.href = dataStr;

        doc.download = 'copy-contents.json';
        doc.click();
    }

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

            <div class="box">
                <VSCodeBox 
                    setExp={setExp}
                    c1={c1} setC1={setC1}
                    c2={c2} setC2={setC2}
                    c3={c3} setC3={setC3}
                    c4={c4} setC4={setC4}
                    c5={c5} setC5={setC5}
                    c6={c6} setC6={setC6}
                    c7={c7} setC7={setC7}
                    c8={c8} setC8={setC8}
                    c9={c9} setC9={setC9}
                    c10={c10} setC10={setC10}
                    c11={c11} setC11={setC11}
                    c12={c12} setC12={setC12}
                    c13={c13} setC13={setC13}
                    c14={c14} setC14={setC14}
                />
            </div>

            <div class="export">
                <h2 class="exporth">Ready to export it?</h2>
                <Button 
                    className={exportbutton}
                    onClick={onClick}
                >
                Export
                </Button>
            </div>

            <Instructions />

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
