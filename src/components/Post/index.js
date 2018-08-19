import React from 'react';
import Comment from '../Comment';

const Post = ({code, heading, date, body, comments}) => (
    <div className="uk-light" style={{marginBottom: '10px', marginTop: '25px', marginLeft: '25px', marginRight: '10px'}}>
        <article className="uk-article">

            <h1 className="uk-article-title"><a className="uk-link-reset" href="">{heading}</a></h1>

            <p className="uk-article-meta">Created on {date.toString()}</p>

            <p dangerouslySetInnerHTML={{__html: ''+body}}/>

            <div className="uk-grid-small uk-child-width-auto" uk-grid="">
                <div>
                    <a className="uk-button uk-button-text" uk-toggle="" href={"#" + code}>{comments.length} Comments</a>
                    <div id={code} uk-modal="">
                        <Comment heading={heading} comments={comments}/>
                    </div>
                </div>
            </div>

        </article>
    </div>
);

export default ({post}) => (
    <div>
        {
            post.map((user, i) => {
                return (
                    <Post
                        code={post[i].code}
                        key={i}
                        heading={post[i].heading}
                        date={post[i].date}
                        body={post[i].body}
                        comments={post[i].comments}
                    />
                );
            })
        }
    </div>
)