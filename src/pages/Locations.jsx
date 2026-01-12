import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"

// Fix for default marker icon in React Leaflet
const icon = new Icon({
    iconUrl: markerIconPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

const locations = [
    { id: 1, name: "Downtown LA Zone", coords: [34.0522, -118.2437], type: "Urban" },
    { id: 2, name: "Mojave Desert Base", coords: [35.0116, -118.1923], type: "Nature" },
    { id: 3, name: "Santa Monica Pier", coords: [34.0092, -118.4976], type: "Coastal" },
];

const Locations = () => {
    return (
        <div className="pt-24 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-8 uppercase">Flight Zones</h1>
                <p className="text-gray-400 mb-8 max-w-2xl">
                    Authorized flight zones and frequent filming locations. We have permits for all major landmarks shown.
                </p>

                <div className="h-[500px] w-full bg-neutral-900 rounded-xl overflow-hidden border border-white/10 relative z-0">
                    <MapContainer
                        center={[34.0522, -118.2437]}
                        zoom={9}
                        scrollWheelZoom={false}
                        style={{ height: '100%', width: '100%' }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        />
                        {locations.map(loc => (
                            <Marker key={loc.id} position={loc.coords} icon={icon}>
                                <Popup>
                                    <div className="text-black">
                                        <b className="uppercase">{loc.name}</b> <br />
                                        <span className="text-xs text-gray-500">{loc.type}</span>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Locations;
