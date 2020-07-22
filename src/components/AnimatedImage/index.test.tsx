import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnimatedImage from './index';
import kitten from '../../../assets/kitten.jpg'; //"./../../../assets/images/logo.png;

afterEach(cleanup);

const renderAnimatedImage = (image?: string) =>
    render(<AnimatedImage image={image} />);

const renderWithKitten = () => renderAnimatedImage(kitten);

it('renders without crashing', () => {
    renderAnimatedImage();
});

it('has an animatePresence', () => {
    const { debug } = renderAnimatedImage();
});

describe('Shows an image based on image prop', () => {
    describe('with image prop', () => {
        it('shows an image', () => {
            const { getByRole } = renderWithKitten();
            const image = getByRole('img');
            expect(image).toBeInTheDocument();
        });
    });

    describe('without image prop', () => {
        it('doesnt show an image', () => {
            const { findByRole } = renderAnimatedImage();
            const image = findByRole('img');
            expect(Object.entries(image).length).toBe(0);
        });
    });
});
