"use client"; // Ensures client-side rendering

export default function MortgageCalculatorWidget() {
  return (
    <div
      className="mnd-calc-widget"
      style={{
        width: "250px",
        height: "472px",
        fontSize: "12px",
        margin: "0 auto", // Centers the widget
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
          href="https://www.mortgagenewsdaily.com/mortgage-calculator"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFFFFF", textDecoration: "none" }}
        >
          Mortgage Calculator
        </a>
      </div>

      {/* Embedded Widget */}
      <iframe
        src="//widgets.mortgagenewsdaily.com/widget/f/calculator?t=simple&c=336699&tc=333333&u=&cbu=&w=248&h=422&bgc=f8f8f8&sa=true&fs=12"
        width="250"
        height="422"
        frameBorder="0"
        scrolling="no"
        style={{
          border: "solid 1px #336699",
          borderWidth: "0 1px",
          boxSizing: "border-box",
          width: "250px",
          height: "422px",
          display: "block",
        }}
        title="Mortgage Calculator Widget"
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
        <a
          href="https://www.mortgagenewsdaily.com/mortgage-rates"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#FFFFFF", textDecoration: "none" }}
        >
          Today's Mortgage Rates
        </a>
      </div>
    </div>
  );
}
