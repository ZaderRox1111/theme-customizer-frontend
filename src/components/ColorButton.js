import '../css/ColorButton.css';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { HexColorPicker } from 'react-colorful';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    colorbutton: {
        display: "inline-block",
        position: "relative",
        width: "25px",
        height: "40px",
        top: "-16.75px",
        border: "#d6d6d6 solid 1px",
        borderRadius: "5px 0 0 5px",
    },

    full: {
        padding: "15px",
        paddingLeft: "10px",
        width: "350px"
    },

    colortext: {
        display: "inline-block",
        backgroundColor: "#181f25",
        color: "#d6d6d6",
        position: "relative",
        top: "-24px",
        height: "40px",
        padding: "10px 10px 0 10px",
        border: "solid #d6d6d6 1px",
        borderRadius: "0 5px 5px 0",
        fontSize: "18px",
        fontStyle: "italic",
    },

    colorpicker: {
        position: "relative",
        top: "-50px",
        paddingLeft: "10px",
    }
}));

const ColorButton = ({
    setOpen,
    open,
    setColor,
    color,
    theme
}) => {
    const { colorbutton, colortext, colorpicker, full } = useStyles();

    return (
        <div>
            <div className={full}> 
                <Button
                    onClick={() => {setOpen(!open)}}
                    className={colorbutton}
                    style={{backgroundColor:color}}
                />

                <h4 className={colortext}>{theme}</h4>
            </div>

            {open &&
                <HexColorPicker color={color} onChange={setColor} className={colorpicker} />
            }
        </div>
    )
}

ColorButton.propTypes = {
    setOpen: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    setColor: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired
}

export default ColorButton;
