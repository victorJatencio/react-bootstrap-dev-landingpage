import MainNav from "./components/MainNav";
import SectionHero from "./components/SectionHero/SectionHero";
import SectionLogos from "./components/SectionLogos/SectionLogos";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures";
import './custom.scss';
import './global.scss';

const App = () => {
  return (
    <div className="App">
      <MainNav/>
      <SectionHero/>
      <SectionLogos/>
      <KeyFeatures/>
    </div>
  );
}

export default App;
