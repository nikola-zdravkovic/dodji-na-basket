import React, {useRef} from "react"
import { Box, Typography, Grid, Button } from "@mui/material"
import { DefaultLayout } from "@components"
import Image from "next/image";

export default function FourOhFour() {
  
  return <DefaultLayout>
      <Grid container>
      <Grid item xs={12}>
        <Typography sx={{mt: "56px", mb: "24px"}} variant="hero">404 / Greška :(</Typography>
        <Typography sx={{mb: "24px"}}>Stranica koju upravo pokušavaš da otvoriš ne postoji.</Typography>
        <Button href="/" variant="contained" color="primary">Nazad na početnu</Button>
      </Grid>

    </Grid>
  </DefaultLayout>
}
