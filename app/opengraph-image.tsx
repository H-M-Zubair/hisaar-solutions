import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Hisaar Solutions — Omni Ledger";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logo = await readFile(
    join(process.cwd(), "public/brand/Hisaar-removebg-preview.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
        <div
          style={{
            display: "flex",
            width: 349,
            height: 131,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={logoSrc}
            width={500}
            height={500}
            alt="Hisaar Solutions logo"
            style={{
              position: "absolute",
              left: -62,
              top: -190,
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, lineHeight: 1.08, maxWidth: 920 }}>
            A custom software company that ships its own SaaS.
          </div>
          <div style={{ marginTop: 24, fontSize: 26, color: "#8B93A7" }}>
            B2B · Omni Ledger multi-sector POS
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
