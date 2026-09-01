import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hisaar Solutions — Omni Ledger";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#22323C",
          color: "#FFFFFF",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              lineHeight: 1,
            }}
          >
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 6,
              }}
            >
              HISAAR
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 6,
              }}
            >
              SOLUTIONS
            </div>
          </div>
          <svg
            width="48"
            height="55"
            viewBox="0 0 114 130"
            fill="none"
          >
            <path
              d="M29 18h19v22M52 54H22v18M22 98v12h38v8M97 94v16H60"
              fill="none"
              stroke="#17D492"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="17" y="1" width="22" height="20" rx="6" fill="#17D492" />
            <rect x="42" y="27" width="34" height="32" rx="8" fill="#17D492" />
            <rect x="0" y="63" width="44" height="38" rx="10" fill="#17D492" />
            <rect x="81" y="65" width="32" height="32" rx="8" fill="#17D492" />
            <rect x="48" y="109" width="22" height="20" rx="6" fill="#17D492" />
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, maxWidth: 900 }}>
            The shop’s brain, not just the scanner.
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#8B93A7" }}>
            Omni Ledger · grocery · pharmacy · restaurant · garments
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "#17D492",
            letterSpacing: 2,
          }}
        >
          hisaarsolutions.com
        </div>
      </div>
    ),
    { ...size },
  );
}
