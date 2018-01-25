import comments from './comments.js';
import users from './users.js';

const initialState = {
    comments: [],
    users: []
};

export default function reducer(state = initialState, action) {
    return {
        comments: comments(state.comments, action),
        users: users(state.users, action)
    };
}