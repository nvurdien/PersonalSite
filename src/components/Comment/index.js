import React from 'react';
import CommentForm from "../AddComment";

const Comment = ({author, date, body}) => (
    <div>
            <article className="uk-comment uk-comment-primary">
                <header className="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid="">
                    <div className="uk-width-expand">
                        <h4 className="uk-comment-title uk-margin-remove">{author}</h4>
                        <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                            <li><a>{date.toString()}</a></li>
                        </ul>
                    </div>
                </header>
                <div className="uk-comment-body">
                    <p>{body}</p>
                </div>
            </article>
        </div>
);

export default ({comments,heading}) => (
    <div className="uk-modal-dialog uk-modal-body" >
        <button className="uk-modal-close-default" type="button" uk-close=""/>
        <h2 className="uk-modal-title">Comments for {heading}</h2>
        <div className=' uk-modal-body' uk-overflow-auto="">
        {
            comments.map((user, i) => {
                return (
                    <Comment
                        key={i}
                        author={comments[i].author}
                        date={comments[i].date}
                        body={comments[i].body}
                    />
                );
            })
        }
            <div className='uk-margin-top'>
                <CommentForm/>
            </div>
        </div>

    </div>
)