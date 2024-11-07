import { render, screen } from '@testing-library/react';

import Error_page from '../components/Error_page'
import Loading from '../components/Loading'
import {NavBar} from '../components/NavBar'
import React, { useContext } from 'react';
describe('Render Components', () => {
  it('Error Page', () => {
    render(<Error_page />);
    // screen.debug();
  });
  it('Loading Component', ()=>{
    render(<Loading />);
  });
});