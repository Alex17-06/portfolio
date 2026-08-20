"use client";

import Image from "next/image";

const logos = [
  { name: "Amazon Web Services", src: "/logos/aws.png" },
  { name: "Microsoft Azure", src: "/logos/azure.png" },
  { name: "Google Cloud", src: "/logos/googlecloud.png" },
  { name: "Palo Alto Networks", src: "/logos/paloalto.png" },
  { name: "Kubernetes", src: "/logos/kubernetes.png" },
  { name: "Splunk", src: "/logos/splunk.png" },
];

function LogoTile({ name, src }: { name: string; src: string }) {
  return (
    <div className="card-flat flex items-center justify-center h-20 sm:h-24 w-44 sm:w-52 shrink-0 px-6 grayscale-[35%] hover:grayscale-0 transition-all duration-300">
      <Image
        src={src}
        alt={name}
        width={200}
        height={80}
        className="max-h-10 sm:max-h-12 w-auto object-contain"
      />
    </div>
  );
}

export default function TechMarquee() {
  // Duplicated track for a seamless infinite loop
  const track = [...logos, ...logos];

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="label mb-8 justify-center text-center w-full">
          Tools &amp; Technologies
        </p>
      </div>

      {/* Marquee — edge-faded, seamless loop */}
      <div className="marquee-mask relative overflow-hidden">
        <div className="marquee-track flex gap-4 sm:gap-5 w-max">
          {track.map((logo, i) => (
            <LogoTile key={`${logo.name}-${i}`} name={logo.name} src={logo.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
