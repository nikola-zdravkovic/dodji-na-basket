import React, { useRef } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { DefaultLayout } from "@components";
import Image from "next/image";

export default function Uskoro() {
    return (
        <DefaultLayout>
            <Grid container>
                <Grid item xs={12}>
                    <Typography sx={{ mt: "56px", mb: "24px" }} variant="hero">
                        Comming soon :)
                    </Typography>
                    <Typography sx={{ mb: "24px" }}>
                        Prijava ekipa će biti dostupna od 26.07 do 04.08.
                    </Typography>
                    <Button href="/" variant="contained" color="primary">
                        Nazad na početnu
                    </Button>
                </Grid>
            </Grid>
        </DefaultLayout>
    );
}
