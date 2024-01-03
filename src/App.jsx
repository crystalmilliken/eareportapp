import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './NavBar';
import NavMenu from './components/NavMenu'
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <NavMenu />
      <div className="container mt-4" >
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;