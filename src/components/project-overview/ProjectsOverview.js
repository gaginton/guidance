import React from 'react';

function ProjectsOverview() {
    return (
        <div className="container">
            <div>
                <h3>King of the Chill</h3>
                <div>A collective creating resources to sustain local communities.</div>
                <div>Primarily a blog at the moment. More to come!</div>
                <div>Stack: WordPress</div>

                <h3>Recess</h3>
                <div>An app for easily organizing local games and leagues, as well as record keeping.</div>
                <div>Adding support for non-game events.</div>
                <div>Stack: React, Firebase, Firestore</div>

                <h3>Wordley Durdley</h3>
                <div>A dynamic "Wordle" clone using perfectly cromulent words from The Simpsons.</div>
                <div>Soon to add a multi-player Wordle game, akin to "Wordle meets Hangman!"</div>
                <div>Stack: Vanilla JavaScript</div>
                
                <h3>Try Me (Coming Soon)</h3>
                <div>A mock court for handling fun disputes and gamifying judgements.</div>
                <div>Currently with a randomized judge based on available "judge players."</div>
                <div>Stack: React Native</div>
            </div>
        </div>
    );
}

export default ProjectsOverview;
