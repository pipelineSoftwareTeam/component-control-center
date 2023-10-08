import { useState } from 'react';
import MachineModal from '../../components/machines/MachineModal';
import Wrapper from '../../assets/wrappers/MachineWrapper';

function Machines() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Wrapper>
      <h1>Machines Page</h1>
      <button onClick={() => setModalOpen(true)} type='button'>
        Add
      </button>
      {modalOpen && <MachineModal setModalOpen={setModalOpen} />}
    </Wrapper>
  );
}
export default Machines;
