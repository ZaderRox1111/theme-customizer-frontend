import '../css/ColorButton.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { HexColorPicker } from 'react-colorful';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    colorbutton: {
        display: "inline-block",
        width: "25px",
        height: "30px",
        border: "black solid 1px"
    },

    colortext: {
        display: "inline-block",
        backgroundColor: "white",
        position: "relative",
        top: "-10px",
        height: "30px",
        verticalAlign: "middle",
    },

    colorpicker: {
        display: "inline-block"
    }
}));

const ColorButton = ({
    setOpen,
    open,
    color,
    theme
}) => {
    const { colorbutton, colortext, colorpicker } = useStyles();

    return (
        <div>
            <Button
                onClick={() => {setOpen(!open)}}
                className={colorbutton}
                style={{backgroundColor:color}}
            />

            <h4 className={colortext}>{color}</h4>

            {open &&
                <HexColorPicker color={color} onChange={setOpen} className={colorpicker} />
            }
        </div>
    )
}

ColorButton.propTypes = {
    setOpen: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired
}

export default ColorButton;
