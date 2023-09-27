import React from "react";

export default function WeatherCard({ temp }) {
  return (
    <div>
      <h1  className="fs-5">{temp}</h1>
    </div>
  );
}

export function VisibilityCard({ visibility }) {
  return (
    <div>
      <h1  className="fs-5">{visibility}</h1>
    </div>
  );
}

export function HumidityCard({humidity}) {
  return (
    <div>
      <h1 className="fs-5">{humidity}</h1>
    </div>
  );
}
