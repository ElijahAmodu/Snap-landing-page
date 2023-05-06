import MobileHeroImg from "../intro-section-with-dropdown-navigation-main/images/image-hero-mobile.png";
import DesktopHeroImg from "../intro-section-with-dropdown-navigation-main/images/image-hero-desktop.png";
import Footer from "./footer"


function Body() {
  return (
    <div className="bodyClass">
      <article className="bodyText">
        <div className="LandingArticleBody">
            <h1>Make remote work</h1>
            <p>
            Get your team in sync, no matter your
             location. Streamline processes,create
              team rituals, and watch productivity 
              soar.
            </p>  
            <button>learn more</button>
            <Footer /> 
        </div>
        
        <picture className="picture">
            <source media="(min-width: 768px)" srcSet={DesktopHeroImg} />
            <source media="(max-width: 768px)" srcSet={MobileHeroImg} />
            <img src={DesktopHeroImg} alt="Image" />
         </picture>
      </article>

    </div>
  );
}

export default Body;

