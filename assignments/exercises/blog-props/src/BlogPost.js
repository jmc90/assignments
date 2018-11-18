import React from 'react';


const BlogPost = ({title, subTitle, author, date}) => {

    return (
      <div >
        <div>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <p>Posted by <span>{author}</span> on {date} </p>
        </div>
      </div>
    );

}

export default BlogPost;