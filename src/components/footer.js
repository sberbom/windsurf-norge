import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <section>
                <ul className="footerlist">
                    <li>Contact:</li>
                    <li>Sigmund Berbom</li>
                    <li>sberbom@gmail.com</li>
                </ul>
            </section>
            <section>
                <p>Windsurf Norge</p>
            </section>
            <section>
                <p>This page is made by Sigmund Berbom as learning project please contact sberbom@gmail.com if you find anny errors</p>
            </section>
        </div>
    );
}

export default Footer;