import AppAppBar from "./components/appBar";
import ScrollToTopButton from "./components/scrollTopButton";
import HeroContainer from "./containers/heroContainer/heroContainer";

// import ApiServiceContainer from "./containers/apiServicesContainer/apiServicesContainer";
// import DeployCodeContainer from "./containers/deployCodeContainer/deployCodeContainer";
// import ManagedInfrastructureContainer from "./containers/managedInfrastructureContainer/managedInfrastructureContainer";
import Footer from "./components/footer";
import ServiceListContainer from "./containers/ServicesContainer/servicesList";
import WhyChooseDeploily from "./containers/why-choose-deploily/why-choose-deploily";

export default function LandingPage() {
  return (
    <main>
      <AppAppBar />
      <ScrollToTopButton></ScrollToTopButton>
      <HeroContainer />
      <ServiceListContainer />
      <WhyChooseDeploily />
      {/* <ApiServiceContainer /> 
       <DeployCodeContainer />
      <ManagedInfrastructureContainer /> */}
      <Footer />
    </main>
  );
}
