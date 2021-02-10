import MainNav from "./components/MainNav";
import SectionHero from "./components/SectionHero/SectionHero";
import SectionLogos from "./components/SectionLogos/SectionLogos";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures";
import SectionQuickStart from "./components/SectionQuickStart/SectionQuickStart";
import SectionTools from "./components/SectionTools/SectionTools";
import './custom.scss';
import './global.scss';

const App = () => {
  return (
    <div className="App">
      <MainNav/>
      <SectionHero/>
      <SectionLogos/>
      <KeyFeatures/>
      <SectionQuickStart/>
      <SectionTools/>
    </div>
  );
}

export default App;
