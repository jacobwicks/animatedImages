import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import {
    FastRewind,
    SkipPrevious,
    SkipNext,
    ThumbUp,
    ThumbDown,
    FastForward,
} from '@material-ui/icons';

const Controls = ({
    acceptImage,
    rejectImage,
    lastImage,
    firstImage,
    nextImage,
    prevImage,
}: {
    acceptImage: () => void;
    rejectImage: () => void;
    firstImage: () => void;
    lastImage: () => void;
    nextImage: () => void;
    prevImage: () => void;
}) => {
    return (
        <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
        >
            <Button aria-label="first image" onClick={() => firstImage()}>
                <FastRewind />
            </Button>
            <Button aria-label="previous image" onClick={() => prevImage()}>
                <SkipPrevious />
            </Button>
            <Button
                aria-label="accept image"
                style={{ background: 'green' }}
                onClick={() => acceptImage()}
            >
                <ThumbUp />
            </Button>
            <Button
                aria-label="reject image"
                style={{ backgroundColor: 'red' }}
                onClick={() => rejectImage()}
            >
                <ThumbDown />
            </Button>
            <Button aria-label="next image" onClick={() => nextImage()}>
                <SkipNext />
            </Button>
            <Button aria-label="last image" onClick={() => lastImage()}>
                <FastForward />
            </Button>
        </ButtonGroup>
    );
};

export default Controls;
