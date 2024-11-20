"use client"; // Ensures client-side rendering

export default function MortgageNewsWidget() {
  return (
    <div
      className="mnd-news-widget"
      style={{
        width: "640px",
        height: "420px",
        fontSize: "14px",
        margin: "0 auto", // Center the widget
      }}
    >
      {/* Widget Header */}
      <div
        className="w-header"
        style={{
          textAlign: "center",
          padding: "4px 0",
          backgroundColor: "#efefef",
          color: "#000000",
        }}
      >
        Mortgage and{" "}
        <a
          href="https://www.mortgagenewsdaily.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000000", textDecoration: "none" }}
        >
          Real Estate News
        </a>
      </div>

      {/* Embedded Widget */}
      <iframe
        src="//widgets.mortgagenewsdaily.com/widget/f/news?t=list&ss=true&c=efefef&u=&cbu=&w=638&h=370&fs=14&nh=4&gs=5&bgc=ffffff&hlc=336699&sc=555555"
        width="640"
        height="370"
        frameBorder="0"
        scrolling="no"
        style={{
          border: "solid 1px #efefef",
          borderWidth: "0 1px",
          boxSizing: "border-box",
          width: "640px",
          height: "370px",
          display: "block",
        }}
        title="Mortgage News Widget"
      ></iframe>

      {/* Widget Footer */}
      <div
        className="w-footer"
        style={{
          textAlign: "center",
          padding: "4px 0",
          backgroundColor: "#efefef",
          color: "#000000",
        }}
      >
        View Current{" "}
        <a
          href="https://www.mortgagenewsdaily.com/mortgage-rates"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000000", textDecoration: "none" }}
        >
          Interest Rates
        </a>
      </div>
    </div>
  );
}
