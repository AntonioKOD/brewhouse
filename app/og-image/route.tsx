import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Braintree Brewhouse - Craft Beer, Bar Pizza & Sports Bar";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          position: "relative",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
          }}
        />
        
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 60px",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          {/* Main Title */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#f8fafc",
              marginBottom: "24px",
              fontFamily: "system-ui, -apple-system, sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Braintree Brewhouse
          </div>
          
          {/* Tagline */}
          <div
            style={{
              fontSize: "36px",
              color: "#d4af37",
              marginBottom: "32px",
              fontFamily: "system-ui, -apple-system, sans-serif",
              fontWeight: "600",
            }}
          >
            Craft Beer • Bar Pizza • Sports Bar
          </div>
          
          {/* Address */}
          <div
            style={{
              fontSize: "22px",
              color: "#cbd5e1",
              fontFamily: "system-ui, -apple-system, sans-serif",
              marginTop: "16px",
            }}
          >
            703 Granite Street, Braintree, MA • (781) 356-4500
          </div>
          
          {/* Hours */}
          <div
            style={{
              fontSize: "18px",
              color: "#94a3b8",
              fontFamily: "system-ui, -apple-system, sans-serif",
              marginTop: "24px",
            }}
          >
            Open Daily: Bar 11am-1am • Kitchen 11am-10pm
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

