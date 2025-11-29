import WorldMap from '@/components/ui/world-map'

const WorldMapContact = () => {
  return (
     <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
      <WorldMap
        dots={[
          {
            start: { lat: 6.9271, lng: 79.8612 },       // Sri Lanka (Colombo)
            end:   { lat: -43.5320, lng: 172.6366 },    // New Zealand (Chc)
          },
          
        ]
    
      }
      />
    </div>
  )
}

export default WorldMapContact