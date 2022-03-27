import { Fragment } from "react";
import Navbar from "./Navbar";

/**
 *  We are defining a basic layout for the rest of the web app
 */
export default function Layout( { children } ) {

    return (
        <Fragment>
            <Navbar />
            {children}
        </Fragment>
    );
}