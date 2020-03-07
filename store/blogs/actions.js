import axios from "axios"
const HTTP_ENDPOINT = "http://localhost:5000";
export const blogActionTypes = {
    GET_ALL_BLOGS: 'GET_ALL_BLOGS',
    SET_SELECTED_BLOG: 'SET_SELECTED_BLOG',
    SET_BLOG_FORM_ACTION: 'SET_BLOG_FORM_ACTION'
}

export const getAllBlogs = () => {
    return dispatch => {
        return axios.get(`${HTTP_ENDPOINT}/blog`, {
            headers: {
                "Content-Type": "application.json"
            }
        }).then(({data}) => data)
        .then(blogs => dispatch({ type: blogActionTypes.GET_ALL_BLOGS, data: blogs}))
    }
}

export const setSelectedBlog = (blog) => {
    return dispatch => {
        dispatch({type: blogActionTypes.SET_SELECTED_BLOG, data: blog})
    }
}

export const setBlogFormAction = (action) => {
    return dispatch => {
        dispatch({type: blogActionTypes.SET_BLOG_FORM_ACTION, data: action})
    }
}

export const createBlog = (blog) => {
    return () => {
        return axios.post(`${HTTP_ENDPOINT}/blog`, blog)
        .then(({data}) => data);
    }
}

export const updateBlog = (blog) => {
    return () => {
        return axios.put(`${HTTP_ENDPOINT}/blog/${blog.id}`, blog)
        .then(({data}) => data);
    }
}

export const deleteBlog = (id) => {
    return () => {
        return axios.delete(`${HTTP_ENDPOINT}/blog/${id}`)
        .then(({data}) => data);
    }
}


