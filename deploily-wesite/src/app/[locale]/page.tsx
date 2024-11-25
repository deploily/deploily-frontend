import { Container, CssBaseline, } from "@mui/material";
import AppAppBar from "./components/appBar";
import ScrollToTopButton from "./components/scrollTopButton";
import HeroContainer from "./containers/heroContainer/heroContainer";

import { ThemeProvider } from "../../components/ThemeRegistry/ThemeRegistry";


export default function LandingPage() {

  return (
    <main>
      <CssBaseline />
      <AppAppBar />
      <ScrollToTopButton></ScrollToTopButton>
      <HeroContainer />
      <Container maxWidth={false} style={{ minHeight: "100vh", padding: "0px", maxWidth: "1280px" }} >
      </Container>
    </main>

  );
}
