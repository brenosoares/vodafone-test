import React, { useEffect, useState } from 'react'
import { Title } from '../Home/styles'
import { Button, Container, Table } from './styles'
import { Device } from '../../types';
import { useNavigate } from 'react-router-dom';
import { getDevices } from '../../service/api';
import { AddDevice } from '../../components/AddDevice';

export const Devices = () => {
  const [devicesList, setDevicesList] = useState<Device[]>();
  const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const getDeviceList = async () => {
        const response = await getDevices();
        setDevicesList(response?.data)
    }

    useEffect(() => {getDeviceList()}, [])

    const handleAddDevice = (newDevice: Device) => {
      // setDados([...dados, newDevice]);
      setShowModal(false);
    };

  return (
    <div>
      <Title>Devices</Title>

      <Container>
        <Button onClick={() => setShowModal(true)}>Add Device</Button>
        <Table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Last Connection</th>
              <th>Position</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {devicesList?.map((item, index) => (
              <tr key={index}>
                <td style={{ maxWidth: '100px' }}>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.lastConnection}</td>
                <td>{item?.position?.toString()}</td>
                <td>{item.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      {showModal && <AddDevice onClose={() => setShowModal(false)} onAdd={handleAddDevice} />}
    </div>
  )
}
