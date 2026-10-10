
"use client";

import dynamic from "next/dynamic";

const RaceMap = dynamic(() => import("./RaceMap"), {
  ssr: false,
  loading: () => (
    <div
      className="race-map-canvas"
      style={{
        display: "grid",
        placeItems: "center",
        color: "#6F756A",
      }}
    >
      Loading race map…
    </div>
  ),
});

export default function RaceMapLoader() {
  return <RaceMap />;
}
