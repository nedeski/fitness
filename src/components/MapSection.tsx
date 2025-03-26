'use client'
import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const MapSection = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const map = useRef<maplibregl.Map | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style:
        'https://api.maptiler.com/maps/basic/style.json?key=XmrWgdysSFHs5jczOssa',
      center: [153.026, -27.4705], // Brisbane coordinates (your location)
      zoom: 13,
      scrollZoom: false, // Disable zooming with mouse scroll
      boxZoom: false, // Disable zooming with box
      dragRotate: false, // Disable map rotation
      keyboard: false, // Disable keyboard interaction
      maxZoom: 16, // Prevent zooming out
      minZoom: 13, // Prevent zooming in
    })

    // Add marker for the location
    new maplibregl.Marker()
      .setLngLat([153.026, -27.4705]) // Your company's location
      .addTo(map.current)

    return () => map.current?.remove()
  }, [])

  return (
    <section className="relative h-96 w-full">
      {/* Map Container */}
      <div
        ref={mapContainer}
        className="h-full w-full overflow-hidden rounded-xl shadow-lg"
      />

      {/* Gradient overlay for bottom fade effect */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Optional subtle border */}
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5" />

      {/* Overlay content below the map */}
      {/* <div className="relative z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-white">
        <div className="space-y-4 p-4 text-center md:p-8">
          <h2 className="text-4xl font-bold">Welcome to Our Company</h2>
          <p className="text-lg">
            We are located at the heart of Brisbane. Visit us for more info!
          </p>
        </div>
      </div> */}
    </section>
  )
}

export default MapSection

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center space-y-16">
//       <Map />
//     </div>
//   )
// }
