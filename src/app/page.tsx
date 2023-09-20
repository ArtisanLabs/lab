import Image from 'next/image'
import CitySection from '@/components/CitySection'

export const runtime = 'edge';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Discover the potential of voice-based large language models at Artisan Labs. 
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://artisanlabs.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="https://github.com/ArtisanLabs/.github/raw/main/profile/assets/images/logo/artisanLogo_1690404109154_0.svg"
              alt="Artisan Labs Logo"
              // className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <CitySection />
      {/* Demo Sections */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left space-x-4">
        <a
          href="https://artisanlabs.io"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-black bg-opacity-20 backdrop-blur-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Artisan Carrer AI{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Artisan Career AI! is your Career Growth Coach. 
          </p>
        </a>
        <a
          href="https://artisanlabs.io"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-black bg-opacity-20 backdrop-blur-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Artisan Debate AI{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Artisan debate Coach AI! is your Debate Coach. 
          </p>
        </a>
        <a
          href="https://artisanlabs.io"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-black bg-opacity-20 backdrop-blur-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            ArtisanAI English Tutor{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            ArtisanAI English Tutor! is your English Tutor.
          </p>
        </a>
      </div>
      {/* Values Secctions */}
      <div className="table-auto">
        <div className="flex flex-row">
          <div className="w-1/2"><img className="w-full h-auto light:invert" src="https://github.com/ArtisanLabs/.github/raw/main/profile/assets/images/banners/transparent/arpagon__The_Starry_Night_Vincent_van_Gogh_black_background_dia_f94eed6c-4c0a-4d0c-926d-c223be873627.webp" alt="Creativity The Starry Night Vincent van Gogh"/></div>
          <div className="w-1/2 p-4 flex items-center justify-center">Creativity</div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 p-4 flex items-center justify-center">Team Work</div>
          <div className="w-1/2"><img className="w-full h-auto light:invert" src="https://github.com/ArtisanLabs/.github/raw/main/profile/assets/images/banners/transparent/arpagon__teamwork_diagram_outline_an_illustration_on_black_back_e9fc510a-e32a-47a2-afa8-95dce579bb6e.webp" alt="Team Work"/></div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2"><img className="w-full h-auto light:invert" src="https://github.com/ArtisanLabs/.github/raw/main/profile/assets/images/banners/transparent/arpagon__tree_090119c8-f80a-40c3-a4de-47a85b0cf8fa.webp" alt="Our Lab"/></div>
          <div className="w-1/2 p-4 flex items-center justify-center">Our Lab</div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 p-4 flex items-center justify-center">Large Language Models</div>
          <div className="w-1/2"><img className="w-full h-auto light:invert" src="https://github.com/ArtisanLabs/.github/raw/main/profile/assets/images/banners/transparent/arpagon__a_white_circle_in_a_black_background_in_the_style_of_m_202bb52a-e176-407f-89f7-486034eefb47.webp" alt="Large Language Models"/></div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2"><img className="w-full h-auto light:invert" src="https://github.com/ArtisanLabs/.github/raw/main/profile/assets/images/banners/transparent/arpagon__a_white_circle_in_a_black_background_in_the_style_of_m_8bae71ee-4bf3-4264-b4c0-4abee5490957.webp" alt="Cutting-edge Technology"/></div>
          <div className="w-1/2 p-4 flex items-center justify-center">Cutting-edge Technology</div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 p-4 flex items-center justify-center">Voice-based applications</div>
          <div className="w-1/2"><img className="w-full h-auto light:invert" src="https://github.com/ArtisanLabs/.github/raw/main/profile/assets/images/banners/transparent/arpagon__a_white_circle_in_a_black_background_in_the_style_of_m_e666ea74-835f-48af-bdd3-434c3b5ef714.webp" alt="Voice-based applications"/></div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2"><img className="w-full h-auto light:invert" src="https://github.com/ArtisanLabs/.github/raw/main/profile/assets/images/banners/transparent/arpagon__teamwork_diagram_outline_an_illustration_on_black_back_f4c0c9aa-a6f9-464c-8424-867a13971078.webp" alt="Build and collaborate"/></div>
          <div className="w-1/2 p-4 flex items-center justify-center">Build and collaborate</div>
        </div>
      </div>
    </main>
  )
}
