import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";

export default function About() {
  return (
    <section id="about"
    className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              About Us
            </h2>
          </div>
          {/* Planet Animation */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex animate-spin-slow rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Grid Section */}
          <div className="grid gap-8 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:40vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            {/* Card 1 */}
            <article>
              <h3 className="mb-2 text-xl font-medium text-gray-200">
                Our Philosophy
              </h3>
              <p className="text-sm text-gray-400">
                At First American Financial Services Inc., we prioritize
                treating each customer as an individual, not a number. Our
                common-sense approach ensures you get the best loan tailored to
                your unique needs.
              </p>
            </article>
            {/* Card 2 */}
            <article>
              <h3 className="mb-2 text-xl font-medium text-gray-200">
                Our Services
              </h3>
              <p className="text-sm text-gray-400">
                We offer a range of loan programs, including 30-year mortgages,
                adjustable rate loans, home equity lines, VA loans, and
                commercial options. Whether your needs are conventional or
                unique, we have a solution for you.
              </p>
            </article>
            {/* Card 3 */}
            <article>
              <h3 className="mb-2 text-xl font-medium text-gray-200">
                Commitment to Excellence
              </h3>
              <p className="text-sm text-gray-400">
                With access to a variety of "A" rated lenders and private
                hardship lenders, we ensure competitive rates and customized
                solutions. Let us help you navigate your financial journey with
                ease.
              </p>
            </article>
            {/* Full Width Card */}
            <article className="col-span-2 lg:col-span-3">
              <h3 className="mb-2 text-xl font-medium text-gray-200">
                Meet Our Founder
              </h3>
              <p className="text-sm text-gray-400">
                Farid Premjee, the founder of FAFSI, has years of experience in
                financial services. With a passion for helping clients achieve
                their dreams, his leadership ensures FAFSI remains a trusted
                name in the industry.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
