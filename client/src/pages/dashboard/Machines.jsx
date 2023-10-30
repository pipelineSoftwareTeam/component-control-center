import { useState, useEffect } from 'react';
import MachineModal from '../../components/machines/MachineModal';
import Wrapper from '../../assets/wrappers/MachineWrapper';

// Utils
import machinesApi from '../../utils/machineApi';

function Machines() {
  const [modalOpen, setModalOpen] = useState(false);
  const [machines, setMachines] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      machinesApi.getData(setMachines, setIsLoading, setFetchError);
    }, 2000)
  }, [])

  return (
    <Wrapper>
      <h1>Machines Page</h1>
      <div>
      {isLoading ? (
        <h2>
          Loading.....
        </h2>
      ) : (
        !fetchError ? (
          <p>{JSON.stringify(machines)}</p>
          ) : (
          <h2>{fetchError}</h2>
        )

      )}
      </div>
      <button onClick={() => setModalOpen(true)} type='button'>
        Add
      </button>
      {modalOpen && <MachineModal setModalOpen={setModalOpen} />}
    </Wrapper>
  );
}
export default Machines;
