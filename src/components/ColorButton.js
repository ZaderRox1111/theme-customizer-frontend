import '../css/ColorButton.css';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { HexColorPicker } from 'react-colorful';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    colorbutton: {
        display: "inline",
        position: "relative",
        width: "25px",
        height: "40px",
        border: "#d6d6d6 solid 1px",
        borderRadius: "5px 0 0 5px",
    },

    full: {
        display: "flex",
        position: "relative",
        width: "300px",
        height: "40px",
        marginTop: "15px",
        marginLeft: "15px",
        alignItems: "center",
        lineHeight: "40px",
    },

    colortext: {
        display: "inline",
        backgroundColor: "#181f25",
        color: "#d6d6d6",
        position: "relative",
        height: "40px",
        border: "solid #d6d6d6 1px",
        borderRadius: "0 5px 5px 0",
        paddingLeft: "10px",
        paddingRight: "10px",
        fontStyle: "italic",
    },

    colorpicker: {
        marginLeft: "15px"
    },

    pickerdiv: {
        position: "relative",
        width: "215px",
    },

    inputvalid: {
        marginLeft: "15px",
    }
}));

const ColorButton = ({
    setOpen,
    open,
    setColor,
    color,
    theme,
    buildExp
}) => {
    const { colorbutton, colortext, colorpicker, full, pickerdiv, inputvalid } = useStyles();

    const [valid, setValid] = useState(true);

    const isValidHex = value => {
        return (/^#([0-9A-F]{3}){1,2}$/i.test(value));
    }

    const onChange = () => {
        let val = document.getElementById("uniqueID").value;

        if (isValidHex(val))
        {
            setColor(val);
            setValid(true);
        }
        else {
            setValid(false);
        }
    }

    const ref = useRef();

    useEffect(() => {
        buildExp();
        const checkIfClickedOutside = e => {
        // If the menu is open and the clicked target is not within the menu,
        // then close the menu
            if (open && ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [open, setOpen, buildExp])

    return (
        <div>
            <div className={full}> 
                <Button
                    onClick={() => {setOpen(!open)}}
                    className={colorbutton}
                    style={{ backgroundColor: color }}
                />

                <h4 className={colortext}>{theme}</h4>
            </div>

            {open &&
                <div ref={ref} className={pickerdiv}>
                    <HexColorPicker color={color} onChange={setColor} className={colorpicker} />

                    <div className={inputvalid}>
                        <input type="text" class="input" placeholder={color.toUpperCase()} id="uniqueID" onChange={onChange} />
                        {!valid &&
                            <h4 class="valid">Not a valid hex code</h4>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

ColorButton.propTypes = {
    setOpen: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    setColor: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    buildExp: PropTypes.func.isRequired
}

export default ColorButton;
