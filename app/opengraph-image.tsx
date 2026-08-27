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
          background: "#05080F",
          color: "#F4F0E6",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              display: "flex",
              background: "#0C1220",
              border: "1px solid #1B2436",
            }}
          />
          <div style={{ fontSize: 22, letterSpacing: 4 }}>HISAAR SOLUTIONS</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, maxWidth: 900 }}>
            The shop’s brain, not just the scanner.
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: "#8B93A7" }}>
            Omni Ledger · grocery · pharmacy · restaurant · garments
          </div>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 20, color: "#1EE0B0" }}>
          hisaarsolutions.com
        </div>
      </div>
    ),
    { ...size },
  );
}
