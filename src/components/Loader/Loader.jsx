import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Loader.module.css';
// import { Triangle } from 'react-loader-spinner';
import { TailSpin } from 'react-loader-spinner';


const Loader = ({ color, height, width }) => {
    return (
        // <Triangle ariaLabel="loading-indicator" />
        <TailSpin color={color} height={height} width={width} />
    )
}


export default Loader;