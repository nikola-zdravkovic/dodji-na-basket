import React from "react";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import { DefaultLayout } from "@components";
import Image from "next/image";

export default function Raspored() {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));
    return (
        <DefaultLayout>
            <Grid container>
                <Grid item xs={12}>
                    <Typography sx={{ mt: "56px", mb: "24px" }} variant="hero">
                        Comming soon :)
                    </Typography>
                    <Typography sx={{ mb: "24px" }}>
                        Raspored će biti objavljen nakon prijava.
                    </Typography>
                    <Button href="/" variant="contained" color="primary">
                        Nazad na početnu
                    </Button>
                </Grid>
            </Grid>
        </DefaultLayout>
    );
    return (
        <DefaultLayout>
            <Grid container>
                {/* START :: Fond */}
                <Grid item xs={12}>
                    <Typography
                        sx={{ mt: "56px", mb: "24px" }}
                        textTransform="uppercase"
                        variant="h1"
                        color="#EC2027">
                        Raspored
                    </Typography>
                </Grid>

                <Grid
                    container
                    sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}
                    spacing={1}>
                    <Grid item xs={3}>
                        <Typography variant={isDesktop ? "caption" : "caption2"}>
                            3. MESTO PIONIRI
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography>Jedva se zbrasmo I</Typography>
                                <Typography>Jedva se zbrasmo II</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2">19:00</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    container
                    sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}
                    spacing={1}>
                    <Grid item xs={3}>
                        <Typography variant={isDesktop ? "caption" : "caption2"}>
                            3. MESTO KADETI
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography>AR Miki 019</Typography>
                                <Typography>AS Formula</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2"></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    container
                    sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}
                    spacing={1}>
                    <Grid item xs={3}>
                        <Typography variant={isDesktop ? "caption" : "caption2"}>
                            FINALE PIONIRI
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography>Ugijevi Puleni</Typography>
                                <Typography>DLB</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2"></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    container
                    sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}
                    spacing={1}>
                    <Grid item xs={3}>
                        <Typography variant={isDesktop ? "caption" : "caption2"}>
                            FINALE KADETI
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography>Gladijatori</Typography>
                                <Typography>Gostoprimnica</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2"></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    container
                    sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}
                    spacing={1}>
                    <Grid item xs={3}>
                        <Typography variant={isDesktop ? "caption" : "caption2"}>
                            POLUFINALE SENIORI
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid
                            container
                            sx={{ mb: "8px", pb: "8px", borderBottom: "1px solid #EC2027" }}>
                            <Grid item xs={8}>
                                <Typography>Ribarnica Sirena</Typography>
                                <Typography>Južni Vetar</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2"></Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography>Beer House GB</Typography>
                                <Typography>Stela x Mangup</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2"></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}>
                        <Grid
                            container
                            sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}>
                            <Grid item xs={8}>
                                <Typography variant={isDesktop ? "h2" : "h2"}>
                                    Takmičenje u šutiranju trojki
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2"></Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}>
                            <Grid item xs={8}>
                                <Typography variant={isDesktop ? "h2" : "h2"}>
                                    Revijalna utakmica
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2"></Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}>
                            <Grid item xs={8}>
                                <Typography variant={isDesktop ? "h2" : "h2"}>
                                    Trece mesto Seniori
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2"></Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}>
                            <Grid item xs={8}>
                                <Typography variant={isDesktop ? "h2" : "h2"}>
                                    Finale Trojki
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2"></Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}>
                            <Grid item xs={8}>
                                <Typography variant={isDesktop ? "h2" : "h2"}>
                                    Veliko Finale Seniori
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2"></Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}>
                            <Grid item xs={8}>
                                <Typography variant={isDesktop ? "h2" : "h1"}>FOX</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2">11.08</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

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
                            mt: "80px",
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
                        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSf67Zllal5NWsLmya_nOv8NniJVD8dxoZHfXB3EQyJ8rdwdog/viewform" target="_blank" variant="contained" color="primary">
                            PRIJAVA
                        </Button>
                    </Box>
                </Grid>
                {/*   END :: CTA */}
            </Grid>
        </DefaultLayout>
    );
}
