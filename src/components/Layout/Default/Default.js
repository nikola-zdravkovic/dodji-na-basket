import React from "react";
import { Header, Footer } from "@components";
import { Container, Box } from "@mui/material";
import { styled } from "@mui/system";
import { SEO } from "@components";

export const DefaultLayoutRoot = styled("main")((props) => `
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
);

const DefaultLayout = (props) => {
    const { children, maxWidth, noContainer, ContainerProps, seoProps, ...others } = props;

    return (
        <DefaultLayoutRoot {...others}>
            <SEO {...seoProps}/>
            <Box sx={{pt: "80px"}}>
                <Header />
                {noContainer ? (
                    <>{children}</>
                ) : (
                    <Container {...ContainerProps} >
                        {children}
                    </Container>
                )}
            </Box>
            <Footer />
        </DefaultLayoutRoot>
    );
};

export default DefaultLayout;
