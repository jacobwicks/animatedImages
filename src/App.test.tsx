import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

const renderApp = () => render(<App />);

it('has a container', () => {
    const { getByTestId } = renderApp();
    const container = getByTestId('container');
    expect(container).toBeInTheDocument();
});
