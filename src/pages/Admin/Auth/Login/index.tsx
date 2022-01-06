import ButtonIcon from 'components/ButtonIcon';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    console.log(formData);
  };
  return (
    <div className="login-container">
      <div className="base-card login-card">
        <div>
          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                {...register('username')}
                type='"text'
                className="form-control base-input"
                placeholder="Username"
                name="username"
              />
            </div>
            <div className="mb-2">
              <input
                {...register('password')}
                type="password"
                className="form-control base-input"
                placeholder="Password"
                name="password"
              />
            </div>
            <Link to="/admin/auth/signup" className="login-link-recover">
              Esqueci a senha
            </Link>
            <div className="login-submit">
              <ButtonIcon text="Fazer login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
