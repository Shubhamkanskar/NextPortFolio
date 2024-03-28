import Education from "./components/Education"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Skills from "./components/Skills"

function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden ">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl p-5 mx-auto  ">
          <Navbar className={""} />
          <HeroSection />
          <Education />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-w-full"></div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Project />
        <Footer />
      </div>
    </div>
  )
}

export default page
