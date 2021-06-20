import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Card, Typography, Paper, Hidden, GridList, Tab, Tabs, withStyles, CardContent, CardActions, Button } from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { faDivide } from '@fortawesome/free-solid-svg-icons';

const StyledExperienceDiv = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  padding: 25px 0px;
  min-height: 100vh;
  height: 100%;
  padding-top: 25%;

  position: relative;
  width: 100%;
  background-color: rgb(35, 37, 39);
  vertical-align: middle;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
`;

const StyledCardH1 = styled.h1`
  color: #fff;
`;

const experience = [
  {
    listTitle: 'Zotec Partners',
    company: 'Zotec Partners',
    title: 'Software Engineer Intern ',
    years: 'June 2020 - December 2020',
    description:
      'I worked within a team to develop several projects during my 6 months at the company. I thoroughly enjoyed the experience because it allowed me to apply my skills to real-life situations. One of the project I developed was used to combat COVID-19. The project received great feedback and is actively being used. Another side project I worked on required me to integrate two platforms within the company, and this project allowed me to get first-hand experience on an integration problem.',
  },
  {
    listTitle: 'Purdue University - Researcher',
    company: 'Purdue University',
    title: 'Undergraduate Researcher ',
    years: 'April 2020 - Current',
    description:
      'I worked with the Slipchenko Lab Group at Purdue University to develop a user-friendly program -- iSpiEFP -- that performs LibEFP calculation for chemists. This is a unique experience because once iSpiEFP is finished, the entire chemistry community can benefit from this. Most of the chemists are unfamiliar with terminals, which is where LibEFP calculation is traditionally performed. Upon completing this project, numerous chemists will be able to use this robust calculation, which will save their time compared to their standard method.',
  },
  {
    listTitle: 'Purdue University - TA',
    company: 'Purdue University',
    title: 'Teaching Assistant ',
    years: 'August 2019 - Current',
    description:
      'I have been a Teaching Assistant since my sophomore year. It is my favorite time and always the highlight of my week. I was a TA for 2 semesters for CS 240 (Programming in C) and have been a TA for CS 251 (Data Structures and Algorithms) since then. I led two labs each week to help students further their understanding by practicing what they learned in class or explain concepts in more detail for students who struggled in class. I also hold office hours which allows more one-on-one interaction with students who need guidance on homework and projects.',
  },
];

const CustomCard = withStyles(() => ({
  root: {
    backgroundColor: 'transparent',
  },
}))((props) => <Card {...props} />);

function TabPanel(props) {
  return (
    <CustomCard hidden={props.value !== props.index} style={{ width: '100%', marginLeft: '16px' }} elevation={0}>
      <CardContent style={{ paddingTop: '0' }}>
        <StyledCardH1 style={{ marginTop: '0' }}>
          {experience[props.index].title} @ {experience[props.index].company}
        </StyledCardH1>
        <h4>{experience[props.index].years}</h4>
        <h4>{experience[props.index].description}</h4>
      </CardContent>
    </CustomCard>
  );
}

const CustomTab = withStyles(() => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    alignItems: 'center',
    fontSize: '15px',
    '&:focus': {
      opacity: 1,
    },
  },
  wrapper: {
    alignItems: 'flex-start',
  },
  selected: {
    color: '#64ffda',
  },
}))((props) => <Tab disableRipple {...props} />);

const CustomTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    left: '0px',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export default function Experience() {
  const [activeTabId, setActiveTabId] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTabId(newValue);
  };

  return (
    <StyledExperienceDiv id='experience'>
      <CustomTabs orientation='vertical' value={activeTabId} onChange={handleChange}>
        {experience.map(function (item) {
          return <CustomTab label={item.listTitle}></CustomTab>;
        })}
      </CustomTabs>
      <div style={{ width: '50%' }}>
        {experience.map(function (item, i) {
          return (
            <TabPanel value={activeTabId} index={i}>
              Item One
            </TabPanel>
          );
        })}
      </div>
    </StyledExperienceDiv>
  );
}
