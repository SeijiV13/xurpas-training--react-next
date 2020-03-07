import React from 'React';
import Layout from '../components/Layout';
import { bindActionCreators } from 'redux';
import * as blogActions from '../store/blogs/actions';
import {connect} from 'react-redux';
import BlogList from '../components/BlogList';
import { throws } from 'assert';
import  Router  from 'next/router';
import { Button } from 'react-bootstrap';
import { actions as toastrActions} from 'react-redux-toastr';
class Index extends React.Component {
    constructor(props, context){
      super(props, context);
      this.state = {
          blogs: Object.assign({}, this.props.blogs)
      }
      this.selectBlog = this.selectBlog.bind(this);
    }
    render() {
        const {blogs} = this.props;
        return (
            <Layout>
                <BlogList blogs={blogs} onClick={(data) => this.selectBlog(data)}></BlogList>
                <Button onClick={() => this.selectBlog({blog: null, action: "create"})}>Create Blog</Button>
            </Layout>
        )
    }
    componentDidMount() {
        this.props.actions.getAllBlogs();
    }

    selectBlog(data) {
        if(data.action === "delete") {
            this.props.actions.deleteBlog(data.blog.id).then(() => {
                this.props.actions.getAllBlogs();
                this.props.toastr.add(
                {
                    position: 'top-right',
                    type: 'success',
                    title: "Deletion Successfull",
                    message: `Successfully deleted ${data.blog.title}`
                }
                )
            });
            return;
        }
        this.props.actions.setSelectedBlog(data.blog);
        this.props.actions.setBlogFormAction(data.action);
        Router.push('/blogform');
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs.allBlogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Object.assign({}, blogActions), dispatch),
        toastr: bindActionCreators(Object.assign({}, toastrActions), dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);