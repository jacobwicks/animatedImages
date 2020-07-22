import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedImage = ({
    image,
}: {
    //the image src
    image?: string;
}) => {
    return image ? (
        <AnimatePresence initial={false}>
            <motion.img src={image} />
        </AnimatePresence>
    ) : (
        <></>
    );
};

export default AnimatedImage;
