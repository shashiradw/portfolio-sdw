import Link from 'next/link'
import React from 'react'
import { HERO_QUERYResult } from '../../../../sanity.types'
import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import { urlFor } from '@/sanity/lib/image';
import ProfileImage from '@/components/ProfileImage';

const HeroContent = (profile?: HERO_QUERYResult | null) => {
  if (!profile) return null;
  
  return (
    <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="@container">
          <div className="grid grid-cols-1 @3xl:grid-cols-2 gap-8 @lg:gap-12 items-center">
            {/* Text Content */}
            <div className="@container/hero space-y-4 @md/hero:space-y-6">
              <h1 className="text-4xl @md/hero:text-5xl @lg/hero:text-7xl font-bold tracking-tight">
                {profile.firstName}{" "}
                <span className="text-primary">{profile.lastName}</span>
              </h1>

              <div>
                {/* <span className="text-primary mx-5 text-4xl">{'profile.headlineStaticText'}</span> */}
                { profile.headlineStaticText &&
                  profile.headlineAnimatedWords &&
                  profile.headlineAnimatedWords.length > 0 ? (
                    <ContainerTextFlip
                      text={profile.headlineStaticText}
                      words={profile.headlineAnimatedWords}
                      interval={profile.headlineAnimationDuration || 3000}
                      className="text-xl @md/hero:text-2xl @lg/hero:text-3xl text-muted-foreground font-medium"
                    />
                  ) : (
                    <p className="text-xl @md/hero:text-2xl @lg/hero:text-3xl text-muted-foreground font-medium">
                      {profile.headline}
                    </p>
                  )}
              </div>

              <p className="text-base @md/hero:text-lg text-muted-foreground leading-relaxed">
                {profile.shortBio}
              </p>

              {profile.socialLinks && (
                <div className="flex flex-wrap gap-3 @md/hero:gap-4 pt-4">
                  {profile.socialLinks.github && (
                    <Link
                      href={profile.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 @md/hero:px-6 @md/hero:py-3 rounded-lg border hover:bg-accent transition-colors text-sm @md/hero:text-base"
                    >
                      GitHub
                    </Link>
                  )}
                  {profile.socialLinks.linkedin && (
                    <Link
                      href={profile.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 @md/hero:px-6 @md/hero:py-3 rounded-lg border hover:bg-accent transition-colors text-sm @md/hero:text-base"
                    >
                      LinkedIn
                    </Link>
                  )}
                  {profile.socialLinks.twitter && (
                    <Link
                      href={profile.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 @md/hero:px-6 @md/hero:py-3 rounded-lg border hover:bg-accent transition-colors text-sm @md/hero:text-base"
                    >
                      Twitter
                    </Link>
                  )}
                  {profile.socialLinks.website && (
                    <Link
                      href={profile.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 @md/hero:px-6 @md/hero:py-3 rounded-lg border hover:bg-accent transition-colors text-sm @md/hero:text-base"
                    >
                      Website
                    </Link>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-4 @md/hero:gap-6 pt-4 text-xs @md/hero:text-sm text-muted-foreground">
                {profile.email && (
                  <div className="flex items-center gap-2">
                    <span>📧</span>
                    <span className="truncate">{profile.email}</span>
                  </div>
                )}
                {profile.location && (
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{profile.location}</span>
                  </div>
                )}
                {profile.availability && (
                  <div className="flex items-center gap-2">
                    <span>✅</span>
                    <span>{profile.availability}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Profile Image */}
            {profile.profileImage && (
              // <></>
              <ProfileImage
                imageUrl={urlFor(profile.profileImage)
                  .width(600)
                  .height(600)
                  .url()}
                firstName={profile.firstName || ""}
                lastName={profile.lastName || ""}
              />
            )}
          </div>
        </div>
      </div>
  )
}

export default HeroContent
