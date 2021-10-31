import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './screens/Home';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
