import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";

export default function Refinancing() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Refinancing: Simplify Your Financial Journey
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
                Refinance Your Loan
              </h3>
              <p className="text-sm text-gray-400">
              Refinancing is often used to lower your interest rate. If rates have dropped since you last financed your home, you may want to consider refinancing. Other common reasons to refinance include paying off a balloon payment, converting an adjustable rate loan to a fixed rate loan or to extract cash equity in your home (cash out). A few reasons for cashing out include: home improvement, an education fund, and consolidating debt. 
              </p>
            </article>
            {/* Card 2 */}
            <article>
              <h3 className="mb-2 text-xl font-medium text-gray-200">
                Benefits of Refinancing
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-400">
                <li>Reduce Your Interest Rate</li>
                <li>Cash Out Equity for Home Improvements</li>
                <li>Consolidate Debt</li>
                <li>Lower Monthly Payments</li>
              </ul>
            </article>
            {/* Card 3 */}
            <article>
              
              <h3 className="mb-2 text-xl font-medium text-gray-200">
                How We Can Help
              </h3>
              <p className="text-sm text-gray-400">
              At First American Financial Services Inc. we are dedicated to finding the loan that fits your individual needs .


Another way to convert equity in your home to cash is a "home equity" loan. A "home equity" loan is an alternative to refinancing if your home loan has a very low rate compared to current interest rates or if you have a prepayment penalty on your loan.
              </p>
            </article>
            {/* Full Width Card */}
            <article className="col-span-2 lg:col-span-3">
            <h3 className="mb-2 text-xl font-medium text-gray-200">
                To Refinance, You Will Need:
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-400">
              <li>Current Appraisal and Analysis</li>
                <li>Verification of Assets and Income</li>
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
