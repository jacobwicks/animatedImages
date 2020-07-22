import React from 'react';
import './App.css';
import { Container } from '@material-ui/core/';
import Controls from './components/Controls';

function App() {
    return (
        <Container data-testid="container" maxWidth="sm">
            <h1>Animated Image Review App</h1>
            <Controls />
        </Container>
    );
}

export default App;
