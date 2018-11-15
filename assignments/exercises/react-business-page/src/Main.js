import React from 'react'
import html from './images/html.png'
import css from './images/css.png'
import javascript from './images/js.png'


const Main = () => {
    return (
        <div id="main">
            <div className="services">
                <h1>Services</h1>
            </div>
            <div id="boxes">
                <div className="box">
                    <img src={html} alt="html" width='200px' height='200px' />
                    <h3>HTML</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus perspiciatis quam! Voluptates harum in molestias aperiam, illo accusamus ex temporibus molestiae necessitatibus nihil quidem amet expedita? Perferendis exercitationem in, nam voluptate eius sequi aliquam amet praesentium fugiat molestias similique?</p>
                </div>
                <div className="box">
                    <img src={css} alt="css" width='150px' height='200px' />
                    <h3>CSS</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus perspiciatis quam! Voluptates harum in molestias aperiam, illo accusamus ex temporibus molestiae necessitatibus nihil quidem amet expedita? Perferendis exercitationem in, nam voluptate eius sequi aliquam amet praesentium fugiat molestias similique?</p>
                </div>
                <div className="box">
                    <img src={javascript} alt="javascript" width='200px' height='200px' />
                    <h3>JavaScript</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus perspiciatis quam! Voluptates harum in molestias aperiam, illo accusamus ex temporibus molestiae necessitatibus nihil quidem amet expedita? Perferendis exercitationem in, nam voluptate eius sequi aliquam amet praesentium fugiat molestias similique?</p>
                </div>
            </div>
        </div>
    )
}

export default Main
