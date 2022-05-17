import React from 'react';

function ProjectsOverview() {
    return (
        <div className="container">
            <div>
                <h3>King of the Chill</h3>
                <div>An umbrella of different ideas I have for creating resources to sustain local communities.</div>
                <div>Primarily a blog at the moment. More to come!</div>
                <div className='stack'>Stack: WordPress</div>

                <h3>Recess</h3>
                <div>An app for easily organizing local games and leagues, as well as record keeping.</div>
                <div>Adding support for non-game events.</div>
                <div className='stack'>Stack: React, Firebase, Firestore</div>

                <h3>Wordley Durdley</h3>
                <div>A dynamic "Wordle" clone using perfectly cromulent words from The Simpsons.</div>
                <div>Adding a multi-player Wordle game, akin to "Wordle meets Hangman!"</div>
                <div className='stack'>Stack: Vanilla JavaScript</div>
                
                <h3>Try Me (Coming Soon)</h3>
                <div>A mock court for handling fun disputes and gamifying judgements.</div>
                <div>Adding options for a randomized judge based on available players.</div>
                <div className='stack'>Stack: React Native</div>
            </div>
        </div>
    );
}

export default ProjectsOverview;
