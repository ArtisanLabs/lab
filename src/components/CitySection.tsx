import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const CitySection = () => {
  return (
    <section>
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
        <div className="container px-4 md:px-6">
            <div className="grid items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
                
                <div className="w-full max-w-sm space-y-2 mx-auto">
                <form className="flex space-x-2">
                    <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                    />
                    <Button className="" type="submit">
                    Join Now
                    </Button>
                </form>
                <p className="text-xs">
                    Enter your email to get exclusive updates and early access to our groundbreaking technology.
                    <Link className="underline underline-offset-2 text-white" href="/#terms">
                    Terms & Conditions
                    </Link>
                </p>
                </div>
            </div>
            </div>
      </div>
    </section>
  )
}

export default CitySection