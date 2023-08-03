import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export const BlogInfo = ({blog,linkShow}) => {
    let navigate = useNavigate();
  return (
   
    <Card style={{ width: linkShow ? "18rem" : "100%" }}>
        <Card.Body style={{
            height: '250px',
            overflow: 'auto'
        }}>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>
                {blog.blog_description}
            </Card.Text>

        </Card.Body>
        {linkShow 
        ?<Card.Footer  style={{ cursor: "pointer" }} onClick={() => navigate(`/blog/${blog.id}`)}><a>View Info</a></Card.Footer>
        :""}

    </Card>

  )
}





