import React from 'react';
import { TypePhase, useTypedAboutMeText } from './useTypedAboutMeText'


type Props = {
    aboutMeText: string[]
}

const aboutMeText2 = [
    `that balances my technical and social interests.`,
    `where decisions are based on metrics, not stories.`,
    `where "Subject-matter Expertise" is rewarded.`
];

export const AboutMeOverview = ({ aboutMeText }: Props) => {
    const { typedAboutMeText, selectedAboutMeText, phase, resume } =
        useTypedAboutMeText(aboutMeText2)

    return (
        <div className="container" onClick={resume}>
            <h1
                // className={({
                //     ['end-cursor']: phase !== TypePhase.Deleting,
                //     ['blinking']: phase === TypePhase.Pausing,
                // })}
                aria-label={selectedAboutMeText}
            // className="about-me-overview end-cursor blinking"
            >
                I am searching for a job {typedAboutMeText}
            </h1>
        </div>
    );
}