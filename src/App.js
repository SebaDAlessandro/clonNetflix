import './App.css';
import './normalize.css'
import Navigation from './Components/Navigation/'
import Billboard from './Components/Billboard'
import Title from './Components/Title'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Billboard />
      <Title />
      <Footer />
    </div>
  );
}

export default App;
