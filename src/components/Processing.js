import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#c4c4c4',
    },
    progress: {
        position: 'relitive',
    },
    alert: {
        padding: 15,
        minWidth: 350,
    },
}));

const Processing = ({
    setProcessing,
    errorMessage,
    setErrorMessage,
}) => {
    const { backdrop, progress, alert } = useStyles();

    const close = () => {
        if (errorMessage) {
            return (
                <Alert severity="error" className={alert} onClose={close}>
                    {errorMessage}
                </Alert>
            );
        }
        return <CircularProgress color="inherit" size={100} />;
    };

    return (
        <div>
            <Backdrop className={backdrop} open>
                <div className={progress}>{renderSpinner()}</div>
            </Backdrop>
        </div>
    );
};

Processing.propTypes = {
    setProcessing: PropTypes.func.isRequired,
    errorMessage: PropTypes.string.isRequired,
    setErrorMessage: PropTypes.func.isRequired
};

export default Processing;
