import AboutSection from "./sections/AboutSection/AboutSection"
import ContactSection from "./sections/ContactSection/ContactSection"
import EducationSection from "./sections/EducationSection/EducationSection"
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection"
import FooterSection from "./sections/FooterSection/FooterSection"
import HeroSection from "./sections/HeroSection/HeroSection"
import SkillSection from "./sections/SkillSection/SkillSection"



async function PortfolioContent() {
  return (
     <>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default PortfolioContent
