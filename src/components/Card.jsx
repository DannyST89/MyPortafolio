import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../theme.js';

const Card = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            borderRadius={'5px'}
            height={'20rem'}
            width={'20rem'}
            backgroundColor={colors.primary[600]}
            marginLeft={'1rem'}
            boxShadow={'rgba(250, 250, 250, 0.05) 0px 5px 15px'}
        >
            <Typography variant="h4">{'hello'}</Typography>
        </Box>
    );
};

export default Card;
