import { ReactComponent as AuthImage } from 'assets/images/auth-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Route, Switch } from 'react-router-dom';
import './styles.css';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <p>Insira seu email:</p>

        <div className="auth-form-container">
          <Switch>
            <Route path="/admin/auth/signup">
              <form>
                <div className="mb-2">
                  <input
                    type='"text'
                    className="form-control base-input"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="login-submit">
                  <ButtonIcon text="Enviar" />
                </div>
              </form>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Auth;
