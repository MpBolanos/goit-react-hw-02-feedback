import React from 'react';
import PropTypes from 'prop-types';
import '../Section/Section.css';

export const Section = ({ title, children }) => (
  <section className='feedback'>
    <h2 className='feedback__title'> {title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};