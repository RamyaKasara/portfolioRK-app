import * as React from 'react';
import { styled, Typography, Box } from '@mui/material';
import Page from '../../components/page.jsx';
import { TagButton } from '../../components/navbar.jsx';
import theme from '../../theme.js';
import  ReactIcon from './assets/images/reactjs.svg';
import  VueIcon from './assets/images/vuejs.svg';
import  JsIcon  from './assets/images/js.svg';
import  DjangoIcon  from './assets/images/django.svg';
import  PythonIcon  from './assets/images/python.svg';
import  JavaIcon  from './assets/images/java.svg';
import  MySqlIcon  from './assets/images/mysql.svg';
import  PostgreSQLIcon  from './assets/images/postgreSQL.svg';
import  FigmaIcon  from './assets/images/figma.svg';
import  GithubIcon  from './assets/images/github.svg';
import  GithubCopilotIccon  from './assets/images/github-copilot.svg';
import  ChatgptIcon  from './assets/images/chatgpt.svg';


const topics = [
    'Frontend Development',
    'Backend Development',
    'Version Control',
    'AI Tools',
    'DataBases',
    'Programming',
];

const technologies = [
    ReactIcon,
    VueIcon,
    JsIcon,
    PythonIcon,
    JavaIcon,
    DjangoIcon,
    MySqlIcon,
    PostgreSQLIcon,
    FigmaIcon,
    GithubIcon,
    GithubCopilotIccon,
    ChatgptIcon
];

const getIconSize = (icon) => {
    return '50px';
};


function TechnicalSkills() {

    return ( 
        <Page background={theme.palette.background.tertiary}>
            <Typography variant="h3_1" component="p" sx={{color: theme.palette.background.primary}}>
                Technical Skills
            </Typography>
                <Box sx={{ display: 'flex', flexFlow: 'row wrap', gap: '1rem', margin: '1rem 0' }} >
                {technologies.map((technology) => (
                    <Box key={technology}
                        sx={{
                            color: theme.palette.background.primary,
                            height: getIconSize(technology),
                            width: getIconSize(technology),
                        }}
                        component="img" src={technology} alt="technology" />
                    )) }
                </Box>
                <Box sx={{display: 'flex', flexFlow: 'row wrap', gap: '1rem'}} >
                    {topics.map((topic) => (
                        <TagButton key={topic} sx={{fontWeight: '400'}} backgroundColor={theme.palette.text.primary}>{topic}</TagButton>
                    ))}
                </Box>
        </Page>
     );
}

export default TechnicalSkills;