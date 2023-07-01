import Wrapper from '../assets/wrappers/LandingWrapper';
import LandingImage from '../components/LandingImage';
import Logo from '../components/Logo';

function LoginForm() {
	return (
		<form>
			<h2>Employee Login</h2>
			<input type='email' placeholder='Work E-mail' />
			<input type='password' placeholder='Password' />
			<button type='submit'>To the spready</button>
		</form>
	);
}

function Landing() {
	return (
		<Wrapper>
			<nav>
				<Logo />
				<h3 className='app-name'>Component Control Center</h3>
			</nav>
			<section>
				<div className='login'>
					<LoginForm />
				</div>
				<LandingImage />
			</section>
		</Wrapper>
	);
}

export default Landing;
