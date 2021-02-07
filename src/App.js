import MainNav from "./components/MainNav";
import SectionHero from "./components/SectionHero/SectionHero";
import './custom.scss';
import './global.scss';

const App = () => {
  return (
    <div className="App">
      <MainNav/>
      <SectionHero/>
    </div>
  );
}

export default App;
