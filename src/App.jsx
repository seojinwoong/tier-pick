import { Route, Routes } from 'react-router-dom';
import './assets/scss/style.scss'
import Header from "./components/common/Header";
import MainPage from './components/views/MainPage/MainPage';

const App = () => {
  return (
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
        </Routes>
      </>
  )
}

export default App