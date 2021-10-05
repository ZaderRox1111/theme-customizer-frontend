import '../css/ColorButton.css';
import React, { useEffect, useState } from 'react';
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
        width: "350px",
        height: "40px",
        marginTop: "15px",
        marginLeft: "10px",
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
        marginLeft: "10px"
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

    const onChange = () => {

    }

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
                <div>
                    <HexColorPicker color={color} onChange={setColor} className={colorpicker} />
                    
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
    theme: PropTypes.string.isRequired
}

export default ColorButton;
