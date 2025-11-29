import Link from "next/link";
import { defineQuery } from "next-sanity";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import HeroContent from "./HeroContent";


const HERO_QUERY = defineQuery(`*[_id == "singleton-profile"][0]{
  firstName,
  lastName,
  headline,
  headlineStaticText,
  headlineAnimatedWords,
  headlineAnimationDuration,
  shortBio,
  email,
  phone,
  location,
  availability,
  socialLinks,
  yearsOfExperience,
  profileImage
}`);

const  HeroSection = async () => {
  const { data: profile } = await sanityFetch({ query: HERO_QUERY });

  if (!profile) {
    return null;
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Background Ripple Effect */}
      <BackgroundRippleEffect rows={8} cols={27} cellSize={56} />
      <HeroContent {...profile} />
    </section>
  );
}

export default HeroSection;