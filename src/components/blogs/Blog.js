import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { webLogs } from '../../dbCollections';
import { getDocument } from '../../firebase/db';
import Loader from '../Loader';
import BlogCard from './BlogCard';

function Blog(props) {

    const { id } = useParams();

    const [ blog, setBlog ] = useState(null);

    useEffect(()=>{
        Promise.resolve(getDocument(webLogs, id)).then(res => {
            setBlog(res.data());
         }) 
    }, []);

    return (
        blog === null ? <Loader /> :
        <>
        <div>
            <br/>
            <br/>
            <br/> 
            <h1 style={{ color: 'white' ,padding: '70px' ,background: 'url("https://images.pexels.com/photos/157879/gift-jeans-fashion-pack-157879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") no-repeat', backgroundSize: '100%', backgroundPosition: 'center left'}}>{blog?.title}</h1>
        </div>
        <br/>

        <div align='left'>
        <div style={{fontSize: '19px', fontWeight: '300'}} dangerouslySetInnerHTML={{__html: blog?.content}}></div>

        </div>
        </>
    );
}

export default Blog;