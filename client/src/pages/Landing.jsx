import Wrapper from '../assets/wrappers/LandingWrapper';
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
        <div className='nav'>C3 - Component Control Center</div>
      </nav>
      <section>
        <div className='login'>
          <LoginForm />
        </div>
        <div className='logo-container'>
          <Logo />
        </div>
      </section>
    </Wrapper>
  );
}

export default Landing;
