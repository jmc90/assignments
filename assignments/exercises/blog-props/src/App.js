import React from 'react';
import './App.css';
import Header from './Header'
import BlogList from './BlogList'
import Footer from './Footer'
import { blogs } from './blogs'

const App = () => {

    return (
      <div >
        <Header />
        <BlogList blogs={ blogs }/>
        <Footer />
      </div>
    );

}

export default App;
