import { createStore } from 'redux';
import reducers from '../Redux/reducers'; // Importa tu reductor principal aquí

// Crea el store y pasa el reductor principal como argumento
const store = createStore(reducers);

export default store;
