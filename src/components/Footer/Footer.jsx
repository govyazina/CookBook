import React from 'react';

function Footer() {
    return (
        <footer className="page-footer brown darken-2">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your
                            footer
                            content.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://www.flaticon.com/authors/freepik"
                                   title="cook icons">Cook icons created by Freepik - Flaticon</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2023 Cook Book
                    <a className="grey-text text-lighten-4 right"
                       href="https://github.com/govyazina/CookBook">GitHub</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;