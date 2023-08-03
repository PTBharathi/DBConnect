import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Card } from "react-bootstrap";
import './New_Style.css';
import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BlogInfo } from "./BlogInfo";

const Blog = () => {
    const [detail, setDetail] = useState([])
    let navigate = useNavigate();

    const del=async(id)=>{
        try{
      const ignore=await axios.delete(`http://localhost:5000/delete/${id}`)
      console.log(ignore);
      alert("Deleted Successfully")
      getUser()
    } catch (error) {
        console.log(error)
    }
}
    const getUser = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/blog`)
            console.log(response);
            setDetail(response.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser()
        console.log("Did mount")
    }, []);

    useEffect(() => {
    

        return () => {
            console.log("component unmounted")
        }
    }, [])



    useEffect(() => {
        console.log("inside update")
    }, [detail])


    const structure = () => {
        const one = detail;
        console.log(one)
        const listData = one.map((single, i) => {
            console.log(single.title)

            return (<>
                <Col lg={true} className="mt-2">
                    <BlogInfo blog={single} linkShow={true}/>
                </Col>
                <div>
                    <button className="delete" onClick={()=>del(single.id)}>Delete</button>
                </div>
                </>
            )
        })
        return listData;

    }

    //    const a= detail.map((single,i)=>{
    //         console.log(single)
    //         return single
    //     })
    //   console.log(a)
    return (
        <div className="Body">
            {/* <button onClick={()=>getUser()} className="but">Show</button> */}
            <Container>
                <Row>
                    {structure()}
                </Row>
            </Container>

            <br />
            <button className='blog' onClick={() => navigate(`/blogfrom`)}>Back to Form</button>
        </div >
    )
}
export default Blog;