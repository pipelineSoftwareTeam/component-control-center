import styled from 'styled-components';

const Wrapper = styled.main`
  form {
    text-align: center;
    display: grid;
    gap: 1rem;
  }

  .machine-form {
    padding: 6rem 4rem;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    border-radius: 1rem;
    align-items: flex-start;
  }

  .machine-form h2 {
    font-size: var(--fs-600);
  }
`;

export default Wrapper;
