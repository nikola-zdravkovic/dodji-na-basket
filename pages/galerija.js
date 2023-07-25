import React, {useRef} from "react"
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material"
import { DefaultLayout } from "@components"
import Image from "next/image";

export default function Galerija() {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  


  return <DefaultLayout>
      <Grid container>
      {/* START :: Fond */}
      <Grid item xs={12}>
        <Typography sx={{mt: "56px", mb: "24px"}} textAlign={isDesktop ? "center" : "start"} textTransform="uppercase" variant="h1" color="#EC2027">Galerija</Typography>
      </Grid>
          
      <Grid item xs={12}>
        <Box sx={{width: "100%", height: "200px", position: "relative", mb: "32px", "@media screen and (min-width: 991px)": {height: "400px"}}}>
          <Image objectFit={isDesktop ? "contain" : "cover"} src="/images/galerija/galerija-teren-vol6.jpg" layout="fill" alt="slika" />
        </Box>
        <Box sx={{width: "100%", height: "200px", position: "relative", mb: "32px", "@media screen and (min-width: 991px)": {height: "400px"}}}>
          <Image objectFit={isDesktop ? "contain" : "cover"} src="/images/galerija/galerija-bakljada-vol1.jpg" layout="fill" alt="slika" />
        </Box>
        <Box sx={{width: "100%", height: "200px", position: "relative", mb: "32px", "@media screen and (min-width: 991px)": {height: "400px"}}}>
          <Image objectFit={isDesktop ? "contain" : "cover"} src="/images/galerija/galerija-grafit-vol6.jpg" layout="fill" alt="slika" />
        </Box>
        <Box sx={{width: "100%", height: "200px", position: "relative", mb: "32px", "@media screen and (min-width: 991px)": {height: "400px"}}}>
          <Image objectFit={isDesktop ? "contain" : "cover"} src="/images/galerija/galerija-bakljada-vol5.jpg" layout="fill" alt="slika" />
        </Box>
        <Box sx={{width: "100%", height: "200px", position: "relative", mb: "32px", "@media screen and (min-width: 991px)": {height: "400px"}}}>
          <Image objectFit={isDesktop ? "contain" : "cover"} src="/images/galerija/galerija-nastup-vol6.jpg" layout="fill" alt="slika" />
        </Box>
        <Box sx={{width: "100%", height: "200px", position: "relative", mb: "32px", "@media screen and (min-width: 991px)": {height: "400px"}}}>
          <Image objectFit={isDesktop ? "contain" : "cover"} src="/images/galerija/galerija-pehari-vol6.jpg" layout="fill" alt="slika" />
        </Box>
        <Box sx={{width: "100%", height: "200px", position: "relative", mb: "80px", "@media screen and (min-width: 991px)": {height: "400px"}}}>
          <Image objectFit={isDesktop ? "contain" : "cover"} src="/images/galerija/galerija-nastup-vol5.jpg" layout="fill" alt="slika" />
        </Box>
        <Box sx={{width: "100%", height: "200px", position: "relative", mb: "80px", "@media screen and (min-width: 991px)": {height: "400px"}}}>
          <Image objectFit={isDesktop ? "contain" : "cover"} src="/images/galerija/galerija-teren02-vol1.jpg" layout="fill" alt="slika" />
        </Box>
        <Box sx={{width: "100%", height: "200px", position: "relative", mb: "80px", "@media screen and (min-width: 991px)": {height: "400px"}}}>
          <Image objectFit={isDesktop ? "contain" : "cover"} src="/images/galerija/galerija-nastup-vol4.jpg" layout="fill" alt="slika" />
        </Box>
        <Box sx={{width: "100%", height: "200px", position: "relative", mb: "80px", "@media screen and (min-width: 991px)": {height: "400px"}}}>
          <Image objectFit={isDesktop ? "contain" : "cover"} src="/images/galerija/galerija-teren-vol1.jpg" layout="fill" alt="slika" />
        </Box>
      </Grid>
    
      {/* START :: CTA */}
      <Grid item xs={12}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", width: "100%", height: "200px", background: "url(/images/hoop.png)", backgroundSize: "cover", backgroundPosition: "center", "@media screen and (min-width: 991px)": {height: "400px"}}}>
          <Typography variant="h2" sx={{mb: "24px", "@media screen and (min-width: 991px)": { fontSize: "32px"}}}>ZELIŠ DA PRIJAVIŠ<br/>SVOJU EKIPU?</Typography>
          <Button href="/prijava"   variant="contained" color="primary">PRIJAVA</Button>
        </Box>
      </Grid>
      {/*   END :: CTA */}
    </Grid>
  </DefaultLayout>
}
