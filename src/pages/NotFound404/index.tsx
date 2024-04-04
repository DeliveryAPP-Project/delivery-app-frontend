import React from "react";
import { NotFoundContainer, NotfoundH1, NotfoundP } from "./NotFound404.styles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function NotFound404() {
    return (
        <React.Fragment>
            <Header />
            <NotFoundContainer>
                <NotfoundH1>
                    404
                </NotfoundH1>
                <NotfoundP>
                    Not Found!
                </NotfoundP>
            </NotFoundContainer>
            <Footer Marginfooter={5} />
        </React.Fragment>
    )
}