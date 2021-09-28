import '../css/VSCodeBox.css';
import { makeStyles } from '@material-ui/core';
import React from 'react';

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

    return (
        <div class="examplebox">
            
            <h6>Applied Theme</h6>
            
            <div class="viewbox">
                <div class="sidebar">

                </div>

                <div class="topbar">
                    <h5>Top Bar</h5>
                </div>

                <div className={maintext}>
                    <text>
                        <tspan>&nbsp;</tspan>
                        <tspan>1</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>const</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>express</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>=</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>require</tspan>
                        <tspan>(</tspan>
                        <tspan>'express'</tspan>
                        <tspan>)</tspan>
                        <tspan>;</tspan>
                    </text><br/>
                    <text>
                        <tspan>&nbsp;</tspan>
                        <tspan>2</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>let</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>app</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>=</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>express</tspan>
                        <tspan>()</tspan>
                        <tspan>;</tspan>
                    </text><br />
                    <text>
                        <tspan>&nbsp;</tspan>
                        <tspan>3</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>const</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>port</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>=</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>8080</tspan>
                        <tspan>;</tspan>
                    </text><br />
                    <text>
                        <tspan>&nbsp;</tspan>
                        <tspan>4</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                    </text><br />
                    <text>
                        <tspan>&nbsp;</tspan>
                        <tspan>5</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>const</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>listening</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>=</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>(</tspan>
                        <tspan>portNum</tspan>
                        <tspan>)</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>={'>'}</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>{'{'}</tspan>
                    </text><br />
                    <text>
                        <tspan>&nbsp;</tspan>
                        <tspan>6</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>console</tspan>
                        <tspan>.</tspan>
                        <tspan>log</tspan>
                        <tspan>(</tspan>
                        <tspan>`</tspan>
                        <tspan>Currently listening on port: </tspan>
                        <tspan>{'${'}</tspan>
                        <tspan>portNum</tspan>
                        <tspan>{'}'} </tspan>
                        <tspan>Access it here: <u>http://localhost:</u></tspan>
                        <tspan><u>{'${'}</u></tspan>
                        <tspan><u>portNum</u></tspan>
                        <tspan><u>{'}'}</u></tspan>
                        <tspan>`</tspan>
                        <tspan>)</tspan>
                        <tspan>;</tspan>
                    </text><br />
                    <text>
                        <tspan>&nbsp;</tspan>
                        <tspan>7</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                    </text><br />
                    <text>
                        <tspan>&nbsp;</tspan>
                        <tspan>8</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>let</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>index</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>=</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>0</tspan>
                        <tspan>;</tspan>
                    </text><br />
                    <text>
                        <tspan>&nbsp;</tspan>
                        <tspan>9</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>let</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>answerArr</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>=</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>[]</tspan>
                        <tspan>;</tspan>
                    </text><br />
                    <text>
                        <tspan>10</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>const</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>localObject</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>=</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>{'{'}</tspan>
                    </text><br />
                    <text>
                        <tspan>11</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>first</tspan>
                        <tspan>: </tspan>
                        <tspan>{'{'}</tspan>
                    </text><br />
                    <text>
                        <tspan>12</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>number</tspan>
                        <tspan>: </tspan>
                        <tspan>17</tspan>
                    </text><br />
                    <text>
                        <tspan>13</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>{'}'}</tspan>
                        <tspan>,</tspan>
                    </text><br />
                    <text>
                        <tspan>14</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>second</tspan>
                        <tspan>: </tspan>
                        <tspan>{'{'}</tspan>
                    </text><br />
                    <text>
                        <tspan>15</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>number</tspan>
                        <tspan>: </tspan>
                        <tspan>-</tspan>
                        <tspan>35.8</tspan>
                    </text><br />
                    <text>
                        <tspan>16</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>{'}'}</tspan>
                    </text><br />
                    <text>
                        <tspan>17</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>{'}'}</tspan>
                    </text><br />
                    <text>
                        <tspan>18</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                    </text><br />
                    <text>
                        <tspan>19</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>Object</tspan>
                        <tspan>.</tspan>
                        <tspan>values</tspan>
                        <tspan>(</tspan>
                        <tspan>localObject</tspan>
                        <tspan>)</tspan>
                        <tspan>.</tspan>
                        <tspan>forEach</tspan>
                        <tspan>(</tspan>
                        <tspan>value </tspan>
                        <tspan>{'=>'} </tspan>
                        <tspan>{'{'}</tspan>
                    </text><br />
                    <text>
                        <tspan>20</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>answerArr</tspan>
                        <tspan>[</tspan>
                        <tspan>index</tspan>
                        <tspan>] </tspan>
                        <tspan>= </tspan>
                        <tspan>(</tspan>
                        <tspan>value</tspan>
                        <tspan>.</tspan>
                        <tspan>number </tspan>
                        <tspan>+ </tspan>
                        <tspan>1.0</tspan>
                        <tspan>) </tspan>
                        <tspan>/ </tspan>
                        <tspan>(</tspan>
                        <tspan>Math</tspan>
                        <tspan>.</tspan>
                        <tspan>random</tspan>
                        <tspan>() </tspan>
                        <tspan>* </tspan>
                        <tspan>value</tspan>
                        <tspan>.</tspan>
                        <tspan>number</tspan>
                        <tspan>)</tspan>
                        <tspan>;</tspan>
                    </text><br />
                    <text>
                        <tspan>21</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>index</tspan>
                        <tspan>++</tspan>
                        <tspan>;</tspan>
                    </text><br />
                    <text>
                        <tspan>22</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>{'}'}</tspan>
                        <tspan>)</tspan>
                        <tspan>;</tspan>
                    </text><br />
                    <text>
                        <tspan>23</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                    </text><br />
                    <text>
                        <tspan>24</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>bubbleSort</tspan>
                        <tspan>(</tspan>
                        <tspan>answerArr</tspan>
                        <tspan>, </tspan>
                        <tspan>2</tspan>
                        <tspan>)</tspan>
                        <tspan>;</tspan>
                    </text><br />
                    <text>
                        <tspan>25</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>{'}'}</tspan>
                    </text><br />
                    <text>
                        <tspan>26</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                    </text><br />
                    <text>
                        <tspan>27</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>const</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>swap</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>=</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>(</tspan>
                        <tspan>arr</tspan>
                        <tspan>, </tspan>
                        <tspan>firstIndex</tspan>
                        <tspan>, </tspan>
                        <tspan>secondIndex</tspan>
                        <tspan>)</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>={'>'}</tspan>
                        <tspan>&nbsp;</tspan>
                        <tspan>{'{'}</tspan>
                    </text><br />
                    <text>
                        <tspan>28</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>var </tspan>
                        <tspan>temp </tspan>
                        <tspan>= </tspan>
                        <tspan>arr</tspan>
                        <tspan>[</tspan>
                        <tspan>firstIndex</tspan>
                        <tspan>]</tspan>
                        <tspan>;</tspan>
                    </text><br />
                    <text>
                        <tspan>29</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>arr</tspan>
                        <tspan>[</tspan>
                        <tspan>firstIndex</tspan>
                        <tspan>] </tspan>
                        <tspan>= </tspan>
                        <tspan>arr</tspan>
                        <tspan>[</tspan>
                        <tspan>secondIndex</tspan>
                        <tspan>]</tspan>
                        <tspan>;</tspan>
                    </text><br />
                    <text>
                        <tspan>30</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>arr</tspan>
                        <tspan>[</tspan>
                        <tspan>secondIndex</tspan>
                        <tspan>] </tspan>
                        <tspan>= </tspan>
                        <tspan>temp</tspan>
                        <tspan>;</tspan>
                    </text><br />
                    <text>
                        <tspan>31</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>{'}'}</tspan>
                    </text><br />
                    <text>
                        <tspan>32</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                    </text><br />
                    <text>
                        <tspan>33</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>const </tspan>
                        <tspan>bubbleSort </tspan>
                        <tspan>= </tspan>
                        <tspan>(</tspan>
                        <tspan>arr</tspan>
                        <tspan>, </tspan>
                        <tspan>size</tspan>
                        <tspan>) </tspan>
                        <tspan>={'>'} </tspan>
                        <tspan>{'{'}</tspan>

                    </text><br />
                    <text>
                        <tspan>34</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>for </tspan>
                        <tspan>(</tspan>
                        <tspan>var </tspan>
                        <tspan>outIndex </tspan>
                        <tspan>= </tspan>
                        <tspan>0</tspan>
                        <tspan>; </tspan>
                        <tspan>outIndex </tspan>
                        <tspan>{'<'} </tspan>
                        <tspan>size </tspan>
                        <tspan>- </tspan>
                        <tspan>1</tspan>
                        <tspan>; </tspan>
                        <tspan>outIndex</tspan>
                        <tspan>++</tspan>
                        <tspan>) </tspan>
                        <tspan>{'{'}</tspan>
                    </text><br />
                    <text>
                        <tspan>35</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>for </tspan>
                        <tspan>(</tspan>
                        <tspan>var </tspan>
                        <tspan>inIndex </tspan>
                        <tspan>= </tspan>
                        <tspan>0</tspan>
                        <tspan>; </tspan>
                        <tspan>inIndex </tspan>
                        <tspan>{'<'} </tspan>
                        <tspan>size </tspan>
                        <tspan>- </tspan>
                        <tspan>outIndex </tspan>
                        <tspan>- </tspan>
                        <tspan>1</tspan>
                        <tspan>; </tspan>
                        <tspan>inIndex</tspan>
                        <tspan>++</tspan>
                        <tspan>) </tspan>
                        <tspan>{'{'}</tspan>
                    </text><br />
                    <text>
                        <tspan>36</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>if </tspan>
                        <tspan>(</tspan>
                        <tspan>arr</tspan>
                        <tspan>[</tspan>
                        <tspan>inIndex</tspan>
                        <tspan>] </tspan>
                        <tspan>{'>'} </tspan>
                        <tspan>arr</tspan>
                        <tspan>[</tspan>
                        <tspan>inIndex</tspan>
                        <tspan>+ </tspan>
                        <tspan>1</tspan>
                        <tspan>] </tspan>
                        <tspan>) </tspan>
                        <tspan>swap</tspan>
                        <tspan>(</tspan>
                        <tspan>arr</tspan>
                        <tspan>, </tspan>
                        <tspan>inIndex</tspan>
                        <tspan>, </tspan>
                        <tspan>inIndex </tspan>
                        <tspan>+ </tspan>
                        <tspan>1</tspan>
                        <tspan>);</tspan>
                    </text><br />
                    <text>
                        <tspan>37</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>{'}'}</tspan>
                    </text><br />
                    <text>
                        <tspan>38</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>{'}'}</tspan>
                    </text><br />
                    <text>
                        <tspan>39</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>{'}'}</tspan>
                    </text><br />
                    <text>
                        <tspan>40</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                    </text><br />
                    <text>
                        <tspan>41</tspan>
                        <tspan>&nbsp;&nbsp;&nbsp;&nbsp;</tspan>
                        <tspan>app</tspan>
                        <tspan>.</tspan>
                        <tspan>listen</tspan>
                        <tspan>(</tspan>
                        <tspan>port</tspan>
                        <tspan>, </tspan>
                        <tspan>listening</tspan>
                        <tspan>(</tspan>
                        <tspan>port</tspan>
                        <tspan>)</tspan>
                        <tspan>)</tspan>
                        <tspan>;</tspan>
                    </text><br />
                </div>
            </div>

            <h6 class="bottombar">Pick Colors on the Side</h6>
        </div>
    )
}

export default VSCodeBox;
