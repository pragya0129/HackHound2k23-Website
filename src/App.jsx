import "./App.css";
import SocialButton from "./Components/SocialButton";
import SponsorCard from "./Components/SponsorCard";
import Countdown from "./Components/Countdown";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import Gallery from "./Pages/Gallery";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import RegistrationCounter from "./Components/RegistrationCounter";
import PrizeCounter from "./Components/PrizeCounter";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); 
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setRendering(false);
  //   }, 2500); 
  // }, []);
  return (
    <div className="App">
      {/* <div className="navigation">
        <nav>
          <ul>
            <li>
              <a onClick={() => scrollToSection("home")}>Home</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("gallery")}>Gallery</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("about")}>About</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("contact")}>Contact</a>
            </li>
          </ul>
        </nav>
      </div> */}

<div className="navigation">
      <ul class="nav-links">
    <li><a onClick={() => scrollToSection("home")}>Home</a></li>
    <li class="center"><a onClick={() => scrollToSection("gallery")}>Gallery</a></li>
    <li class="upward"><a onClick={() => scrollToSection("about")}>About</a></li>
    <li class="forward"><a onClick={() => scrollToSection("contact")}>Contact</a></li>
  </ul>
  </div>
      <div className="container">
        <div className="top" id="home">
          <h1>
            <span className="heading">HackHound 2.0</span>
            <br></br>
            <div className="date">5ᵗʰ - 6ᵗʰ April</div>
            <br></br>
            <div className="text">
              HackHound is a 24-hour in-person hackathon that seeks to provide
              an opportunity for ardent members of the hacker community to
              showcase the best of their talents and encourage tech culture to
              the new and old.
              <br></br>
              <br></br>
            </div>
          </h1>
          <div
            className="apply-button"
            data-hackathon-slug="hackhound-2"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>

          {/* <img className="animated-img" src="/src/assets/code.png"></img>
        <img className="animated-img2" src="/src/assets/code.png"></img>
        <img className="animated-img3" src="/src/assets/code.png"></img>
        <img
          className="animated-img4"
          src="/src/assets/Hackhound logo.jpeg"
        ></img> */}

          <p className="animtext">
            Get ready to code, collaborate, and innovate!
            <br></br>
            Starting in...
          </p>
          <Countdown />

          {/* <section className="registration">
            <h2>Registrations Opening Soon!</h2>
          </section> */}
        </div>

        <Footer />
        <br></br>
        <h2>Sponsors</h2>
        <div className="cards">
          <SponsorCard image="Images/_Colored.png" alt="DEVFOLIO LOGO" />
          <SponsorCard image="Images/Colored.png" alt="POLYGON LOGO" />
          <SponsorCard image="Images/Untitled.png" alt="ETHINDIA LOGO" />
        </div>
        <br></br>
        <hr></hr>
        <div id="gallery">
          <h2>HackHound 2k23 Flashback</h2>
          <RegistrationCounter />
          <PrizeCounter />
          <h4>Recalling Moments of Inspiration</h4>
          <Gallery />
        </div>

        {/* <section className="register-btn">
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register Now
          </a>
        </section> */}
        <br></br>
        <h2>Past Sponsors</h2>
        <div className="cards">
          <SponsorCard image="Images/Mlh-logo-color.svg.png" />
          <SponsorCard image="Images//devfolio.png" />
          <SponsorCard image="Images//Polygon_blockchain_logo.png" />
          <SponsorCard image="Images//filecoinio-ar21.png" />
          <SponsorCard image="Images//solana-sol9611.jpg" />
          <SponsorCard image="Images//replit.png" />
          <SponsorCard image="Images//interview-cake.jpg" />
          <SponsorCard image="Images//axure2644.jpg" />
        </div>
        <div className="PastJudges">
        <h2>Past Judges</h2>
        <div className="cards">
          <Card image="public\Images\Pawan Kumar.jpg" title="Pawan Kumar" description="Head of Engineering - Frontier || Founder - Codepur"/>
          <Card image="public\Images\Shubham Jain.jpg" title="Shubham Jain" description="Flutter Engineer at Frontier"/>
          <Card image="public\Images\Pranav Malik.jpg" title="Pranav Malik" description="SDE-2 at Microsoft || Ex - Oracle, Paypal"/>
          <Card image="public\Images\Ramit Swawhney.jpg" title="Ramit Sawhney" description="Engineer Manager at Tower Research"/>
        </div>

        <h2>Past Mentors</h2>
        <div className="cards">
          <Card image="public\Images\Pooja Gera.jpg" title="Pooja Gera" description="SWE'23@PoloAltoNetworks || SWE Intern'22 Microsoft"/>
          {/* <Card image="public\Images\Arijit Roy2.jpg" title="Arijit Roy" description="Backend & ML @Docsumo || 6x Hackathon Winner"/> */}
          <Card image="public\Images\Srishti Gureja.jpg" title="Srishti Gureja" description="NLP+Differential Privacy @Translated || Ex: AI fellow at Pi school"/>
          {/* <Card image="public\Images\Divyansh Gandhi.jpg" title="Divyansh Gandhi" description="Founder of Stimuli Technologies || Flutter Lead at LikeMinds"/> */}
          <Card image="public\Images\Aastha.jpg" title="Aastha" description="Data Engineer @Fractal.ai"/>
          <Card image="public\Images\Ishika Kesarwani.jpg" title="Ishika Kesarwani" description="Community Manager at Altogics || Github Campus Expert"/>
        </div>
        </div>

        
        <br></br>
        <h2>Club Coordinator</h2>
        <div className="cards">
          <Card image="Images//user (1).png" title="Dr. Oshin Sharma" />
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <h2>Got a Query??? Connect with us!!</h2>

        <SocialButton
          imageUrl="Images/instagram (1).png"
          link="https://www.instagram.com/hack.hound/"
        />
        <SocialButton
          imageUrl="Images/linkedin.png"
          link="https://www.linkedin.com/company/hackhound/?originalSubdomain=in"
        />
        <SocialButton
          imageUrl="Images/twitter (2).png"
          link="https://twitter.com/hackhound2k24"
        />
        <SocialButton
          imageUrl="Images/gmail.png"
          link="mailto:inbox.hackhound@gmail.com"
        />
        <SocialButton
          imageUrl="Images/discord.png"
          link="https://discord.gg/c8rGTQcJ"
        />
      </div>
    </div>
  );
}

export default App;
