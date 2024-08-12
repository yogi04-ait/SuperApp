import Start from './Component/Start';
import Login from './Component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Component/Homepage';
import { Provider } from 'react-redux';
import { store } from './features/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/start' element={<Start />} />
          <Route path='/homepage' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
