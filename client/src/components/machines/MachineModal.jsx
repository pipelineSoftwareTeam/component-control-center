import { useState } from 'react';

function MachineModal() {
  const [formData, setFormData] = useState({
    workCentre: '',
    machineModel: '',
    serialNo: 10000,
    manufacturer: 'Matsuura',
    machineType: 'CNC 5 Axis Multi Pallet Milling Machine',
    noOfPallets: 32,
    nextService: '11/11/2023',
    notes: '',
  });

  function handleValueChange(e) {
    setFormData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  function handleDateChange(e) {
    console.log(e.target.valueAsDate.toLocaleDateString('en-GB'));
    const dateString = e.target.valueAsDate.toLocaleDateString('en-GB');
    setFormData((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.valueAsDate,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      ...formData,
      nextService: formData.nextService.toLocaleDateString('en-GB'),
    });
  }

  return (
    <form onSubmit={handleSubmit} className='machine-form'>
      <h2>Add New Machine</h2>
      <input
        value={formData.workCentre}
        name='workCentre'
        onChange={handleValueChange}
        type='text'
        placeholder='Work Centre e.g. MAM72-01'
      />
      <input
        value={formData.machineModel}
        name='machineModel'
        onChange={handleValueChange}
        type='text'
        placeholder='Machine Model e.g. MAM72-35V'
      />
      <input
        value={formData.serialNo}
        name='serialNo'
        onChange={handleValueChange}
        type='number'
        placeholder='Serial Number'
      />
      <input
        value={formData.manufacturer}
        name='manufacturer'
        onChange={handleValueChange}
        type='text'
        placeholder='Manufacturer e.g. Matsuura'
      />
      <input
        value={formData.machineType}
        name='machineType'
        onChange={handleValueChange}
        type='text'
        placeholder='Machine Type'
      />
      <input
        value={formData.noOfPallets}
        name='noOfPallets'
        onChange={handleValueChange}
        type='number'
        placeholder='Number of Pallets'
      />
      <input
        value={formData.nextService}
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
  );
}

export default MachineModal;
