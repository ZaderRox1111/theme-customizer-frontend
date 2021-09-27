import '../css/VSCodeBox.css';

function VSCodeBox() {
    return (
        <div class="examplebox">
            
            <h6>Applied Theme</h6>
            
            <div class="viewbox">
                <div class="sidebar">

                </div>

                <div class="topbar">
                    <h5>Top Bar</h5>
                </div>

                <div class="maintext">
                    <text>
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
                        1234console.log(`Currently listening on port: $1portNum}. Access it here: http://localhost:$1portNum}`);
                    </text>
                </div>
            </div>

            <h6 class="bottombar">Pick Colors on the Side</h6>
        </div>
    )
}

export default VSCodeBox;
