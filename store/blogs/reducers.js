import { blogActionTypes } from "./actions";

const blogInitialState = {
    allBlogs: [],
    selectedBlog: null,
    blogFormAction: null,
}

export default (state = blogInitialState, action) => {
    switch(action.type) {
       case blogActionTypes.GET_ALL_BLOGS: 
       return {
           ...state,
           allBlogs: action.data
       }
       case blogActionTypes.SET_SELECTED_BLOG:
       return {
           ...state,
           selectedBlog: action.data
       }
       case blogActionTypes.SET_BLOG_FORM_ACTION:
       return {
           ...state,
           blogFormAction: action.data
       }
       default: 
       return state;
    }
}