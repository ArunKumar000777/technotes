import React from "react";
import { Link } from "react-router-dom";

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>
                    Welcome to <span className="nowrap">Dan D. Repairs!</span>
                </h1>
            </header>
            <main className="public__main">
                <p>
                    Located in Beautiful Kannur city, Dan D.Repairs provides a trained staff ready to meet your tech repair
                    needs
                </p>
                <address>
                    Dan D. Repairs <br />
                    Kannur <br />
                    pin:670331 <br />
                    <a href="tel:+917907456800">7907546800</a>
                </address>
                <br />
                <p>Owner: Dan Davidson</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>
    );
    return content;
};

export default Public;
