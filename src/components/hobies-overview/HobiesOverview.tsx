import React from 'react';

function HobbiesOverview() {
    return (
        <div className="container pad-bottom">
            <div className='column'>
                {/* <h3>Hobbies:</h3> */}
                <li>My main focus is{' '}
                    <a
                        href="https://tryme.games"
                        className='link-text bold'
                        target="_blank"
                        rel="noopener noreferrer"
                    >"Try Me!"
                    </a>
                    &nbsp;
                </li>
                <li>I wake early to train, walk my dog.</li>
                <li>I love travel, philosophy and tech conferences.</li>
                <li>I am a music fan.{' '}
                    <a
                        href="https://soundcloud.com/guyandrew"
                        className='link-text bold'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        I DJ for fun.
                    </a>
                </li>
                <li>
                    I volunteer every week.
                </li>
            </div>
            <div className='column'>
                <li>I read extensively about STEM.</li>
                <li>I love{' '}
                    <a
                        href="https://www.lesswrong.com/"
                        className='link-text bold'
                        target="_blank"
                        rel="noopener noreferrer"
                    > LessWrong.
                    </a>
                </li>
                <li>I play a lot of SNES, esp Dr. Mario.</li>
                <li>I watched most HBO shows.</li>
                <li>I should have a PhD in cartoons.</li>
            </div>
        </div>
    );
}




export default HobbiesOverview;
