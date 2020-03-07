import BlogItem from "./BlogItem"

const BlogList = ({blogs, onClick}) => {
    return (
        <div>
            {
                blogs.map((blog) => {
                    return (
                        <BlogItem key={blog.id} blog={blog} onClick={(data) => onClick(data)}></BlogItem>
                    )
                })
            }
        </div>
    )
}
export default BlogList;