import React from 'react';

function HobbiesOverview() {
    return (
        <div className="container">
            <div className='hobbies-container'>
                {/* <h3>Hobbies:</h3> */}
                <li>My main focus is my app,&nbsp;
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
                <li>I love travel, philosophical convos, lectures and tech conferences.</li>
                <li>I am a music fan and
                    <a
                        href="https://soundcloud.com/guyandrew"
                        className='link-text bold'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        &nbsp;DJ for fun.
                    </a>
                </li>
                <li>
                    I volunteer every week.
                </li>
                <li>I read extensively about STEM.</li>
                <li>I play a lot of SNES, esp Dr. Mario.</li>
                <li>I watched most HBO shows.</li>
                <li>I should have a PhD in cartoons.</li>
            </div>
        </div>
    );
}




export default HobbiesOverview;
