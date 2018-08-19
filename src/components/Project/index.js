import React from 'react';
import './style.css'

const Project = ({id, image, title, blurb, code, body}) => (
        <article className={"style"+ (id%6+1)}>
            <span className="image">
                <img src={image} alt=""/>
            </span>
            <a href={"#" + code} uk-toggle="" className="work">
                <h2>{title}</h2>
                <div className="content">
                    <p>{blurb}</p>
                </div>
            </a>
            <div id={code} uk-modal="">
                <div className="uk-modal-dialog" >
                    <button className="uk-modal-close-default"  type="button" uk-close=""/>
                    <div className=' uk-modal-body' dangerouslySetInnerHTML={{__html: body}} uk-overflow-auto="">

                    </div>
                </div>
            </div>
        </article>
);

export default ({projects}) => (
    projects.map((user, i) => {
        return (
            <Project
                key={i}
                id={i}
                image={projects[i].image}
                title={projects[i].title}
                blurb={projects[i].blurb}
                code={projects[i].code}
                body={projects[i].body}
            />
        );
    })
)