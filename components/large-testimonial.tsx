import Image from "next/image";
import TestimonialImg from "@/public/images/main_image.jpg";

export default function About() {
  return (
    <section>
      
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={TestimonialImg}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900 whitespace-pre-line">
              “At FAFSI, we treat each customer as an individual, not a number.{" "}<em className="italic text-gray-500">We don't place you into a loan profile formula created by the banking industry</em>. 
              We use "common sense" and will help you obtain the best loan possible. We represent a wide range of "A" rated lenders with first quality rates to private "hardship" lenders. 
              <br className="max-lg:hidden" /><br className="max-lg:hidden" />We work with multiple lenders. This allows us to get you the best rates on all types of loan programs including: {" "}<em className="italic text-gray-500">30yr mortgage, 20yr mortgage, 15yr mortgage, 10yr mortgage, 1yr ARMS, 3yr ARMS, 5yr ARMS, Conventional, Jumbo, Home Equity Lines, VA and Commercial</em>. Whether your situation calls for Full Documents, No Documents, Non-Owner Occupied (Investor) or Multi-Family, we'll fit your needs!{" "}
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Farid Premjee</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a className="text-blue-500" href="#0">
                Founder at FAFSI
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
