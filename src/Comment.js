import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, action}) =>
    <li className='Item list-group-item'>
        <a className='Left fa fa-caret-left' onClick={() => action.thumbDownComment(id)}></a>
        <span className='Votes'>{votes} </span>
        <a className='Right fa fa-caret-right' onClick={() => action.thumbUpComment(id)}></a> 
        <p>{text}</p>
        <div className='Clickers'>
            <a className='Clicker fa fa-times' onClick={() => action.removeComment(id)}></a>
            <a className='Clicker fa fa-pencil-square-o' onClick={() => action.editComment(id, text)}></a>
        </div>
        <p>{''}</p>
    </li>;

export default Comment;