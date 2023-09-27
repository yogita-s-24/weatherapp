import React from "react";

export default function WeatherCard({ temp }) {
  return (
    <div>
      <h1>{temp}</h1>
    </div>
  );
}

export function VisibilityCard({ visibility }) {
  return (
    <div>
      <h1>{visibility}</h1>
    </div>
  );
}
