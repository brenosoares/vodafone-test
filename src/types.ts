import { LatLngExpression } from "leaflet"

export type Device = {
    name: string,
    phoneNumber: string,
    lastConnection?: string
    position?: LatLngExpression
    id?: string
}

export interface AddDeviceProps {
    onClose: () => void;
    onAdd: (newDevice: Device) => void;
  }
