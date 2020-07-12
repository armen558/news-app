import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.css';

const Modal = props => {
    return (
        <>
        <div className="modal">
            <span className="closeBtn" onClick={props.close}>&#215;</span>
            {props.children}
        </div>
        <Backdrop clicked={props.close}/>
        </>
    )
}

export default Modal;