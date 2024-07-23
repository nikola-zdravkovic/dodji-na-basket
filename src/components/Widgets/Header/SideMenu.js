import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { Typography, Divider } from "@mui/material";
import { FacebookRounded as FacebookIcon, Instagram as InstagramIcon, YouTube as YoutubeIcon } from "@mui/icons-material";
import Link from "next/link";

export const SideMenuRoot = styled(Box)(({theme}) => `
    position: fixed;
    top: 80px;
    right: 0;
    width: 100%;
    transform: translateX(100%);
    transition: transform .33s;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: ${theme.palette.common.black};
    z-index: 10007;
    background-image: url("/images/bg-scratch.png");
    background-size: cover;
    background-position: center;
    overflow-y: scroll;
    ${theme.breakpoints.up("md")} {
        width: 400px;
    }
    a {
        color: ${theme.palette.common.white};
    }
`);


export const SocialRoot = styled(Box)(({theme}) => `
    display: flex;
    gap: 30px;
`);

const SideMenu = (props) => {
    return <SideMenuRoot {...props}>
        <Link href="/">
            <a>
                <Typography textTransform="uppercase" variant="h2">Početna</Typography>
            </a>
        </Link>
        <Divider sx={{my: "16px"}} />
        <Link href="/o-nama">
            <a>
                <Typography textTransform="uppercase" variant="h2">O Nama</Typography>
            </a>
        </Link>
        <Divider sx={{my: "16px"}} />
        <Link href="/galerija">
            <a>
                <Typography textTransform="uppercase" variant="h2">Galerija</Typography>
            </a>
        </Link>
        <Divider sx={{my: "16px"}} />
        <Link href="/uskoro">
            <a>
                <Typography textTransform="uppercase" variant="h2">Raspored</Typography>
            </a>
        </Link>
        <Divider sx={{my: "16px"}} />
        <Link href="/shop">
            <a>
                <Typography textTransform="uppercase" variant="h2">Shop</Typography>
            </a>
        </Link>
        <Divider sx={{my: "16px"}} />
        <Link href="/partneri">
            <a>
                <Typography textTransform="uppercase" variant="h2">Partneri</Typography>
            </a>
        </Link>
        <Divider sx={{my: "16px"}} />
        <Link href="/kontakt">
            <a>
                <Typography textTransform="uppercase" variant="h2">Kontakt</Typography>
            </a>
        </Link>

        <SocialRoot sx={{mt: "50px"}}>
            <a href="https://www.facebook.com/dodjinabasket" target="_blank" rel="noopener noreferrer"><FacebookIcon fontSize="medium" /></a>
            <a href="https://www.instagram.com/dnb_k3/" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize="medium" /></a>
            <a href="https://www.youtube.com/channel/UCYY0LV1dmFOcRwx4pG_F9Yw" target="_blank" rel="noopener noreferrer"><YoutubeIcon fontSize="medium" /></a>
        </SocialRoot>

        <Typography sx={{mt: "28px", mb:"4px"}}>©2022 DNB - K3</Typography>
        <Typography sx={{opacity: ".5"}}>Made by Aleksa & Nikola</Typography>

    </SideMenuRoot>
}

export default SideMenu;