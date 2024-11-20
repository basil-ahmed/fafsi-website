"use client"; // Ensures client-side rendering

export default function MortgageRatesWidget() {
  return (
    <div
      className="mnd-rates-widget"
      style={{
        width: "500px",
        height: "340px",
        fontSize: "12px",
        margin: "0 auto", // Center the widget
      }}
    >
      {/* Widget Header */}
      <div
        className="w-header"
        style={{
          textAlign: "center",
          padding: "4px 0",
          backgroundColor: "#336699",
          color: "#FFFFFF",
        }}
      >
        <a
          href="https://www.mortgagenewsdaily.com/mortgage-rates/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFFFFF", textDecoration: "none" }}
        >
          Current Mortgage Rates
        </a>
      </div>

      {/* Embedded Widget */}
      <iframe
        src="//widgets.mortgagenewsdaily.com/widget/f/rates?t=large&sn=true&c=336699&u=&cbu=&w=498&h=290"
        width="500"
        height="290"
        frameBorder="0"
        scrolling="no"
        style={{
          border: "solid 1px #336699",
          borderWidth: "0 1px",
          boxSizing: "border-box",
          width: "500px",
          height: "290px",
          display: "block",
        }}
        title="Mortgage Rates Widget"
      ></iframe>

      {/* Widget Footer */}
      <div
        className="w-footer"
        style={{
          textAlign: "center",
          padding: "4px 0",
          backgroundColor: "#336699",
          color: "#FFFFFF",
        }}
      >
        View More{" "}
        <a
          href="https://www.mortgagenewsdaily.com/mortgage-rates"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFFFFF", textDecoration: "none" }}
        >
          Interest Rates
        </a>
      </div>
    </div>
  );
}
