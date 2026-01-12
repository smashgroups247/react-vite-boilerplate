import backgroundImage from "../../assets/travels1.webp";
import backgroundImageMedium from "../../assets/travels2.webp";
import backgroundImageSmall from "../../assets/travels3.webp";

// import { LazyLoadImage } from "react-lazy-load-image-component";
import Hero from "../../components/HeroContents/Hero";
import Navbar from "../../layouts/Navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";


const HomePage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Boilerplate | Home</title>
          <meta
            name="description"
            content="your description text"
          />
          <meta
            name="keywords"
            content=""
          />
          <meta property="og:title" content="boilerplate | Home" />
          <meta
            property="og:description"
            content="Explore travel packages with Smash Travels."
          />
          <meta property="og:url" content="https://www.yourURL.com" />
          <meta
            name="twitter:title"
            content="your description text"
          />
          <meta
            name="twitter:description"
            content=" "
          />
          <meta
            name="twitter:image"
            content="https://www.yourURL.com/assets/logos.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://www.yourURL.com/" />
        </Helmet>

        {/* Hero Section */}
        <div className="relative w-full  md:max-h-[806px]">
          <img
            src={backgroundImage}
            srcSet={`${backgroundImageSmall} 720w, ${backgroundImageMedium} 1440w, ${backgroundImage} 2880w`}
            sizes="(min-width: 2880px) 2880px, 100vw"
            alt=""
            className="absolute object-fill object-center top-[0px] w-full h-[450px] md:h-[580px] lg:h-[550px] xl:h-[630px] object-fit inset-0"
            loading="eager"
          />
          <Navbar />
          <Hero />
        </div>
      </HelmetProvider>
    </>
  );
};

export default HomePage;
