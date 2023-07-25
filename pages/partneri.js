import React from "react";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import { DefaultLayout } from "@components";
import Image from "next/image";

export default function Raspored() {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("lg"));

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
                        Partneri
                    </Typography>
                </Grid>

                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}>
                        <Grid container spacing={2}>
                            {/* <Grid
                                item
                                xs={12}
                                sx={{ mb: "8px", pb: "24px", borderBottom: "1px solid #EC2027" }}>
                                <Typography
                                    sx={{
                                        mb: "24px",
                                        "@media screen and (min-width: 991px)": {
                                            fontSize: "32px",
                                        },
                                    }}
                                    variant="h2">
                                    Generalni sponzor
                                </Typography>
                                <Box sx={{ mt: "24px" }}>
                                    <Image
                                        src="/images/sponzori/tehnomedija.png"
                                        width={180}
                                        height={40}
                                        alt="tehnomedija"
                                    />
                                </Box>
                            </Grid> */}
                            <Grid item xs={12}>
                                <Typography
                                    sx={{
                                        mb: "24px",
                                        "@media screen and (min-width: 991px)": {
                                            fontSize: "32px",
                                        },
                                    }}
                                    variant="h2">
                                    Pokrovitelj: Grad Zaječar
                                </Typography>
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
                        <Button  href="/prijava" variant="contained" color="primary">
                            PRIJAVA
                        </Button>
                    </Box>
                </Grid>
                {/*   END :: CTA */}
            </Grid>
        </DefaultLayout>
    );
}
