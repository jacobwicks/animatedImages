import React from 'react';
import { render, screen, Matcher } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './index';
import userEvent from '@testing-library/user-event';

enum roles {
    button = 'button',
}

const renderControls = (props?: any) => render(<Controls {...props} />);

it('renders without crashing', () => {
    renderControls();
});

// it('has role: button', () => {
//     renderControls();
//     const buttons = screen.getAllByRole('button');
//     expect(buttons.length).toBeTruthy();

//     const firstImageButton = screen.getByRole('button', {
//         name: 'first image',
//     });

//     expect(firstImageButton).toBeInTheDocument();
//     screen.debug();
// });

const matchers: { [key: string]: string | RegExp } = {
    acceptImage: /accept image/i,
    firstImage: /first image/i,
    lastImage: /last image/i,
    nextImage: /next image/i,
    previousImage: /previous image/i,
    rejectImage: /reject image/i,
};

const getOptions = (matcher: string) => {
    if (matchers[matcher]) {
        return {
            name: matchers[matcher],
        };
    } else throw Error(`invalid matcher requested: ${matcher}`);
};

describe('it has all 6 buttons', () => {
    const role = roles.button;

    describe('first image button', () => {
        const name = 'firstImage';
        const options = getOptions(name);

        it('has a first image button', () => {
            renderControls();

            const firstImageButton = screen.getByRole(role, options);
            expect(firstImageButton).toBeInTheDocument();
        });

        it('clicking first image button invokes firstImage function', () => {
            const firstImage = jest.fn();
            renderControls({ firstImage });
            const firstImageButton = screen.getByRole(role, options);
            userEvent.click(firstImageButton);
            expect(firstImage).toHaveBeenCalled();
        });
    });

    describe('previous image button', () => {
        const name = 'previousImage';
        const options = getOptions(name);

        it('has a previous image button', () => {
            renderControls();

            const prevImageButton = screen.getByRole(role, options);
            expect(prevImageButton).toBeInTheDocument();
        });

        it('clicking previous image button invokes prevImage function', () => {
            const prevImage = jest.fn();
            renderControls({ prevImage });

            const previousImageButton = screen.getByRole(role, options);
            userEvent.click(previousImageButton);
            expect(prevImage).toHaveBeenCalled();
        });
    });

    describe('accept image button', () => {
        const name = 'acceptImage';
        const options = getOptions(name);

        it('has an accept image button', () => {
            renderControls();

            const accept = screen.getByRole(role, options);
            expect(accept).toBeInTheDocument();
        });

        it('clicking accept image button invokes acceptImage function', () => {
            const acceptImage = jest.fn();
            renderControls({ acceptImage });

            const acceptImageButton = screen.getByRole(role, options);
            userEvent.click(acceptImageButton);
            expect(acceptImage).toHaveBeenCalled();
        });
    });

    describe('reject image button', () => {
        const name = 'rejectImage';
        const options = getOptions(name);

        it('has a reject image button', () => {
            renderControls();

            const rejectImageButton = screen.getByRole(role, options);
            expect(rejectImageButton).toBeInTheDocument();
        });

        it('clicking reject image button invokes rejectImage function', () => {
            const rejectImage = jest.fn();
            renderControls({ rejectImage });

            const rejectImageButton = screen.getByRole(role, options);
            userEvent.click(rejectImageButton);
            expect(rejectImage).toHaveBeenCalled();
        });
    });

    describe('next image button', () => {
        const name = 'nextImage';
        const options = getOptions(name);

        it('has a next image button', () => {
            renderControls();
            const nextImageButton = screen.getByRole(role, options);
            expect(nextImageButton).toBeInTheDocument();
        });

        it('clicking next image button invokes nextImage function', () => {
            const nextImage = jest.fn();
            renderControls({ nextImage });

            const nextImageButton = screen.getByRole(role, options);
            userEvent.click(nextImageButton);
            expect(nextImage).toHaveBeenCalled();
        });
    });

    describe('last image button', () => {
        const name = 'lastImage';
        const options = getOptions(name);

        it('has a last image button', () => {
            renderControls();
            const lastImageButton = screen.getByRole(role, options);
            expect(lastImageButton).toBeInTheDocument();
        });

        it('clicking last image button invokes lastImage function', () => {
            const lastImage = jest.fn();
            renderControls({ lastImage });

            const lastImageButton = screen.getByRole(role, options);
            userEvent.click(lastImageButton);
            expect(lastImage).toHaveBeenCalled();
        });
    });
});
