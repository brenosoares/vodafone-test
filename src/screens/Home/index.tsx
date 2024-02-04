import React, { useEffect, useRef, useState } from "react";
import MarkerClusterGroup from 'react-leaflet-cluster'
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Device } from "../../types";
import { getDevices } from "../../service/api";
import { Title } from "./styles";
import { useNavigate } from "react-router-dom";

// delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export const Home = () => {

    const [devicesList, setDevicesList] = useState<Device[]>();

    const navigate = useNavigate();

    const getDeviceList = async () => {
        const response = await getDevices();
        setDevicesList(response?.data)
    }

    useEffect(() => {getDeviceList()}, [])

    const mapRef = useRef(null);
    const latitude = 51.505;
    const longitude = -0.09;

  return (
    <>
            <Title>Home</Title>


            <MapContainer  center={[latitude, longitude]} zoom={4} ref={mapRef} style={{height: "calc(100vh - 220px )", width: "95%", display: "block", margin: "20px auto 0"}}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MarkerClusterGroup chunkedLoading>
                {devicesList?.map((device, index) => (
                    <Marker key={index} position={device?.position || [0,0]} title={device.name} eventHandlers={{ click: (e) => {navigate('/devices')}}}></Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
    </>
  )
}
