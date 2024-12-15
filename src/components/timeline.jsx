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
    const [activeStep, setActiveStep] = React.useState(0);

    const [expandedSteps, setExpandedSteps] = React.useState(
        Array(steps.length).fill(false)
    );

    const handleToggleExpand = (index) => {
        setExpandedSteps((prevExpandedSteps) =>
            prevExpandedSteps.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
        );
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return ( 
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step sx={{ color: theme.palette.background.primary }} key={step.label}>
                        <StyledStepLabel
                            onClick={() => handleToggleExpand(index)} // Toggle collapse on click
                            optional={
                                index === steps.length - 1 ? (
                                <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                        >
                        {step.label}
                        </StyledStepLabel>
                        {expandedSteps[index] && ( // Conditionally render StepContent
                            <StepContent>
                                <Typography variant="body1">{step.description}</Typography>
                            </StepContent>
                        )}
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Reset
                </Button>
                </Paper>
            )}
        </Box>
     );
}

export default Timeline;