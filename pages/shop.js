import React from "react";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import { DefaultLayout } from "@components";
import Image from "next/image";

export default function Shop() {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));

    // return (
    //     <DefaultLayout>
    //         <Grid container>
    //             <Grid item xs={12}>
    //                 <Typography sx={{ mt: "56px", mb: "24px" }} variant="hero">
    //                     Comming soon :)
    //                 </Typography>
    //                 <Typography sx={{ mb: "24px" }}>
    //                     Prijava za kupovinu majica će biti otvorene od 22.07 i trajaće do 25.07.
    //                 </Typography>
    //                 <Button href="/" variant="contained" color="primary">
    //                     Nazad na početnu
    //                 </Button>
    //             </Grid>
    //         </Grid>
    //     </DefaultLayout>
    // );

    return (
        <DefaultLayout
            ContainerProps={{
                sx: {
                    overflow: "hidden",
                    "@media screen and (min-width: 991px)": { overflow: "unset" },
                },
            }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography
                        sx={{ mt: "56px", mb: "24px" }}
                        textTransform="uppercase"
                        variant="h1"
                        color="#EC2027">
                        Shop
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "350px",
                            position: "relative",
                            mb: "32px",
                            "@media screen and (min-width: 991px)": { height: "600px" },
                        }}>
                        <Image
                            objectFit={isDesktop ? "contain" : "cover"}
                            src="/images/shop/dodjinabasket2.jpg"
                            layout="fill"
                            alt="majica-crna"
                        />
                    </Box>
                    <Typography
                        textAlign="end"
                        sx={{
                            mb: "24px",
                            mt: "50px",
                            "@media screen and (min-width: 991px)": {
                                my: "40px",
                                fontSize: "64px",
                            },
                        }}
                        variant="hero">
                        1.700 RSD
                    </Typography>
                </Grid>

                <Grid item xs={10}>
                    <Box
                        sx={{
                            width: "100%",
                            minHeight: "200px",
                            aspectRatio: "1 / 1",
                            position: "relative",
                            mb: "32px",
                            "@media screen and (min-width: 991px)": { height: "600px" },
                        }}>
                        <Image
                            layout="fill"
                            src="/images/shop/dodjinabasket4.jpg"
                            objectFit="contain"
                            alt="majica-bela-front-and-back"
                        />
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
                        <Box
                            sx={{
                                width: "500px",
                                height: "400px",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                transform: "translateX(47%) rotate(15deg)",
                                "@media screen and (min-width: 991px)": {
                                    width: "800px",
                                    height: "800px",
                                    position: "absolute",
                                    bottom: "-4rem",
                                    right: 0,
                                    transform: "translateX(47%) rotate(15deg)",
                                },
                            }}>
                            <Image
                                src="/images/right-leaf.svg"
                                layout="fill"
                                objectFit="contain"
                                alt="olive-branch-right"
                            />
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sx={{ position: "relative" }}>
                    {isDesktop && (
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "25%",
                                transform: "translate(-50%, -50%)",
                                width: "400px",
                                height: "400px",
                                zIndex: "10",
                            }}>
                            <Box xs={{ width: "100%", height: "100%", position: "relative" }}>
                                <Image
                                    src="/images/logo/dnb-logo.svg"
                                    layout="fill"
                                    objectFit="contain"
                                    alt="slika"
                                />
                            </Box>
                        </Box>
                    )}

                    <Box
                        sx={{
                            width: "100%",
                            height: "400px",
                            position: "relative",
                            mb: "32px",
                            "@media screen and (min-width: 991px)": { height: "800px" },
                        }}>
                        <Image
                            objectFit={isDesktop ? "contain" : "cover"}
                            objectPosition={isDesktop ? "right" : "center"}
                            src="/images/shop/dodjinabasket3.jpg"
                            layout="fill"
                            alt="majica-crna-model"
                        />
                    </Box>
                    <Typography
                        sx={{
                            mb: "32px",
                            "@media screen and (min-width: 991px)": {
                                fontSize: "64px",
                                my: "80px",
                            },
                        }}
                        textAlign="center"
                        variant="h2">
                        XS, S, M, L, XL, 2XL, 3XL, 4XL
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
                        <Box
                            sx={{
                                width: "400px",
                                height: "300px",
                                position: "absolute",
                                top: "-2rem",
                                left: 0,
                                transform: "translateX(-55%) rotate(-39deg)",
                                zIndex: "10",
                                "@media screen and (min-width: 991px)": {
                                    width: "800px",
                                    height: "800px",
                                    position: "absolute",
                                    top: "-3rem",
                                    right: 0,
                                    transform: "translateX(-55%) rotate(-54deg)",
                                },
                            }}>
                            <Image
                                src="/images/left-leaf.svg"
                                layout="fill"
                                objectFit="contain"
                                alt="olive-branch"
                            />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={10}>
                    <Box
                        sx={{
                            width: "100%",
                            minHeight: "300px",
                            aspectRatio: "1 / 1",
                            position: "relative",
                            mb: "32px",
                        }}>
                        <Image
                            objectFit="contain"
                            src="/images/shop/dodjinabasket1.jpg"
                            layout="fill"
                            alt="majica-bela-back"
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                zIndex: "10",
                                transform: "translate(-50%, 50%)",
                                textAlign: "center",
                            }}>
                            <Typography sx={{ m: 0 }} variant="h1">
                                100%
                            </Typography>
                            <Typography sx={{ m: 0 }} variant="h2">
                                PAMUK
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* <Grid item xs={12} md={6} sx={{ px: { xs: 0, lg: "16px" } }}>
                    <Box
                        sx={{
                            width: "100%",
                            minHeight: "300px",
                            aspectRatio: "1 / 1",
                            position: "relative",
                            my: { xs: "32px", lg: "100px" },
                        }}>
                        <Image
                            objectFit="contain"
                            src="/images/shop/crna-objava07.png"
                            layout="fill"
                            alt="majica-prisivac"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ px: { xs: 0, lg: "16px" } }}>
                    <Box
                        sx={{
                            width: "100%",
                            minHeight: "300px",
                            aspectRatio: "1 / 1",
                            position: "relative",
                            my: { xs: "32px", lg: "100px" },
                        }}>
                        <Image
                            objectFit="contain"
                            src="/images/shop/bela-objava02.png"
                            layout="fill"
                            alt="majica-bela-front"
                        />
                    </Box>
                </Grid> */}

                {/* START :: CTA */}
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: "flex",
                            mt: "80px",
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
                            ZELIŠ DA KUPIŠ
                            <br />
                            NAŠU MAJICU?
                        </Typography>
                        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSf67Zllal5NWsLmya_nOv8NniJVD8dxoZHfXB3EQyJ8rdwdog/viewform" target="_blank" variant="contained" color="primary">
                            KUPI MAJICU
                        </Button>
                    </Box>
                </Grid>
                {/*   END :: CTA */}
            </Grid>
        </DefaultLayout>
    );
}
