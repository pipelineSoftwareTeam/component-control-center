import { useState } from 'react';
import { FiXCircle } from 'react-icons/fi';

function MachineModal({ setModalOpen }) {
  const [formData, setFormData] = useState({
    workCentre: '',
    machineModel: '',
    serialNo: 10000,
    manufacturer: 'Matsuura',
    machineType: 'CNC 5 Axis Multi Pallet Milling Machine',
    noOfPallets: 32,
    nextService: null,
    notes: '',
  });

  function handleValueChange(e) {
    setFormData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  function handleDateChange(e) {
    setFormData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.valueAsDate,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      ...formData,
      nextService: formData.nextService.toLocaleDateString('en-GB'),
    };

    fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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
          value={formData.workCentre}
          name='workCentre'
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
          value={formData.serialNo}
          name='serialNo'
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
          onChange={handleDateChange}
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
