
import type React from 'react';
import Image from 'next/image';
import { PixelatedCanvas } from './ui/pixelated-canvas';

type ProfileImageProps = {
  imageUrl: string; 
  firstName: string;
  lastName: string;
};

const ProfileImage: React.FC<ProfileImageProps> = ({ imageUrl, firstName, lastName }) => {
    return (
    //    <PixelatedCanvas
    //     src={imageUrl}
    //     width={600}
    //     height={400}
    //     cellSize={4}
    //     dotScale={0.9}
    //     backgroundColor='transparent'
    //     shape="square"
    //     dropoutStrength={0.1}
    //     interactive
    //     distortionStrength={0.1}
    //     distortionRadius={200}
    //     distortionMode="repel"
    //     followSpeed={0.2}
    //     jitterStrength={4}
    //     jitterSpeed={1}
    //     sampleAverage
    //     className="rounded-xl"
    //   />


      <Image
        src={imageUrl}
        alt={`${firstName} ${lastName}`}
         className="
                   inset-0 -z-10 object-cover
                    opacity-80 scale-105 transition-all duration-700 ease-out
                    group-hover:opacity-60
                    group-hover:scale-110
                "
        // className="object-cover transition-transform duration-300 group-hover:scale-105g z-10"
        width={350}
        height={350}
      />
    );
}

export default ProfileImage;

