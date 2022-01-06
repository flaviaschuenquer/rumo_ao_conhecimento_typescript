import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import './styles.css';

const Register = () => {
  return (
    <div className="plan-container">
      <div className="base-card plan-card">
        <div className="plan-content-container">
          <div className="goback-container">
            <ArrowIcon />
            <h6>VOLTAR</h6>
          </div>
          <div className="row">
            <div className="col-x1-6">
              <div className="meta-container">
                <h5>Defina sua meta</h5>
              </div>
              <div className="meta-caixa-container">
                <h4>Escreva sua meta-DENTRO DA CAIXA PARA ESCREVER ALGO</h4>
              </div>

              <div className="mentor-container">
                <h5>MENTOR:</h5>
              </div>
              <div className="mentor-caixa-container">
                <h5>
                  Defina mentor caso deseje-DENTRO DA CAIXA PARA ESCREVER ALGO
                </h5>
              </div>
            </div>
            <div className="col-x1-6">
              <div className="description-container">
                <h4>
                  Conheça o que temos de sugestões, para seu desenvolvimento
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
