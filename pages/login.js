import AuthForm from '../components/AuthForm';

const Login = () => {
  const handleLogin = (e, email, password) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
};

export default Login;
