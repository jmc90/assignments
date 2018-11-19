import React from 'react';
import BlogPost from './BlogPost'

const BlogList = ({ blogs }) => {

    const blogsPosts = blogs.map(blog =>
        <BlogPost
            title={blog.title}
            subTitle={blog.subTitle}
            author={blog.author}
            date={blog.date} />)

    return (
        <div id="blog-list">
            {blogsPosts}
            <div className="btnDiv">
                <button>Older Posts &rarr;</button>
            </div>
        </div>
    );

}

export default BlogList;