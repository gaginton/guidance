import React from 'react';

function HobbiesOverview() {
    return (
        <div className="container">
            <div className='hobbies-container'>
                {/* <h3>Hobbies:</h3> */}
                <li>My main focus now is my app, "Try Me!" It is a fun, new way to settle disputes.</li>
                <li>On a typical day I take long walks with my dog, Naya, cook, excercise and engage my local community.</li>
                <li>I love travel, philosophical conversations, lectures and tech conferences.</li>
                <li>I am a big music fan and
                    <a
                        href="https://soundcloud.com/aardvark-aaron/"
                        className='link-text bold'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        &nbsp;bad DJ.
                    </a>
                </li>
                <li>
                    I am looking for volunteer opportunities emphasizing coexistence, animal rescue.
                </li>
                <li>I read extensively about STEM.</li>
                <li>I watch HBO series most often. But I should have a doctorate in cartoons.</li>
            </div>
        </div>
    );
}




export default HobbiesOverview;
