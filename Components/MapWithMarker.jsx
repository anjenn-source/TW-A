'use client'

import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import { useRef, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'

// Custom icon
const customIcon = new L.Icon({
  iconUrl: '/location2.png',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
})

// Helper component to recenter the map when position changes
function RecenterMap({ lat, lng }) {
  const map = useMap()
  useEffect(() => {
    map.setView([lat, lng])
  }, [lat, lng, map])
  return null
}

export default function MapWithMarker({
  value = { lat: 0, lng: 0 },
  onChange = () => {},
}) {
  const markerRef = useRef(null)

  const eventHandlers = {
    dragend() {
      const marker = markerRef.current
      if (marker != null) {
        const position = marker.getLatLng()
        onChange({ lat: position.lat, lng: position.lng })
      }
    },
  }

  return (
    <MapContainer
      center={[value.lat, value.lng]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RecenterMap lat={value.lat} lng={value.lng} />
      <Marker
        position={[value.lat, value.lng]}
        draggable={true}
        eventHandlers={eventHandlers}
        icon={customIcon}
        ref={markerRef}
      />
    </MapContainer>
  )
}
