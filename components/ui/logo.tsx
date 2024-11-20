import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="FAFSI">
      <img
        src="/images/fafsi-logo.png"
        alt="FAFSI Logo"
        className="h-12 w-auto relative left-0" // Adjust height and width as needed
      />
    </Link>
  );
}
