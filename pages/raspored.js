import React from "react";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import { DefaultLayout } from "@components";
import Image from "next/image";

export default function Raspored() {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));

    // return (
    //     <DefaultLayout>
    //         <Grid container>
    //             <Grid item xs={12}>
    //                 <Typography sx={{ mt: "56px", mb: "24px" }} variant="hero">
    //                     Comming soon :)
    //                 </Typography>
    //                 <Typography sx={{ mb: "24px" }}>
    //                     Raspored će biti objavljen nakon prijava.
    //                 </Typography>
    //                 <Button href="/" variant="contained" color="primary">
    //                     Nazad na početnu
    //                 </Button>
    //             </Grid>
    //         </Grid>
    //     </DefaultLayout>
    // );
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
                            Kadeti (1/2)
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid
                            container
                            sx={{ mb: "8px", pb: "8px", borderBottom: "1px solid #EC2027" }}>
                            <Grid item xs={8}>
                                <Typography>3+1</Typography>
                                <Typography>Ribarnica Sirena</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2">18:30</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography>Forma</Typography>
                                <Typography>Extra Milk</Typography>
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
                            Pioniri
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid
                            container
                            sx={{ mb: "8px", pb: "8px", borderBottom: "1px solid #EC2027" }}>
                            <Grid item xs={8}>
                                <Typography>Rade i ekipa</Typography>
                                <Typography>Misevi</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2">(III Mesto)</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography>Auto Bane</Typography>
                                <Typography>Kućica na brdu</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2">(Finale)</Typography>
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
                            Seniori (1/4)
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid
                            container
                            sx={{ mb: "8px", pb: "8px", borderBottom: "1px solid #EC2027" }}>
                            <Grid item xs={8}>
                                <Typography>Ko-šulja & Vinarija Vračar</Typography>
                                <Typography>Stamparija Popovic</Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            sx={{ mb: "8px", pb: "8px", borderBottom: "1px solid #EC2027" }}>
                            <Grid item xs={8}>
                                <Typography>Salon Venedi</Typography>
                                <Typography>Ribarnica Sirena</Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            sx={{ mb: "8px", pb: "8px", borderBottom: "1px solid #EC2027" }}>
                            <Grid item xs={8}>
                                <Typography>Boom Taxi</Typography>
                                <Typography>Gostoprimnica</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography>Flora</Typography>
                                <Typography>Poslastičarnica Stela</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}>
                    <Grid item xs={8}>
                        <Typography variant={isDesktop ? "h2" : "h2"}>
                            Takmicenje u trojkama (PRVI KRUG)
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
                    sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}
                    spacing={1}>
                    <Grid item xs={3}>
                        <Typography variant={isDesktop ? "caption" : "caption2"}>
                            Seniori (1/2)
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container  sx={{ mb: "8px", pb: "8px", borderBottom: "1px solid #EC2027" }}>
                            <Grid item xs={8}>
                                <Typography>Pobednik meča 5. I 6.</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography>Pobednik meča 7. I 8.</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}>
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
                    sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}
                    spacing={1}>
                    <Grid item xs={3}>
                        <Typography variant={isDesktop ? "caption" : "caption2"}>Kadeti</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container>
                            <Grid item xs={8} sx={{ mb: "8px", pb: "8px", borderBottom: "1px solid #EC2027" }}>
                                <Typography>(III Mesto)</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography>Finale</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}>
                    <Grid item xs={8}>
                        <Typography variant={isDesktop ? "h2" : "h2"}>
                            Takmicenje u trojkama (FINALNA RUNDA)
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
                    sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}
                    spacing={1}>
                    <Grid item xs={3}>
                        <Typography variant={isDesktop ? "caption" : "caption2"}>
                            Seniori
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography>(III Mesto)</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant={isDesktop ? "h2" : "h2"}>
                            VELIKO FINALE
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

                {/* <Grid
                    container
                    sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}
                    spacing={1}>
                    <Grid item xs={3}>
                        <Typography variant={isDesktop ? "caption" : "caption2"}>Kadeti</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography>1/4 (C1-D2)</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> */}

                {/* <Grid
                    container
                    sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}
                    spacing={1}>
                    <Grid item xs={3}>
                        <Typography variant={isDesktop ? "caption" : "caption2"}>
                            Seniori
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography>Ribarnica Sirena</Typography>
                                <Typography>Žuto Kuce</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> */}


                {/* <Grid
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
                </Grid> */}
                <Grid container spacing={1}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}>
                        {/* <Grid
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
                        </Grid> */}
                        {/* <Grid
                            container
                            sx={{ mb: "16px", pb: "16px", borderBottom: "1px solid #EC2027" }}>
                            <Grid item xs={8}>
                                <Typography variant={isDesktop ? "h2" : "h1"}>Juice</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Typography variant="h2">23:00</Typography>
                            </Grid>
                        </Grid> */}
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
                        <Button href="/prijava" variant="contained" color="primary">
                            PRIJAVA
                        </Button>
                    </Box>
                </Grid>
                {/*   END :: CTA */}
            </Grid>
        </DefaultLayout>
    );
}
