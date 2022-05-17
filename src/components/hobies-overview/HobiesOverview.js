import React from 'react';

function HobbiesOverview() {
    return (
        <div className="container">
            <div className='hobbies-container'>
                {/* <h3>Hobbies:</h3> */}
                <li>My main focus right now is the "Try Me!" app. It is a fun, new way to settle disputes.</li>
                <li>On a typical day I take long walks with my dog, Naya, cook, excercise and engage my local community.</li>
                <li>I also love travel, philosophical conversations, lectures and tech conferences.</li>
                <li>I am a big music fan and
                    <a
                        href="https://soundcloud.com/aardvark-aaron/"
                        className='link-text bold'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        &nbsp;terrible DJ.
                    </a>
                </li>
                <li>
                    I am looking for new volunteer opportunities emphasizing coexistence and rescuing animals.
                </li>
                <li>I read extensively about science, technology and comedy. I watch HBO series most often.</li>
            </div>
        </div>
    );
}




export default HobbiesOverview;
