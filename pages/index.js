import React, { useRef } from "react";
import { Box, Typography, Grid, Container, Button, useMediaQuery } from "@mui/material";
import { DefaultLayout } from "@components";
import Slider from "react-slick";
import Image from "next/image";

var slickSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export default function Home() {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));

    return (
        <DefaultLayout noContainer>
            <Container>
                <Grid container spacing={0}>
                    {/* START :: Video */}

                    {!isDesktop ? (
                        <>
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        mb: "10px",
                                        zIndex: "-1",
                                        video: {
                                            width: "100%",
                                            height: "213px",
                                            objectFit: "cover",
                                            "@media screen and (min-width: 991px)": {
                                                height: "400px",
                                                objectFit: "contain",
                                            },
                                        },
                                    }}>
                                    <video
                                        src="/video/basic.mp4"
                                        autoPlay
                                        loop
                                        muted
                                    />
                                </Box>
                            </Grid>
                            {/*   END :: Video */}
                            <Grid item xs={12}>
                                <Typography
                                    sx={{ mt: "56px", mb: "24px" }}
                                    textTransform="uppercase"
                                    variant="h1"
                                    color="#EC2027">
                                    DOĐI NA BASKET
                                </Typography>
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid item xs={12} lg={4}>
                                <Typography
                                    sx={{ mt: "56px", mb: "24px", whiteSpace: "nowrap", zIndex: "10", fontSize: "128px !important", lineHeight: "130px !important", color: "#fff", 
                                        WebkitTextStrokeWidth: "1px",
                                        WebkitTextStrokeColor: "#000",
                                    }}
                                    textTransform="uppercase"
                                    variant="h1"
                                    color="#EC2027">
                                    DOĐI NA<br/>BASKET
                                </Typography>
                                <Typography>
                                    &quot;Dođi na basket K3 - Mozzart&quot; je kreativni i inovativni 3x3 turnir
                                    koji želi da unapredi sportsku scenu u Zaječaru.
                                </Typography>
                            </Grid>
                            {/*   END :: Video */}
                            <Grid item xs={12} lg={8}>
                                
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        mb: "10px",
                                        zIndex: "-1",
                                        video: {
                                            width: "100%",
                                            height: "213px",
                                            objectFit: "cover",
                                            "@media screen and (min-width: 991px)": {
                                                height: "500px",
                                                objectFit: "cover",
                                            },
                                        },
                                    }}>
                                    <video
                                        src="/video/basic.mp4"
                                        style={{zIndex: "-1"}}
                                        autoPlay
                                        loop
                                        muted
                                    />
                                </Box>
                            </Grid>
                        </>
                    )}
                    {/* START :: Section */}
                    <Grid item xs={2} />
                    <Grid item xs={10}>
                        {!isDesktop && (
                            <Typography>
                                &quot;Dođi na basket - K3&quot; je kreativni i inovativni 3x3 turnir
                                koji želi da unapredi sportsku scenu u Zaječaru.
                            </Typography>
                        )}
                    </Grid>
                    {/*   END :: Section */}
                </Grid>
            </Container>
            {/* START :: Slider */}
            <Grid container spacing={0}>
                <Grid
                    item
                    xs={12}
                    sx={{ my: "16px", "@media screen and (min-width: 991px)": { my: "40px" } }}>
                    <Slider {...slickSettings}>
                        <Box
                            sx={{
                                width: "100%",
                                height: "200px",
                                p: "12px",
                                "@media screen and (min-width: 991px)": { height: "400px" },
                            }}>
                            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
                                <Image
                                    layout="fill"
                                    objectFit="cover"
                                    // style={{ margin: "10px" }}
                                    src="/images/pocetna-teren-00.jpg"
                                    alt="slika"
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                height: "200px",
                                p: "12px",
                                "@media screen and (min-width: 991px)": { height: "400px" },
                            }}>
                            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
                                <Image
                                    layout="fill"
                                    objectFit="cover"
                                    // style={{ margin: "10px" }}
                                    src="/images/pocetna-teren-01.jpg"
                                    alt="slika"
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                height: "200px",
                                p: "12px",
                                "@media screen and (min-width: 991px)": { height: "400px" },
                            }}>
                            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
                                <Image
                                    layout="fill"
                                    objectFit="cover"
                                    // style={{ margin: "10px" }}
                                    src="/images/pocetna-teren-02.jpg"
                                    alt="slika"
                                />
                            </Box>
                        </Box>
                    </Slider>
                </Grid>
            </Grid>
            {/*   END :: Slider */}
            <Container
                sx={{
                    overflow: "hidden",
                    "@media screen and (min-width: 991px)": { overflow: "unset" },
                }}>
                <Grid container>
                    {/* START :: Section */}
                    <Grid item xs={2} lg={4} />
                    <Grid item xs={10} lg={8}>
                        <Typography>
                            Poznat pod imenom &quot;DNB&quot; pravo je osveženje za naselje Ključ 3
                            jer do sada nije bilo sportskih događaja takvog tipa.
                        </Typography>
                    </Grid>
                    {/*   END :: Section */}
                    {/* START :: Fond */}
                    <Grid item xs={12}>
                        <Typography
                            sx={{ mt: "56px", mb: "24px" }}
                            textTransform="uppercase"
                            variant="h1"
                            color="#EC2027">
                            Nagradni fond
                        </Typography>
                    </Grid>
                    {/* START :: Section */}
                    <Grid item xs={2}  lg={4}/>
                    <Grid item xs={10} lg={8}>
                        <Typography
                            variant="hero"
                            sx={{
                                background: "url(/images/text.png)",
                                backgroundPosition: "center",
                                backgroundSize: "contain",
                                WebkitTextFillColor: "transparent",
                                WebkitBackgroundClip: "text",
                            }}>
                            300.000 RSD
                        </Typography>
                        <Box sx={{ mt: "24px" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: "12px",
                                    pb: "12px",
                                    borderBottom: "1px solid #EC2027",
                                }}>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant={isDesktop ? "caption" : "caption2"}>
                                        SENIORI
                                    </Typography>
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant={isDesktop ? "caption" : "caption2"}>
                                        100.000rsd
                                    </Typography>
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant={isDesktop ? "caption" : "caption2"}>
                                        50.000rsd
                                    </Typography>
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant={isDesktop ? "caption" : "caption2"}>
                                        25.000rsd
                                    </Typography>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: "12px",
                                    pb: "12px",
                                    borderBottom: "1px solid #EC2027",
                                }}>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant={isDesktop ? "caption" : "caption2"}>
                                        KADETI
                                    </Typography>
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant={isDesktop ? "caption" : "caption2"}>
                                        30.000rsd
                                    </Typography>
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant={isDesktop ? "caption" : "caption2"}>
                                        15.000rsd
                                    </Typography>
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant={isDesktop ? "caption" : "caption2"}>
                                        7.000rsd
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant={isDesktop ? "caption" : "caption2"}>
                                        PIONIRI
                                    </Typography>
                                </Box>
                                <Box sx={{ flex: 3 }}>
                                    <Typography variant={isDesktop ? "caption" : "caption2"}>
                                        Robne nagrade, pehari, medalje i diplome
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    {/*   END :: Section */}
                    {/*   END :: Fond */}
                    {/* START :: Lokacija */}
                    <Grid item xs={12}>
                        <Typography
                            sx={{ mt: "56px", mb: "24px" }}
                            textTransform="uppercase"
                            variant="h1"
                            color="#EC2027">
                            Lokacija
                        </Typography>
                    </Grid>
                    {/* START :: Section */}
                    <Grid item xs={2}>
                        <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
                            <Box
                                sx={{
                                    width: "270px",
                                    height: "160px",
                                    position: "absolute",
                                    top: "-2rem",
                                    left: 0,
                                    transform: "translateX(-70%)",
                                    "@media screen and (min-width: 991px)": {
                                        width: "570px",
                                        height: "560px",
                                        position: "absolute",
                                        top: "-10rem",
                                        left: 0,
                                        transform: "translateX(-70%) rotate(-2deg)",
                                    },
                                }}>
                                <Image
                                    src="/images/left-leaf.svg"
                                    layout="fill"
                                    objectFit="contain"
                                    alt="slika"
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid sx={{ position: "relative", mb: "80px" }} item xs={10}>
                        <Typography variant={isDesktop ? "h3" : "caption"} sx={{ mb: "16px" }}>
                            Požarevačka 55, Naselje Ključ 3 <br/>19 000 Zaječar
                        </Typography>
                        <Typography color="#EC2027" variant={isDesktop ? "h2" : "h3"}>
                            22° 16’ 1.5714”E
                        </Typography>
                        <Typography color="#EC2027" variant={isDesktop ? "h2" : "h3"}>
                            43° 54’ 36.38605”N
                        </Typography>
                        <Box
                            sx={{
                                width: "300px",
                                height: "300px",
                                position: "absolute",
                                bottom: "-2rem",
                                right: 0,
                                transform: "translateX(50%) rotate(5deg)",
                                "@media screen and (min-width: 991px)": {
                                    width: "800px",
                                    height: "800px",
                                    position: "absolute",
                                    bottom: "-8rem",
                                    right: 0,
                                    transform: "translateX(60%) rotate(32deg)",
                                },
                            }}>
                            <Image
                                src="/images/right-leaf.svg"
                                layout="fill"
                                objectFit="contain"
                                alt="slika"
                            />
                        </Box>
                    </Grid>
                    {/*   END :: Section */}
                    {/* START :: CTA */}
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                width: "100%",
                                height: "200px",
                                background: "url(/images/hoop.png)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                "@media screen and (min-width: 991px)": { height: "400px" },
                            }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    mb: "24px",
                                    "@media screen and (min-width: 991px)": { fontSize: "32px" },
                                }}>
                                ZELIŠ DA PRIJAVIŠ
                                <br />
                                SVOJU EKIPU?
                            </Typography>
                            <Button  href="/prijava" variant="contained" color="primary">
                                PRIJAVA
                            </Button>
                        </Box>
                    </Grid>
                    {/*   END :: CTA */}
                </Grid>
            </Container>
        </DefaultLayout>
    );
}
