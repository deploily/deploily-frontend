import { Container, CssBaseline, } from "@mui/material";
import AppAppBar from "./components/appBar";
import ScrollToTopButton from "./components/scrollTopButton";
import HeroContainer from "./containers/heroContainer/heroContainer";

import { ThemeProvider } from "../../components/ThemeRegistry/ThemeRegistry";
import ApiServiceContainer from "./containers/apiServicesContainer/apiServicesContainer";
import DeployCodeContainer from "./containers/deployCodeContainer/deployCodeContainer";
import ManagedInfrastructureContainer from "./containers/managedInfrastructureContainer/managedInfrastructureContainer";
import Footer from "./components/footer";


export default function LandingPage() {

  return (
    <main>
      <CssBaseline />
      <AppAppBar />
      <ScrollToTopButton></ScrollToTopButton>
      <HeroContainer />
      <Container maxWidth={false} style={{ minHeight: "100vh", padding: "0px", maxWidth: "1280px" }} >
        <ApiServiceContainer />
        <DeployCodeContainer />
        <ManagedInfrastructureContainer />
      </Container>
      <Footer />
    </main>

  );
}
