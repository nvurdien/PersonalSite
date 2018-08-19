import React from 'react';
import summit from '../../images/summit.jpg'
import './style.css'

export default () => (
        <article className="style1">
            <span className="image">
                <img src={summit} alt=""/>
            </span>
            <a href="#summit" className="work">
                <h2>CSUF ECS Summit Website</h2>
                <div className="content">
                    <p>A website created for the ECS Leadership and Diversity Summit at CSUF</p>
                </div>
            </a>
        </article>
)