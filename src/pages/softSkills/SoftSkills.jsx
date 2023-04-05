import { Box } from '@mui/material';
import Card from '../../components/Card';
import React, { useState } from 'react';
import myProjectInfo from '../../data/projects';
const SoftSkills = () => {
    const [cardFeatures, setCardFeatures] = useState([
        {
            title: myProjectInfo.project01.name,
            urlProject: '',
            description: '',
            icons: ['', '', '', ''],
        },
    ]);
    return (
        <Box display="flex" alignContent="center" justifyContent="center">
            <Card />
            <Card />
            <Card />
        </Box>
    );
};

export default SoftSkills;
