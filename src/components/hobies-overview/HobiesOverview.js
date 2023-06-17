import React from 'react';

function HobbiesOverview() {
    return (
        <div className="container">
            <div className='hobbies-container'>
                {/* <h3>Hobbies:</h3> */}
                <li>My main focus now is my app,&nbsp;
                    <a
                        href="https://tryme.games"
                        className='link-text bold'
                        target="_blank"
                        rel="noopener noreferrer"
                    >"Try Me!"
                    </a>
                    &nbsp;It is a fun, new way to settle disputes on or offline, and a way to improve discourse.
                </li>
                <li>On a typical day I take long walks with my dog, Naya, excercise, cook, and engage my local community.</li>
                <li>I love travel, philosophical conversations, lectures and tech conferences.</li>
                <li>I am a big music fan and
                    <a
                        href="https://soundcloud.com/guyandrew"
                        className='link-text bold'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        &nbsp;bad DJ.
                    </a>
                </li>
                <li>
                    I love to partake in volunteer opportunities emphasizing coexistence and animal rescue.
                </li>
                <li>I read extensively about STEM. I play a lot of SNES games, including Dr. Mario.</li>
                <li>I watch HBO series most often. But I should have a doctorate in cartoons.</li>
            </div>
        </div>
    );
}




export default HobbiesOverview;
