import React from 'react';
import './Footer.css';
import ImageUpload from '../ImageUpload/ImageUpload'; 

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>
    <ImageUpload />
    &copy; Melody 21 Hair
  </footer>
);

export default Footer;
