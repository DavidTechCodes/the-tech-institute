import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/util";

const Hero = () => {
  return (
    <section id="home-section" className="bg-slateGray">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center">
          <div className="col-span-6 flex flex-col gap-8 ">
            <div className="flex gap-2 mx-auto lg:mx-0">
              <Icon
                icon="solar:verified-check-bold"
                className="text-success text-xl inline-block me-2"
              />
              <p className="text-success text-sm font-semibold text-center lg:text-start">
                Get 30% off on first enroll
              </p>
            </div>
            <h1 className="text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0">
              Advance your engineering skills with us.
            </h1>
            <h3 className="text-black/70 text-lg pt-5 lg:pt-0">
              Build skills with our courses and mentor from world-class
              companies.
            </h3>
            <div className="relative text-black dark:text-white flex flex-row-reverse rounded-full pt-5 lg:pt-0">
              <input
                type="Email address"
                name="q"
                className="py-4 lg:py-6 text-sm md:text-lg w-full rounded-full pl-8 focus:outline-none"
                placeholder="Enter your email address"
                autoComplete="off"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-6 pt-5 lg:pt-0">
                <button
                  type="submit"
                  className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full"
                >
                  <Image
                    src={`images/newsletter/send.svg`}
                    alt="send-icon"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between pt-10 lg:pt-4">
              <div className="flex gap-2">
                <Image
                  src={`images/banner/check-circle.svg`}
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Flexible
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={`images/banner/check-circle.svg`}
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Learning path
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src={`images/banner/check-circle.svg`}
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Community
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex justify-center">
            <Image
              src={`images/banner/mahila.png`}
              alt="nothing"
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
