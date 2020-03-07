import {Button, Container, Row, Col} from 'react-bootstrap';
const BlogItem = ({blog, onClick}) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={4}><h4>{blog.title}</h4></Col>
                    <Col sm={4}><h4>{blog.description}</h4></Col>
                    <Col sm={4}>
                         <Button className="button" variant="primary" onClick={() => onClick({blog, action: "view"})}>View</Button>
                         <Button className="button" variant="primary" onClick={() => onClick({blog, action: "edit"})}>Edit</Button>
                         <Button className="button" variant="primary" onClick={() => onClick({blog, action: "delete"})}>Delete</Button>                 
                    </Col>
                </Row>
            </Container>
      
        </div>
    )
}

export default BlogItem;