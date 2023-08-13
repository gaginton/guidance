import React from 'react';

function ProjectsOverview() {
    return (
        <div className="container">
            <div className="column">
                <h3>Try Me!</h3>
                <div>Video chat that gamifies debate.</div>
                <div>Marketplace of "Pro" expertise.</div>
                <div>A community that values empathy.</div>
                <div className='stack'>Stack: React Native</div>

                <h3>King of the Chill</h3>
                <div>A blog about everything.</div>
                <div>Previously, it was a bus.</div>
                <div className='stack'>Stack: WordPress</div>
            </div>
            <div className="column">
                <h3>Wordley Durdley</h3>
                <div>A Simpsons-themed "Wordle" clone.</div>
                <div>Perfectly cromulent words only.</div>
                <div>Support for a 2 player game.</div>
                <div className='stack'>Stack: Vanilla JavaScript</div>

                <h3>Recess</h3>
                <div>Create local games and leagues.</div>
                <div>Deprecated in 2021 to support
                    <a
                        href="https://www.hobizapp.com/"
                        className='link-text bold'
                        target="_blank"
                        rel="noopener noreferrer"
                    > Hobiz.
                    </a>
                </div>
                <div className='stack'>Stack: React, Firebase, Firestore</div>
            </div>
        </div>
    );
}

export default ProjectsOverview;
