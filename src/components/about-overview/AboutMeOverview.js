import React from 'react';
import useTypedAboutMeText from './useTypedAboutMeText';

const aboutMeText = [
    'that balances my tech and social interests.',
    'at a company that promotes from within.',
    'as a solutions engineer or tech support agent.'
];

function AboutMeOverview() {
    const aboutMeTextOutput = useTypedAboutMeText(aboutMeText);

    return (
        <div className="container">
            <h1 className="about-me-overview end-cursor blinking">
                I am searching for a job {aboutMeTextOutput}
            </h1>
        </div>
    );
}

export default AboutMeOverview;
