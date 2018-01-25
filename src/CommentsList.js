import React from 'react';
import Comment from './CommentContainer.js';
import './List.css';

const CommentsList = ({comments, addComment}) => <ul className='List ist-group list-group-flush'>
    {comments.map(comment => <Comment 
        key={comment.id} 
        {...comment}
    />)}
    <button className='btn btn-secondary' onClick={() => addComment(prompt('Wpisz post'))}>Add Comment</button>
</ul>;

export default CommentsList;