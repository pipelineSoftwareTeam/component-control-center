import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  column-gap: 1rem;

  nav {
    color: var(--primary-400);
    padding: var(--padding-100);
    background-color: var(--primary-400);
    color: var(--white);
    font-weight: var(--fw-700);
    font-size: var(--fs-600);
    box-shadow: var(--shadow);
  }

  section {
    display: grid;
    place-items: center;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    padding-inline: 1rem;
    /* max-width: 1100px; */
    margin: 0 auto;
    width: 100%;
  }

  form {
    text-align: center;
    display: grid;
    gap: 1rem;
  }

  .login {
    padding: 4rem;
    border-radius: var(--borderRadiusMd);
    box-shadow: var(--shadow), var(--shadow), var(--shadow), var(--shadow);
  }

  .login h2 {
    font-size: var(--fs-600);
  }

  .logo-container {
    justify-self: start;
  }
  
  .logo {
    width: 100%;
    margin: 0 auto;
    max-width: 500px;
  }
`;

export default Wrapper;
