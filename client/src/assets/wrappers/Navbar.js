import styled from 'styled-components';

const Wrapper = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: var(--padding-150);
	color: var(--white);
	height: 5rem;
	max-height: 5rem;
	background: rgb(20, 61, 40);
	background: linear-gradient(
		90deg,
		rgba(20, 61, 40, 1) 0%,
		rgba(0, 165, 79, 1) 19%,
		rgba(68, 228, 145, 1) 78%
	);

	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3rem;
		height: 3rem;
		border-radius: var(--borderRadius);
		background: rgba(255, 255, 255, 0.27);
		cursor: pointer;
		transform: scale(0.98);
		transition: all 0.25s ease;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5.3px);
		-webkit-backdrop-filter: blur(5.3px);
	}

	.logo:hover {
		transform: scale(1);
		box-shadow: var(--shadow);
	}

	.navigation {
		display: flex;
		gap: 1rem;
	}

	.link {
		color: var(--white);
		text-decoration: none;
	}

	.route {
		border-radius: var(--borderRadius);
		padding: 0.5rem;
	}

	.route div {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.route:hover,
	.active {
		background-color: var(--white);
		color: var(--primary-400);
		svg {
			fill: var(--primary-400);
			color: var(--primary-400);
		}
	}

	.nav-end {
		display: flex;
		gap: 1rem;
	}

	.user {
		display: flex;
		flex-direction: column;
		font-weight: var(--fw-600);
	}

	.logout {
		font-weight: var(--fw-700);
		padding: 0.5rem;
		border-radius: var(--borderRadius);
		align-self: center;
		svg {
			font-size: 1.25rem;
		}
	}

	.logout:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}

	svg {
		font-size: 1rem;
	}
`;

export default Wrapper;
