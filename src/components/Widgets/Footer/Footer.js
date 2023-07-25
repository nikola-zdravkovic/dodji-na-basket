import { Typography, Divider, Box, Container } from "@mui/material";
import { FacebookRounded as FacebookIcon, Instagram as InstagramIcon, YouTube as YoutubeIcon } from "@mui/icons-material";
import Link from "next/link";
import { styled } from "@mui/system";

export const FooterRoot = styled("footer")(({theme}) => `
    a {
        color: ${theme.palette.common.white};
    }
`);
export const SocialRoot = styled(Box)(({theme}) => `
    display: flex;
    gap: 30px;
    a {
        color: ${theme.palette.common.white};
    }
`);

const Footer = (props) => {
    return (<FooterRoot>
        <Container sx={{pb: "24px", mt: "80px"}}>
            <Link href="/">
                <a>
                    <Typography>Početna</Typography>
                </a>
            </Link>
            <Divider sx={{my: "10px", opacity: ".25"}} />
            <Link href="/o-nama">
                <a>
                    <Typography>O Nama</Typography>
                </a>
            </Link>
            <Divider sx={{my: "10px", opacity: ".25"}} />
            <Link href="/galerija">
                <a>
                    <Typography>Galerija</Typography>
                </a>
            </Link>
            <Divider sx={{my: "10px", opacity: ".25"}} />
            <Link href="/raspored">
                <a>
                    <Typography>Raspored</Typography>
                </a>
            </Link>
            <Divider sx={{my: "10px", opacity: ".25"}} />
            <Link href="/shop">
                <a>
                    <Typography>Shop</Typography>
                </a>
            </Link>
            <Divider sx={{my: "10px", opacity: ".25"}} />
            <Link href="/partneri">
                <a>
                    <Typography>Partneri</Typography>
                </a>
            </Link>
            <Divider sx={{my: "10px", opacity: ".25"}} />
            <Link href="/kontakt">
                <a>
                    <Typography>Kontakt</Typography>
                </a>
            </Link>
            <Divider sx={{my: "10px", opacity: ".25"}} />

            <SocialRoot sx={{mt: "50px"}}>
                <a href="https://www.facebook.com/dodjinabasket" target="_blank" rel="noopener noreferrer"><FacebookIcon fontSize="medium" /></a>
                <a href="https://www.instagram.com/dnb_k3/" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize="medium" /></a>
                <a href="https://www.youtube.com/channel/UCYY0LV1dmFOcRwx4pG_F9Yw" target="_blank" rel="noopener noreferrer"><YoutubeIcon fontSize="medium" /></a>
            </SocialRoot>

            <Typography sx={{mt: "28px", mb:"4px"}}>©2022 DNB - K3</Typography>
            <Typography sx={{opacity: ".5"}}>Made by Aleksa & Nikola</Typography>
        </Container>
    </FooterRoot>);
};

export default Footer;
