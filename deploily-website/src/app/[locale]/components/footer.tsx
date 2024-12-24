"use client";
import Image from "next/image";
import {Box, Container, Grid, Link, Stack, Typography, useTheme} from "@mui/material";
import {socialMedias} from "./utils/about";

function Copyright() {
  return (
    <Typography variant="body2">
      {"Copyright © "}
      <Link color="inherit" href={process.env.WEB_SITE_URL}>
        Deploily
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  const theme = useTheme();

  return (
    <>
      <Grid
        id="footer"
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        margin={"0px"}
        sx={{
          width: "100%",
          background: theme.palette.primary.dark,
          ...(theme.palette.mode === "dark" && {
            background: `${theme.palette["grey"][1000]}`,
          }),
        }}
      >
        <Stack direction="row" spacing={2} sx={{alignItems: "flex-start"}}>
          {socialMedias.map((socialM, index) => (
            <Grid key={index} item>
              <a
                href={socialM.lien}
                target="_blank"
                rel="noopener noreferrer"
                style={{margin: "2px", paddingBottom: "0px", color: "white"}}
              >
                <Box
                  key={index}
                  sx={{
                    py: 1,
                    display: "flex",
                    gap: 1.5,
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <Image src={socialM.image} width={30} height={30} alt={socialM.alt} />
                  <Typography variant="subtitle2" component={"span"}>
                    {socialM.alt}
                  </Typography>
                </Box>
              </a>
            </Grid>
          ))}
        </Stack>
      </Grid>
      <Container maxWidth={false} style={{background: theme.palette.primary.main}}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          paddingY={"10px"}
        >
          <Copyright />
        </Grid>
      </Container>
    </>
  );
}
