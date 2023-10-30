import { useState } from 'react';
import { FiXCircle } from 'react-icons/fi';

function MachineModal({ setModalOpen }) {
  const [formData, setFormData] = useState({
    workCenter: '',
    machineModel: '',
    serialNumber: 10000,
    manufacturer: 'Matsuura',
    machineType: 'CNC 5 Axis Multi Pallet Milling Machine',
    noOfPallets: 32,
    nextService: new Date().toISOString().split('T')[0],
    notes: '',
  });

  function handleValueChange(e) {
    setFormData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/api/machines', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className='modal'>
      <form onSubmit={handleSubmit} className='machine-form'>
        <FiXCircle className='close-icon' onClick={() => setModalOpen(false)} />
        <h2>Add New Machine</h2>
        <input
          value={formData.workCenter}
          name='workCenter'
          onChange={handleValueChange}
          type='text'
          placeholder='Work Centre e.g. MAM72-01'
          required
        />
        <input
          value={formData.machineModel}
          name='machineModel'
          onChange={handleValueChange}
          type='text'
          placeholder='Machine Model e.g. MAM72-35V'
          required
        />
        <input
          value={formData.serialNumber}
          name='serialNumber'
          onChange={handleValueChange}
          type='number'
          placeholder='Serial Number'
          required
        />
        <input
          value={formData.manufacturer}
          name='manufacturer'
          onChange={handleValueChange}
          type='text'
          placeholder='Manufacturer e.g. Matsuura'
          required
        />
        <input
          value={formData.machineType}
          name='machineType'
          onChange={handleValueChange}
          type='text'
          placeholder='Machine Type'
          required
        />
        <input
          value={formData.noOfPallets}
          name='noOfPallets'
          onChange={handleValueChange}
          type='number'
          placeholder='Number of Pallets'
          required
        />
        <input
          valueasdate={formData.nextService}
          name='nextService'
          onChange={handleValueChange}
          type='date'
        />
        <input
          value={formData.notes}
          name='notes'
          onChange={handleValueChange}
          type='text'
          placeholder='Notes... (optional)'
        />
        <button type='submit'>Add New Machine</button>
      </form>
    </div>
  );
}

export default MachineModal;
