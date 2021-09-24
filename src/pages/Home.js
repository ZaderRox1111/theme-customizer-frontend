import '../css/Home.css';
import React, {Component} from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Home() {
    return (
        <body class="imgback">
            
            <div class="navbar">
                <h3>Theme Customizer</h3>
            </div>

            <table class="mainbox">

                <tr>
                    <td class="welcomebox">
                        <h1>Theme Customizer</h1>
                    </td>

                    <td class="mainoptions">
                        <div>
                            <h2>Select a platform</h2>
                        </div>
                    </td>
                </tr>
            </table>
        </body>
    )
}

export default Home;
