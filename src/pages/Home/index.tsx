import { ReactComponent as MainImage } from 'assets/images/acessibilidade.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Funcionalidades</h1>
            <p>Criar e acompanhar plano</p>
          </div>
          <div>
            <Link to="/login">
              <ButtonIcon text="Inicie sua jornada" />
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
