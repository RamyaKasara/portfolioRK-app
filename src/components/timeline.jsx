import * as React from 'react';
import { styled, Typography, Box, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material';
import theme from '../theme.js';

const StyledStepLabel = styled(StepLabel)(({ theme }) => ({
    '& .MuiStepLabel-label': {
        color: `${theme.palette.background.primary} !important`, 
        fontFamily: '"Old Standard TT", serif', 
        fontWeight: '700',
        fontSize: '1.125rem', // Font size for small screens
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem', // Font size for medium screens and up
        },
        cursor: 'pointer',
    },
    '& .MuiStepIcon-root': {
        color: theme.palette.text.primary,
        cursor: 'pointer',
    },
    '& .MuiStepIcon-text': {
        fill: theme.palette.background.primary,
    },

}));


function Timeline({ steps }) {
    console.log("steps", steps);
    const [activeStep, setActiveStep] = React.useState(0);

    const [expandedSteps, setExpandedSteps] = React.useState(
        new Array(steps.length).fill(false)
    );

    const handleToggleExpand = (index) => {
        console.log("index", index);
        const newExpandedSteps = [...expandedSteps];
        newExpandedSteps[index] = !newExpandedSteps[index]; // Toggle the clicked step
        setExpandedSteps(newExpandedSteps);
        console.log(expandedSteps);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return ( 
        <Box sx={{ maxWidth: 400 }}>
            <Stepper orientation="vertical">
                {steps.map((step, index) => (
                    <Step sx={{ color: theme.palette.background.primary }} key={index}>
                        <StyledStepLabel
                            onClick={() => handleToggleExpand(index)} // Toggle collapse on click
                        >
                            {step.label}
                        </StyledStepLabel>
                        {expandedSteps[index] && ( // Conditionally render StepContent
                            <div style={{ paddingLeft: '32px', marginTop: '8px' }}>
                                <Typography variant="body1">{step.description}</Typography>
                            </div>
                        )} 
                    </Step>
                ))}
            </Stepper>

            
        </Box>
     );
}

export default Timeline;