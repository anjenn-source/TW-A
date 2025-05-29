'use client'

import React, { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const customIcon = new L.Icon({
  iconUrl: '/location2.png',
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
})

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// Helper component to update map center when position changes
function Recenter({ lat, lng }) {
  const map = useMap()
  useEffect(() => {
    map.setView([lat, lng])
  }, [lat, lng, map])
  return null
}

export default function BlogMap({ locations }) {
  // Always call hooks unconditionally
  const initial = locations && locations.length > 0 ? locations[0] : null

  const [position, setPosition] = useState(
    initial
      ? { lat: initial.location.lat, lng: initial.location.lng }
      : { lat: 0, lng: 0 } // fallback position, or you can use null and handle below
  )

  const markerRef = useRef(null)

  useEffect(() => {
    if (locations && locations.length > 0 && locations[0]?.location) {
      setPosition({
        lat: locations[0].location.lat,
        lng: locations[0].location.lng,
      })
    }
  }, [locations])

  const eventHandlers = {
    dragend() {
      const marker = markerRef.current
      if (marker != null) {
        const newPos = marker.getLatLng()
        setPosition({ lat: newPos.lat, lng: newPos.lng })
      }
    },
  }

  // Handle empty locations by returning null after hooks
  if (!initial) return null

  return (
    <MapContainer
      center={[position.lat, position.lng]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
      scrollWheelZoom={false}
    >
      <Recenter lat={position.lat} lng={position.lng} />
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[position.lat, position.lng]}
        draggable={true}
        eventHandlers={eventHandlers}
        icon={customIcon}
        ref={markerRef}
      >
        <Popup>{initial.title}</Popup>
      </Marker>
    </MapContainer>
  )
}
