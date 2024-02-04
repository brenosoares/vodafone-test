import axios from "axios";
import { Device } from "../types";

const apiConfig = axios.create({
    baseURL: 'https://api.mockfly.dev/mocks/9b27c12f-94ac-470a-a51c-17432ffac369'
})

export const getDevices = async () => {
    try {
        const result = await apiConfig.get<Device[]>('/devices');
        return result
    } catch (error) {
        console.log(error)
    }
}
