import React, { useState } from "react";
import { Container, Box, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Burger as BurgerIcon } from "@icons";
import SideMenu from "./SideMenu";

import { styled } from "@mui/system";

export const HeaderRoot = styled("nav")(({theme}) => `
    position: fixed;
    top: 0;
    left: 50%;
    width: 100%;
    height: 80px;
    transform: translateX(-50%);
    background-color: ${theme.palette.common.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10000;

    .logo {
        height: 50px;
        width: 50px;
        position: relative;
        cursor: pointer;
    }
`);



const Header = (props) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('lg'));

    return (
        <HeaderRoot>
            <Container sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <Box className="logo">
                    <Link href="/">
                        <Image src="/images/logo/dnb-logo.svg" alt="dodji-na-basket" layout="fill" />
                    </Link>
                </Box>
                <BurgerIcon onClick={()=>{setOpen(!open)}} sx={{cursor: "pointer"}}/>
            </Container>
            <SideMenu sx={{transform: `translateX(${open ? "0" : "100%"})`}} />
        </HeaderRoot>
    );
};

export default Header;
