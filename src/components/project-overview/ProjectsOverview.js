import React from 'react';

function ProjectsOverview() {
    return (
        <div className="container">
            <div>
                <h3>Try Me (Coming Soon)</h3>
                <div>A mock court for handling fun disputes and learning various speaking skills.</div>
                <div>The app supports audio and video chat within games, or using third party apps like Google Hangout.</div>
                <div>Adding options for a randomized judge based on available players.</div>
                <div className='stack'>Stack: React Native</div>

                <h3>King of the Chill</h3>
                <div>An umbrella for all the different projects I work on. My focus is always creating resources to sustain local communities.</div>
                <div>The website, kingchill.com, primarily acts as a blog at the moment. I will showcase app updates within GuySpace.</div>
                <div>I have two more blogs within the website, devoted to my love for Judaism and Art Cars. </div>
                <div className='stack'>Stack: WordPress</div>

                <h3>Wordley Durdley</h3>
                <div>A dynamic "Wordle" clone using perfectly cromulent words from The Simpsons.</div>
                <div>Adding a multi-player Wordle game, akin to "Wordle meets Hangman!"</div>
                <div className='stack'>Stack: Vanilla JavaScript</div>

                <h3>Recess</h3>
                <div>Was an app for easily organizing local games and leagues, as well as record keeping.</div>
                <div>This app was deprecated in 2021 out of support for another project called Hobiz.</div>
                <div className='stack'>Stack: React, Firebase, Firestore</div>
            </div>
        </div>
    );
}

export default ProjectsOverview;
