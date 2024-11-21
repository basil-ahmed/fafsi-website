import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";

export default function Purchase() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Purchase: Your Path to Homeownership
            </h2>
          </div>
          {/* Planet */}
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
          {/* Grid */}
          <div className="grid gap-8 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:40vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            {/* Card 1 */}
            <article>
              <h3 className="mb-2 text-xl font-medium text-gray-200">
                Purchase Your Dream Home
              </h3>
              <p className="text-sm text-gray-400">
              If you're like most people, purchasing a home is probably one of the biggest investments you'll ever make in your lifetime. If you're considering buying a home, you're likely aware of the complexity of the endeavor. Because of the numerous factors to consider when purchasing a home, it's important to prepare as best you can.
              </p>
            </article>
            {/* Card 2 */}
            <article>
              
              <h3 className="mb-2 text-xl font-medium text-gray-200">
                Why Choose Us
              </h3>
              <p className="text-sm text-gray-400">
                At First American Financial Services Inc. our mission is to provide personalized
                assistance throughout your home-buying journey. From securing
                the best rates to preparing the necessary documents, we’re here
                to make the process smooth and transparent.
              </p>
            </article>
            {/* Card 3 */}
            <article>
              <h3 className="mb-2 text-xl font-medium text-gray-200">
                How We Can Help
              </h3>
              <p className="text-sm text-gray-400">
                Our team will simplify the complexities of purchasing a home.
                We’ll work closely with you to understand your financial
                situation and ensure you have the right loan tailored to your
                needs.
              </p>
            </article>
            {/* Full Width Card */}
            <article className="col-span-2 lg:col-span-3">
            <h3 className="mb-2 text-xl font-medium text-gray-200">
                Documents You Will Need
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-400">
              <li>Social Security numbers for both you and any co-borrowers</li>
                <li>
                  Copies of checking and savings accounts statements for the past
                  two months
                </li>
                <li>
                  Evidence of any other assets such as bonds, stocks, or money
                  saved in retirement programs (i.e. 401k or 403b program)
                </li>
                <li>Recent paycheck stubs</li>
                <li>
                  W-2 withholding forms, or income tax returns for the past two
                  years to verify your income and proof of employment
                </li>
                <li>
                  The name and address of someone who can verify your employment
                </li>
                <li>Residence history for the past two years</li>
                <li>Sales contract for the purchase of a new home</li>
                <li>
                  Homeowner's association information with contact information if
                  property is a condo or part of a homeowner's association
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
