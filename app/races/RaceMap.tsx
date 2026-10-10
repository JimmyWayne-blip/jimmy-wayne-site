
"use client";

import "leaflet/dist/leaflet.css";
import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import { useEffect } from "react";

const races = [
  {
    name: "The Mammoth 200",
    slug: "mammoth-200",
    location: "Mammoth Lakes, California",
    position: [37.6485, -118.9721] as [number, number],
  },
  {
    name: "Hardrock 100",
    slug: "hardrock-100",
    location: "Silverton, Colorado",
    position: [37.8119, -107.6642] as [number, number],
  },
  {
    name: "Western States",
    slug: "western-states",
    location: "Olympic Valley, California",
    position: [39.1969, -120.2350] as [number, number],
  },
  {
    name: "UTMB",
    slug: "utmb",
    location: "Chamonix, France",
    position: [45.9237, 6.8694] as [number, number],
  },
  {
    name: "Wasatch 100",
    slug: "wasatch-100",
    location: "Wasatch Mountains, Utah",
    position: [40.7900, -111.6500] as [number, number],
  },
  {
    name: "The Bear",
    slug: "the-bear",
    location: "Bear River Range, Utah",
    position: [41.8000, -111.6500] as [number, number],
  },
  {
    name: "Cascade Crest",
    slug: "cascade-crest",
    location: "Easton, Washington",
    position: [47.2380, -121.1840] as [number, number],
  },
  {
    name: "High Lonesome",
    slug: "high-lonesome",
    location: "Colorado Rockies",
    position: [39.0500, -106.2000] as [number, number],
  },
  {
    name: "Run Rabbit Run",
    slug: "run-rabbit-run",
    location: "Steamboat Springs, Colorado",
    position: [40.4850, -106.8317] as [number, number],
  },
  {
    name: "Transgrancanaria",
    slug: "transgrancanaria",
    location: "Gran Canaria, Spain",
    position: [27.9600, -15.6000] as [number, number],
  },
  {
    name: "Canyons 100K",
    slug: "canyons-100k",
    location: "Auburn, California",
    position: [38.8966, -121.0769] as [number, number],
  },
  {
    name: "Miwok 100K",
    slug: "miwok-100k",
    location: "Marin Headlands, California",
    position: [37.9000, -122.6000] as [number, number],
  },
  {
    name: "San Juan Solstice 50",
    slug: "san-juan-solstice-50",
    location: "Lake City, Colorado",
    position: [37.9975, -107.3153] as [number, number],
  },
  {
    name: "Scout Mountain Ultras",
    slug: "scout-mountain-ultras",
    location: "Pocatello, Idaho",
    position: [42.8621, -112.4506] as [number, number],
  },
];

function FitRaceBounds() {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(
      races.map((race) => race.position),
      { padding: [28, 28] }
    );
  }, [map]);

  return null;
}

export default function RaceMap() {
  return (
    <div className="race-map">
      <div className="race-map-heading">
        <span className="label">Race locations</span>
        <p>Fourteen races. A world of terrain to understand.</p>
      </div>

      <MapContainer
        center={[42, -105]}
        zoom={3}
        scrollWheelZoom={false}
        className="race-map-canvas"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        <FitRaceBounds />

        {races.map((race) => (
          <CircleMarker
            key={race.slug}
            center={race.position}
            radius={7}
            pathOptions={{
              color: "#F2F1EC",
              weight: 2,
              fillColor: "#B8734A",
              fillOpacity: 1,
            }}
          >
            <Popup>
              <div className="race-map-popup">
                <strong>{race.name}</strong>
                <span>{race.location}</span>
                <a href={`/races/${race.slug}`}>
                  Explore race →
                </a>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      <p className="race-map-note">
        Pins indicate general event locations, not race routes.
        Start locations and courses may vary by event and year.
      </p>
    </div>
  );
}
