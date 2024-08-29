import Header from './Componentes/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
 
  return (
    <>
      <div className="page-principal">
      <Header/>
      <Outlet/>
      </div>
    </>
  )
}

export default App
