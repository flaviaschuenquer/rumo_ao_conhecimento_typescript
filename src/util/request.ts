import axios from 'axios';
import qs from 'qs';

//Variável global que guarda a url

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

//export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080/swagger-ui.html/api"


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'ticsocial';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? '123';


//CONSTATNTE HEADERS: Função para requisição de login e um tipo auxiliar. O valor do Content-Type e do Autorization pegar no Postman feito com o back

type LoginData = {
  username: string;
  password: string;
} 
export const requestBackendLogin = (LoginData: LoginData ) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlenconded',
    Authorization: 'Basic '  + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
  }

  //CONSTATNTE DATA(corpo da requisição): Função para requisição de login e um tipo auxiliar. O valor username, password e grand_type no Postman , mas que devem ser convertidos em urlencoded. Para isso importar a  biblioteca que ferá a conversão.(  yarn add qs @types/qs )

  const data = qs.stringify({
    ...LoginData,
    grant_type: 'password'
});

//a url pegamos no Postman(endereço do POST)
return axios({method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers});



}