import React, { useRef } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { DefaultLayout } from "@components";

export default function Kontakt() {
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
                        Kontakt
                    </Typography>
                </Grid>
                {/* START :: Section */}
                <Grid item xs={2} />
                <Grid item xs={10}>
                    <Typography
                        sx={{
                            mb: "10px",
                            "& a": {
                                color: "#fff",
                                transition: "color .15s",
                                "&:hover": { color: "#EC2027" },
                            },
                            "@media screen and (min-width: 991px)": {
                                fontSize: "32px",
                                lineHeight: "40px",
                            },
                        }}>
                        EMAIL: <a href="mailto:dodjinabasket23@gmail.com">dodjinabasket23@gmail.com</a>
                    </Typography>
                    <Typography
                        sx={{
                            mb: "10px",
                            "& a": {
                                color: "#fff",
                                transition: "color .15s",
                                "&:hover": { color: "#EC2027" },
                            },
                            "@media screen and (min-width: 991px)": {
                                fontSize: "32px",
                                lineHeight: "40px",
                            },
                        }}>
                        Facebook:{" "}
                        <a
                            href="https://www.facebook.com/dodjinabasket"
                            target="_blank"
                            rel="noopener noreferrer">
                            Dodji na basket
                        </a>
                    </Typography>
                    <Typography
                        sx={{
                            mb: "10px",
                            "& a": {
                                color: "#fff",
                                transition: "color .15s",
                                "&:hover": { color: "#EC2027" },
                            },
                            "@media screen and (min-width: 991px)": {
                                fontSize: "32px",
                                lineHeight: "40px",
                            },
                        }}>
                        Instagram:{" "}
                        <a
                            href="https://www.instagram.com/dnb_k3/"
                            target="_blank"
                            rel="noopener noreferrer">
                            dnb_k3
                        </a>
                    </Typography>
                    <Typography
                        sx={{
                            mb: "10px",
                            "& a": {
                                color: "#fff",
                                transition: "color .15s",
                                "&:hover": { color: "#EC2027" },
                            },
                            "@media screen and (min-width: 991px)": {
                                fontSize: "32px",
                                lineHeight: "40px",
                            },
                        }}>
                        Youtube:{" "}
                        <a
                            href="https://www.youtube.com/channel/UCYY0LV1dmFOcRwx4pG_F9Yw"
                            target="_blank"
                            rel="noopener noreferrer">
                            Dodji na basket
                        </a>
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    {/* <MyMapComponent isMarkerShown /> */}
                </Grid>

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
