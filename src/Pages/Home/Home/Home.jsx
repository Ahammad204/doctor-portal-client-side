import Appointment from "../appointment/Appointment";
import Banner from "../Banner/Banner";
import ContactCard from "../ContactCard/ContactCard";
import ServiceCard from "../ServiceCard/ServiceCard";
import Terms from "../Terms/Terms";

const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <ContactCard></ContactCard>
    <ServiceCard></ServiceCard>
    <Terms></Terms>
    <Appointment></Appointment>

    </div>
  );
};

export default Home;
