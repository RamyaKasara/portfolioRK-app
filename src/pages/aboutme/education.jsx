import * as React from 'react';
import { styled, Typography, Box, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material';
import Page from '../../components/page.jsx';
import Timeline from '../../components/timeline.jsx';
import theme from '../../theme.js';

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

function Education() {

    return ( 
        <Page background={theme.palette.background.tertiary}>
            <Typography variant="h3_1" component="p" sx={{color: theme.palette.background.primary}}>
                Education
            </Typography>
            <Timeline steps={steps} />
        </Page>
     );
}

export default Education;