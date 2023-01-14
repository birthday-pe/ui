import React, { useEffect, useState } from 'react';
import { backgroundColor } from '../../App';
import { webLogs } from '../../dbCollections';
import { getAllDocuments } from '../../firebase/db';
import { somethingWentWrong } from '../../toasterMessages';
import Loader from '../Loader';
import { toaster } from '../toaster';
import BlogCard from './BlogCard';

function Blogs(props) {

    const [ blogs, setBlogs ] = useState(null);

    useEffect(()=>{
         Promise.resolve(getAllDocuments(webLogs)).then(res => {
        

            let arr = [];
            res.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
                arr.push({title: doc.data().title, id: doc.id})
            });

            setBlogs(arr);

         }) 
    }, [])

    return (
        blogs === null ? <Loader/> :
        <div
        align='left'
        >
            <br/>
            <br/>
            <br/>
            <br/>
            <marquee>Blogs content should be around employee welfare,</marquee> 
            <br/> 
            <h1 align="center" style={{ color: backgroundColor, padding: '30px 0px', fontWeight: '500'}}>Articles</h1>
            {
                blogs?.map(blog => {
                    return <><BlogCard title={blog.title} id={blog.id} /><br/></>
                })
            }
        </div>
    );
}

export default Blogs;