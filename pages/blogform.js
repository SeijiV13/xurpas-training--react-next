import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as blogActions from '../store/blogs/actions';
import Layout from "../components/Layout";
import TextInput from "../components/TextInput";
import { Button } from "react-bootstrap";
import Router from "next/router";
class BlogForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedBlog: Object.assign({}, this.props.selectedBlog),
            blogFormAction: this.props.blogFormAction
        }
        this.saveBlog = this.saveBlog.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    render() {
        let blogFormAction = this.state.blogFormAction;
        let isDisabled = false;
        if(blogFormAction === 'view') {
            isDisabled = true;
        }
        return (
          <Layout>
              <TextInput
              name="title"
              value={this.state.selectedBlog.title? this.state.selectedBlog.title: ""}
              label="Title"
              onChange={this.updateState}
              disabled= {isDisabled}
              />
             <TextInput
              name="description"
              value={this.state.selectedBlog.description? this.state.selectedBlog.description: ""}
              label="Description"
              onChange={this.updateState}
              disabled= {isDisabled}
              />

              {blogFormAction !== 'view' ? <Button variant="primary" onClick={this.saveBlog}>Submit</Button> : ""}
          </Layout>   
        )
    }
    updateState(event){
        let field =  event.target.name;
        let selectedBlog = Object.assign({}, this.state.selectedBlog);
        selectedBlog[field] = event.target.value;
        return this.setState({selectedBlog});
    }

    saveBlog() {
        if(this.state.blogFormAction === 'create') {
            this.props.actions.createBlog(this.state.selectedBlog)
            .then(() => {
                Router.push("/")
            });

        } else if(this.state.blogFormAction === 'edit') {
            this.props.actions.updateBlog(this.state.selectedBlog)
            .then(() => {
                Router.push("/")
            });
        }
    }


}

const mapStateToProps = (state) => {
    return {
        selectedBlog: state.blogs.selectedBlog,
        blogFormAction: state.blogs.blogFormAction
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Object.assign({}, blogActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm);