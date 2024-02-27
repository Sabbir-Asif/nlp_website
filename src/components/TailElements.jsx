import React from 'react'

function TailElements() {
    return (
        <div className='tail'>
            <div className='tailcomponents'>
                <p className='about'>
                    <b>About:</b><br/>
                    IIT NLP Research Group.<br />
                    Part of Institute of Information
                    Technology, University of Dhaka.
                </p>

                <ul className='links'>
                    <li> <b> Links: </b> </li>
                    <li>kaggle</li>
                    <li>github</li>
                    <li>facebook</li>
                </ul>

                <p className='contact'>
                    <b>Contact:</b><br />
                    Institute of Information Technology,<br />
                    University of Dhaka<br />
                    Dhaka 1200, Bangladesh
                </p>
            </div>
        </div>
    );
};

export default TailElements;