import Image from 'next/image'

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
      <div id="city" className="relative flex place-items-center">
        <Image
          className="opacity-100 relative drop-shadow-[0_0_0.3rem_#ffffff70] light:invert"
          src="https://raw.githubusercontent.com/ArtisanLabs/.github/main/profile/assets/images/banners/transparent/arpagon__voice_waveforms_diagram_complete_city.webp"
          alt="ArtisanLabs City"
          width={1260}
          height={630}
          priority
        />
      </div>
      {/* Demo Sections */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="https://artisanlabs.io"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
    </main>
  )
}
