
import Header from '../components/Header';
import RegistrationForm from '../components/registration/RegistrationForm'
import RegistrationHero from '../components/registration/RegistrationHero'
import business_video from "../assets/business_video.mp4";

function RegistrationPage() {
  return (
    <div className="bg-white">
      <Header />
      <div className="fixed">
        <video src={business_video} autoPlay muted loop />
      </div>
      <div className="absolute left-0 right-0 lg:mt-20 mt-5 rounded-10 flex flex-col justify-center items-center">
        <RegistrationHero />
        <RegistrationForm />
      </div>
    </div>
  )
}

export default RegistrationPage