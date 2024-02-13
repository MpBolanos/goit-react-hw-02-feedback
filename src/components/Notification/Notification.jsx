import React from 'react';
import PropTypes from 'prop-types';
import '../Notification/Notification.css';

export const Notification = ({message}) => (
    <p className='notification__text'>
        {message}
    </p>
)

Notification.propTypes = {
    message: PropTypes.string.isRequired
}