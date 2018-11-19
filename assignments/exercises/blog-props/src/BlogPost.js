import React from 'react';


const BlogPost = ({ title, subTitle, author, date }) => {

    return (
        <div className="post">
            <div>
                <div className="post-title">
                    <h2>{title}</h2>
                    <h3>{subTitle}</h3>
                </div>
                <p>Posted by <span>{author}</span> on {date} </p>
                <hr />
            </div>
        </div>
    );

}

export default BlogPost;