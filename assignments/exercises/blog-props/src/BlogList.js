import React from 'react';
import BlogPost from './BlogPost'

const BlogList = ({blogs}) => {

    const blogsPosts = blogs.map(blog => 
        <BlogPost 
            title={blog.title}
            subTitle={blog.subTitle}
            author={blog.author}
            date={blog.date} />)

    return (
      <div >
        {blogsPosts}
        <button>Older Posts</button>
      </div>
    );

}

export default BlogList;