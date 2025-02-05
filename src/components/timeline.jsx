import * as React from 'react';
import { styled, Typography, Box, Stepper, Step, StepLabel, StepConnector, Paper } from '@mui/material';
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
    '& .MuiStepLabel-label.Mui-active' :{
        fontWeight: '700',
    },
    '& .MuiStepLabel-iconContainer': {
        cursor: 'pointer',
    },
    '& .MuiStepIcon-root': {
        color: theme.palette.text.primary,
    },
    '& .MuiStepIcon-root.Mui-active' :{
        color: theme.palette.text.primary,
    },
    '& .MuiStepIcon-text': {
        fill: theme.palette.background.primary,
    },

}));

const StyledContentDiv = styled('div')(({ theme, connectorColor }) => ({
    marginLeft: '12px',
    paddingLeft: '20px',
    paddingRight: '8px',
    borderLeft: `1px solid ${connectorColor || theme.palette.text.primary}`,
}));

const CustomStepConnector = styled(StepConnector)(({ theme, connectorColor }) => ({
    '& .MuiStepConnector-line': {
        borderLeft: `1px solid ${connectorColor ||theme.palette.text.primary}`,
    },
}));

function Timeline({ steps, stepIcon, connectorColor }) {
    const [activeStep, setActiveStep] = React.useState(0);

    const [expandedSteps, setExpandedSteps] = React.useState(
        new Array(steps.length).fill(true)
    );

    const handleToggleExpand = (index) => {
        const newExpandedSteps = [...expandedSteps];
        newExpandedSteps[index] = !newExpandedSteps[index]; // Toggle the clicked step
        setExpandedSteps(newExpandedSteps);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return ( 
        <Box sx={{ width:'100%' }}>
            <Stepper orientation="vertical" connector={<CustomStepConnector connectorColor={connectorColor} />}>
                {steps.map((step, index) => (
                    <Step sx={{ color: theme.palette.background.primary }} key={index}>
                        <StyledStepLabel StepIconComponent={stepIcon} 
                            onClick={() => handleToggleExpand(index)} // Toggle collapse on click
                        >
                            {step.label}
                        </StyledStepLabel>
                        <StyledContentDiv connectorColor={connectorColor}>
                            {expandedSteps[index] && ( // Conditionally render StepContent
                                <div style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
                                    <Typography variant="body1">{step.description}</Typography>
                                </div>
                            )}
                        </StyledContentDiv>
                    </Step>
                ))}
            </Stepper>

            
        </Box>
     );
}

export default Timeline;