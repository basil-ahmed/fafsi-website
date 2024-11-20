import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import MainImage from "@/public/images/main_image.jpg"; // Import your main image

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Main image */}
          <div
            className="mx-auto max-w-xl mb-8"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            <Image
              className="rounded-lg"
              src={MainImage}
              alt="Main Visual"
              layout="responsive"
              width={400}
              height={300}
            />
          </div>
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              First American <br className="max-lg:hidden" />
              Financial Services Inc
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                Your Loan officer for life
                Friendly Service, Expert Advice, Fast Closing and Great Rates
              </p>
              {/* Buttons */}
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay={600}
              >
                <a
                  className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="/contact"
                >
                  <span className="relative inline-flex items-center">
                    Contact Us{" "}
                    <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
                <a
                  className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                  href="/prequalify"
                >
                  Prequalify
                </a>
              </div>
            </div>
          </div>
          {/* Customized Info Block */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={700}
          >
            <div className="relative rounded-2xl bg-gray-100 px-6 py-6 shadow-lg">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Farid Premjee
                </h2>
                <p className="text-gray-600">
                  Mortgage Broker <span> | </span> Loan Specialist <span> | </span> NMLS #1015296
                </p>
              </div>
              <div className="text-gray-700">
              <p className="mb-4 text-center">
                Click <strong>Prequalify</strong> to get started with a quick form, or use the <strong>Contact Us</strong> option, and we’ll get back to you shortly.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
