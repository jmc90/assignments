import React from 'react';


const Footer = () => {

    return (
        <div id="footer">
            <div>
                <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
                <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
                <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <p>Copyright &copy; Your Website 2018</p>
        </div>
    );

}

export default Footer;