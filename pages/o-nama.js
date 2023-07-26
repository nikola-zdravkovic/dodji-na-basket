import React, { useRef } from "react";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import { DefaultLayout } from "@components";
import Image from "next/image";

export default function ONama() {
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
                        O nama
                    </Typography>
                </Grid>
                {/* START :: Section */}
                <Grid item xs={2} />
                <Grid item xs={10}>
                    <Typography sx={{ mb: "24px" }}>
                        &quot;Dođi na basket K3 - Mozzart&quot; je kreativni i inovativni 3x3 turnir koji
                        želi da unapredi sportsku scenu u Zaječaru.
                    </Typography>
                    <Typography sx={{ mb: "24px" }}>
                        Poznat i pod imenom &quot;DNB&quot; je pravo osveženje za naselje Ključ 3
                        jer do sada nije bilo sportskih događaja takvog tipa.
                    </Typography>
                    <Typography sx={{ mb: "24px" }}>
                        Svake godine okupljamo preko 160 učesnika u tri kategorije i obezbeđujemo
                        vredne novčane i robne nagrade.
                    </Typography>
                    <Box
                        sx={{
                            width: "100%",
                            height: "160px",
                            position: "relative",
                            mb: "32px",
                            "@media screen and (min-width: 991px)": { height: "400px" },
                        }}>
                        <Image
                            objectFit={isDesktop ? "contain" : "cover"}
                            src="/images/pocetna-teren-01.jpg"
                            layout="fill"
                            alt="slika"
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "160px",
                            position: "relative",
                            mb: "32px",
                            "@media screen and (min-width: 991px)": { height: "400px" },
                        }}>
                        <Image
                            objectFit={isDesktop ? "contain" : "cover"}
                            src="/images/pocetna-teren-02.jpg"
                            layout="fill"
                            alt="slika"
                        />
                    </Box>
                    <Typography sx={{ mb: "24px" }}>
                        Poslednji dan turnira zatvara tradicionalna rep žurka, gde imamo priliku da
                        se družimo i ugostimo poznate ličnosti sa nače scene, takođe trudimo se da
                        podržimo i lokalne hip hop izvodjače.
                    </Typography>
                    <Box
                        sx={{
                            width: "100%",
                            height: "160px",
                            position: "relative",
                            mb: "16px",
                            "@media screen and (min-width: 991px)": { height: "400px", mb: "32px", },
                        }}>
                        <Image
                            objectFit={isDesktop ? "contain" : "cover"}
                            src="/images/pocetna-teren-00.jpg"
                            layout="fill"
                            alt="slika"
                        />
                    </Box>
                </Grid>
                {/*   END :: Section */}
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            video: {
                                width: "100%",
                                height: "313px",
                                objectFit: "contain",
                                "@media screen and (min-width: 991px)": {
                                    height: "400px",
                                    objectFit: "contain",
                                },
                            },
                        }}>
                        <video src="/video/o-nama-ekipa.mp4" autoPlay loop muted/>
                    </Box>
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
