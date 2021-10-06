import '../css/VSCodeBox.css';
import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { HexColorPicker } from 'react-colorful';
import ColorButton from './ColorButton';

const useStyles = makeStyles(theme => ({
    maintext: {
        backgroundColor: '#1e3042',
        position: 'relative',
        width: '100%',
        height: '96%',
        lineHeight: '18px',
    }
}));

function VSCodeBox() {
    const { maintext } = useStyles();
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

    const [c1open, setC1Open] = useState(false);
    const [c2open, setC2Open] = useState(false);
    const [c3open, setC3Open] = useState(false);
    const [c4open, setC4Open] = useState(false);
    const [c5open, setC5Open] = useState(false);
    const [c6open, setC6Open] = useState(false);
    const [c7open, setC7Open] = useState(false);
    const [c8open, setC8Open] = useState(false);
    const [c9open, setC9Open] = useState(false);
    const [c10open, setC10Open] = useState(false);
    const [c11open, setC11Open] = useState(false);
    const [c12open, setC12Open] = useState(false);

    return (
        <table>
            <tr>
                <td class="colors">

                    <ColorButton
                        setOpen={setC1Open}
                        open={c1open}
                        setColor={setC1}
                        color={c1}
                        theme="Background"
                    />

                    <ColorButton
                        setOpen={setC2Open}
                        open={c2open}
                        setColor={setC2}
                        color={c2}
                        theme="Storage of Variables"
                    />
                    
                    <ColorButton
                        setOpen={setC3Open}
                        open={c3open}
                        setColor={setC3}
                        color={c3}
                        theme="Functions and Constants"
                    />

                    <ColorButton
                        setOpen={setC4Open}
                        open={c4open}
                        setColor={setC4}
                        color={c4}
                        theme="Variables"
                    />

                    <ColorButton
                        setOpen={setC5Open}
                        open={c5open}
                        setColor={setC5}
                        color={c5}
                        theme="Parentheses and Brackets"
                    />

                    <ColorButton
                        setOpen={setC6Open}
                        open={c6open}
                        setColor={setC6}
                        color={c6}
                        theme="Punctuation and Loops"
                    />

                    <ColorButton
                        setOpen={setC11Open}
                        open={c11open}
                        setColor={setC11}
                        color={c11}
                        theme="Numbers and Expressions"
                    />

                    <ColorButton
                        setOpen={setC12Open}
                        open={c12open}
                        setColor={setC12}
                        color={c12}
                        theme="Strings"
                    />

                    <ColorButton
                        setOpen={setC7Open}
                        open={c7open}
                        setColor={setC7}
                        color={c7}
                        theme="Parameters and Modules"
                    />

                    <ColorButton
                        setOpen={setC8Open}
                        open={c8open}
                        setColor={setC8}
                        color={c8}
                        theme="Borders and Line Numbers"
                    />

                    <ColorButton
                        setOpen={setC9Open}
                        open={c9open}
                        setColor={setC9}
                        color={c9}
                        theme="Status Bar Background"
                    />

                    <ColorButton
                        setOpen={setC10Open}
                        open={c10open}
                        setColor={setC10}
                        color={c10}
                        theme="Status Bar Foreground"
                    />

                </td>

                <td class="themebox">
                    <div class="examplebox" style={{backgroundColor: c9, color: c10}}>

                    <h6>Applied Theme</h6>

                    <div class="viewbox">
                        <div class="sidebar">

                        </div>

                        <div class="topbar" style={{backgroundColor:c8}}>    
                            <h5>Top Bar</h5>
                        </div>

                        <div className={maintext} style={{backgroundColor:c1}}>
                            <text>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c8}}>1</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c2}}>const</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>express</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c6}}>=</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c7}}>require</tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c12}}>'express'</tspan>
                                <tspan style={{color:c5}}>)</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br/>
                            <text>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c8}}>2</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c2}}>let</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c4}}>app</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c6}}>=</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>express</tspan>
                                <tspan style={{color:c5}}>()</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br />
                            <text>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c8}}>3</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c2}}>const</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>port</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c6}}>=</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c11}}>8080</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br />
                            <text>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c8}}>4</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            </text><br />
                            <text>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c8}}>5</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c2}}>const</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>listening</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c6}}>=</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c7}}>portNum</tspan>
                                <tspan style={{color:c5}}>)</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c11}}>={'>'}</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c6}}>{'{'}</tspan>
                            </text><br />
                            <text>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c8}}>6</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c4}}>console</tspan>
                                <tspan style={{color:c6}}>.</tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>log</tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c6}}>`</tspan>
                                <tspan style={{color:c12}}>Currently listening on port: </tspan>
                                <tspan style={{color:c6}}>{'${'}</tspan>
                                <tspan style={{color:c4}}>portNum</tspan>
                                <tspan style={{color:c6}}>{'}'} </tspan>
                                <tspan style={{color:c12}}>Access it here: <u>http://localhost:</u></tspan>
                                <tspan style={{color:c6}}><u>{'${'}</u></tspan>
                                <tspan style={{color:c4}}><u>portNum</u></tspan>
                                <tspan style={{color:c6}}><u>{'}'}</u></tspan>
                                <tspan style={{color:c6}}>`</tspan>
                                <tspan style={{color:c5}}>)</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br />
                            <text>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c8}}>7</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            </text><br />
                            <text>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c8}}>8</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c2}}>let</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c4}}>index</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c6}}>=</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c11}}>0</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br />
                            <text>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c8}}>9</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c2}}>let</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c4}}>answerArr</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c6}}>=</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c5}}>[]</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>10</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c2}}>const</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>localObject</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c6}}>=</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c6}}>{'{'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>11</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c4}}>first</tspan>
                                <tspan style={{color:c6}}>: </tspan>
                                <tspan style={{color:c6}}>{'{'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>12</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c4}}>number</tspan>
                                <tspan style={{color:c6}}>: </tspan>
                                <tspan style={{color:c11}}>17</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>13</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c6}}>{'}'}</tspan>
                                <tspan style={{color:c6}}>,</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>14</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c4}}>second</tspan>
                                <tspan style={{color:c6}}>: </tspan>
                                <tspan style={{color:c6}}>{'{'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>15</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c4}}>number</tspan>
                                <tspan style={{color:c6}}>: </tspan>
                                <tspan style={{color:c11}}>-</tspan>
                                <tspan style={{color:c11}}>35.8</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>16</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c6}}>{'}'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>17</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c6}}>{'}'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>18</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>19</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c7}}>Object</tspan>
                                <tspan style={{color:c6}}>.</tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>values</tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c4}}>localObject</tspan>
                                <tspan style={{color:c5}}>)</tspan>
                                <tspan style={{color:c6}}>.</tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>forEach</tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c7}}>value </tspan>
                                <tspan style={{color:c11}}>{'=>'} </tspan>
                                <tspan style={{color:c6}}>{'{'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>20</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c4}}>answerArr</tspan>
                                <tspan style={{color:c5}}>[</tspan>
                                <tspan style={{color:c4}}>index</tspan>
                                <tspan style={{color:c5}}>] </tspan>
                                <tspan style={{color:c6}}>= </tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c4}}>value</tspan>
                                <tspan style={{color:c6}}>.</tspan>
                                <tspan style={{color:c4}}>number </tspan>
                                <tspan style={{color:c11}}>+ </tspan>
                                <tspan style={{color:c11}}>1.0</tspan>
                                <tspan style={{color:c5}}>) </tspan>
                                <tspan style={{color:c11}}>/ </tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c7}}>Math</tspan>
                                <tspan style={{color:c6}}>.</tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>random</tspan>
                                <tspan style={{color:c5}}>() </tspan>
                                <tspan style={{color:c11}}>* </tspan>
                                <tspan style={{color:c4}}>value</tspan>
                                <tspan style={{color:c6}}>.</tspan>
                                <tspan style={{color:c4}}>number</tspan>
                                <tspan style={{color:c5}}>)</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>21</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c4}}>index</tspan>
                                <tspan style={{color:c11}}>++</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>22</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c6}}>{'}'}</tspan>
                                <tspan style={{color:c5}}>)</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>23</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>24</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>bubbleSort</tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c4}}>answerArr</tspan>
                                <tspan style={{color:c6}}>, </tspan>
                                <tspan style={{color:c11}}>2</tspan>
                                <tspan style={{color:c5}}>)</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>25</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c6}}>{'}'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>26</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>27</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c2}}>const</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>swap</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c6}}>=</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c7}}>arr</tspan>
                                <tspan style={{color:c6}}>, </tspan>
                                <tspan style={{color:c7}}>firstIndex</tspan>
                                <tspan style={{color:c6}}>, </tspan>
                                <tspan style={{color:c7}}>secondIndex</tspan>
                                <tspan style={{color:c5}}>)</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c11}}>={'>'}</tspan>
                                <tspan>&nbsp;</tspan>
                                <tspan style={{color:c6}}>{'{'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>28</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c2}}>var </tspan>
                                <tspan style={{color:c4}}>temp </tspan>
                                <tspan style={{color:c6}}>= </tspan>
                                <tspan style={{color:c4}}>arr</tspan>
                                <tspan style={{color:c5}}>[</tspan>
                                <tspan style={{color:c4}}>firstIndex</tspan>
                                <tspan style={{color:c5}}>]</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c3}}>29</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c4}}>arr</tspan>
                                <tspan style={{color:c5}}>[</tspan>
                                <tspan style={{color:c4}}>firstIndex</tspan>
                                <tspan style={{color:c5}}>] </tspan>
                                <tspan style={{color:c6}}>= </tspan>
                                <tspan style={{color:c4}}>arr</tspan>
                                <tspan style={{color:c5}}>[</tspan>
                                <tspan style={{color:c4}}>secondIndex</tspan>
                                <tspan style={{color:c5}}>]</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>30</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c4}}>arr</tspan>
                                <tspan style={{color:c5}}>[</tspan>
                                <tspan style={{color:c4}}>secondIndex</tspan>
                                <tspan style={{color:c5}}>] </tspan>
                                <tspan style={{color:c6}}>= </tspan>
                                <tspan style={{color:c4}}>temp</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>31</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c6}}>{'}'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>32</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>33</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c2}}>const </tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>bubbleSort </tspan>
                                <tspan style={{color:c6}}>= </tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c7}}>arr</tspan>
                                <tspan style={{color:c6}}>, </tspan>
                                <tspan style={{color:c7}}>size</tspan>
                                <tspan style={{color:c5}}>) </tspan>
                                <tspan style={{color:c11}}>={'>'} </tspan>
                                <tspan style={{color:c6}}>{'{'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>34</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c6}}>for </tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c2}}>var </tspan>
                                <tspan style={{color:c4}}>outIndex </tspan>
                                <tspan style={{color:c6}}>= </tspan>
                                <tspan style={{color:c11}}>0</tspan>
                                <tspan style={{color:c6}}>; </tspan>
                                <tspan style={{color:c4}}>outIndex </tspan>
                                <tspan style={{color:c11}}>{'<'} </tspan>
                                <tspan style={{color:c4}}>size </tspan>
                                <tspan style={{color:c11}}>- </tspan>
                                <tspan style={{color:c11}}>1</tspan>
                                <tspan style={{color:c6}}>; </tspan>
                                <tspan style={{color:c4}}>outIndex</tspan>
                                <tspan style={{color:c11}}>++</tspan>
                                <tspan style={{color:c5}}>) </tspan>
                                <tspan style={{color:c6}}>{'{'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>35</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c6}}>for </tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c2}}>var </tspan>
                                <tspan style={{color:c4}}>inIndex </tspan>
                                <tspan style={{color:c6}}>= </tspan>
                                <tspan style={{color:c11}}>0</tspan>
                                <tspan style={{color:c6}}>; </tspan>
                                <tspan style={{color:c4}}>inIndex </tspan>
                                <tspan style={{color:c11}}>{'<'} </tspan>
                                <tspan style={{color:c4}}>size </tspan>
                                <tspan style={{color:c11}}>- </tspan>
                                <tspan style={{color:c4}}>outIndex </tspan>
                                <tspan style={{color:c11}}>- </tspan>
                                <tspan style={{color:c11}}>1</tspan>
                                <tspan style={{color:c6}}>; </tspan>
                                <tspan style={{color:c4}}>inIndex</tspan>
                                <tspan style={{color:c11}}>++</tspan>
                                <tspan style={{color:c5}}>) </tspan>
                                <tspan style={{color:c6}}>{'{'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>36</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c6}}>if </tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c4}}>arr</tspan>
                                <tspan style={{color:c5}}>[</tspan>
                                <tspan style={{color:c4}}>inIndex</tspan>
                                <tspan style={{color:c5}}>] </tspan>
                                <tspan style={{color:c11}}>{'>'} </tspan>
                                <tspan style={{color:c4}}>arr</tspan>
                                <tspan style={{color:c5}}>[</tspan>
                                <tspan style={{color:c4}}>inIndex</tspan>
                                <tspan style={{color:c11}}>+ </tspan>
                                <tspan style={{color:c11}}>1</tspan>
                                <tspan style={{color:c5}}>] </tspan>
                                <tspan style={{color:c5}}>) </tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>swap</tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c4}}>arr</tspan>
                                <tspan style={{color:c6}}>, </tspan>
                                <tspan style={{color:c4}}>inIndex</tspan>
                                <tspan style={{color:c6}}>, </tspan>
                                <tspan style={{color:c4}}>inIndex </tspan>
                                <tspan style={{color:c11}}>+ </tspan>
                                <tspan style={{color:c11}}>1</tspan>
                                <tspan style={{color:c5}}>)</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>37</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c6}}>{'}'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>38</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c6}}>{'}'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>39</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c6}}>{'}'}</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>40</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                            </text><br />
                            <text>
                                <tspan style={{color:c8}}>41</tspan>
                                <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                                <tspan style={{color:c4}}>app</tspan>
                                <tspan style={{color:c6}}>.</tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>listen</tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c4}}>port</tspan>
                                <tspan style={{color:c6}}>, </tspan>
                                <tspan style={{color:c3,fontStyle:"italic"}}>listening</tspan>
                                <tspan style={{color:c5}}>(</tspan>
                                <tspan style={{color:c4}}>port</tspan>
                                <tspan style={{color:c5}}>)</tspan>
                                <tspan style={{color:c5}}>)</tspan>
                                <tspan style={{color:c6}}>;</tspan>
                            </text><br />
                        </div>
                    </div>

                    <h6 class="bottombar">Pick Colors on the Side</h6>
                    </div>
                </td>
            </tr>
            
        </table>
        
    )
}

export default VSCodeBox;
