import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard(props) {
    const { title, id } = props;
    return (
        <Link
        to={`./${id}`}
        style={{
            fontWeight: '300',
            textDecoration: 'none',
            padding: '15px 25px',
            backgroundColor: '#f8f9fa',
            color: 'black',
            fontFamily: 'Roboto',
            borderRadius: '7px',
            cursor: 'pointer',
            fontSize: '18px',
            display: 'block',
            marginBottom: '10px',
            display: 'inline-block',
        }}>
            { title }
        </Link>
    );
}

export default BlogCard;