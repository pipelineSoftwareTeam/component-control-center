import styled from 'styled-components';

const Wrapper = styled.main`
  .modal {
    position: absolute;
    inset: 0px;
    background: black;
    opacity: 0.7;
    display: grid;
    place-items: center;
    overflow-y: auto;
  }

  form {
    text-align: center;
    display: grid;
    position: relative;
    gap: 1rem;
    max-width: 400px;
    height: 80%;
    background: white;
    opacity: 1;
  }

  .machine-form {
    padding: 2rem 4rem;
    box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.4),
      -20px -20px 60px rgba(0, 0, 0, 0.4);
    border-radius: 1rem;
    align-items: flex-start;
  }

  .machine-form h2 {
    font-size: var(--fs-600);
  }

  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    color: red;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export default Wrapper;
