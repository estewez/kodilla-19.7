import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment}) =>
    <li className='Item list-group-item'>
        <a className='Left fa fa-caret-left' onClick={() => thumbDownComment(id)}></a>
        <span className='Votes'>{votes} </span>
        <a className='Right fa fa-caret-right' onClick={() => thumbUpComment(id)}></a> 
        <p>{text}</p>
        <div className='Clickers'>
            <a className='Clicker fa fa-times' onClick={() => removeComment(id)}></a>
            <a className='Clicker fa fa-pencil-square-o' onClick={() => editComment(id, text)}></a>
        </div>
        <p>{''}</p>
    </li>;

export default Comment;