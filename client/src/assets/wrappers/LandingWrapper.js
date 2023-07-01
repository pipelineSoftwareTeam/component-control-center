import styled from 'styled-components';

const Wrapper = styled.main`
	min-height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr;

	nav {
		display: flex;
		align-items: center;
		color: var(--primary-400);
		padding: var(--padding-100) var(--padding-150);
		color: var(--primary-400);
		font-weight: var(--fw-700);
		font-size: var(--fs-600);
	}

	nav img {
		max-width: 100px;
		cursor: pointer;
	}

	section {
		display: grid;
		place-items: center;
		gap: 1rem;
		grid-template-columns: 1fr 2fr;
		padding-inline: 3rem;
		margin: 0 auto;
		width: 100%;
	}

	form {
		text-align: center;
		display: grid;
		gap: 1rem;
	}

	form h2 {
		margin-bottom: 2rem;
	}

	.login {
		padding: 6rem 4rem;
		box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
		border-radius: 1rem;
		align-items: flex-start;
	}

	.login h2 {
		font-size: var(--fs-600);
	}

	.logo-container {
		justify-self: start;
	}

	.landing-img {
		width: 80%;
		margin: 0 auto;
	}
`;

export default Wrapper;
