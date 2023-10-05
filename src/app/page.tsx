import Image from 'next/image'
import CitySection from '@/components/CitySection'
import DemoSection from '@/components/DemoSection'
import ValuesSection from '@/components/ValuesSecction';

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
      <DemoSection />
      <ValuesSection />
    </main>
  )
}
