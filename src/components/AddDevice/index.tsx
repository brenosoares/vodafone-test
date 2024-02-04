import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AddDeviceProps, Device } from '../../types'
import { ButtonCloseModal, InputStyled, ModalContent, ModalOverlay } from './style';
import { Button } from '../../screens/Devices/styles';

export const AddDevice = ({ onClose, onAdd }: AddDeviceProps) => {

    const [device, setDevice] = useState<Device>({
        name: '',
        phoneNumber: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDevice({ ...device, [name]: value });
      };

      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onAdd(device);
      };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Adicionar Novo Dispositivo</h2>
        <form onSubmit={handleSubmit}>
          <InputStyled type="text" name="name" placeholder="Nome" value={device.name} onChange={handleChange} />
          <InputStyled type="text" name="phoneNumber" placeholder="Número de telefone" value={device.phoneNumber} onChange={handleChange} />
          <Button type="submit">Adicionar</Button>
        </form>
        <ButtonCloseModal onClick={onClose}>X</ButtonCloseModal>
      </ModalContent>
    </ModalOverlay>
  )
}
