import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/pim/AddEmployee/AddEmployee';
import PimLayout from './components/pim/PimLayout';
import AppRoutes from './components/routing/AppRoutes';
import Header from './components/Header/Header';
function App() {
  return (
    <>
    <Header />
    <AppRoutes/>
    </>
  );
}

export default App;
