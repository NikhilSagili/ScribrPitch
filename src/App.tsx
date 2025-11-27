import { contentData } from './data';
import Layout from './components/Layout';
import VisionSection from './components/VisionSection';
import ImmersiveSliderSection from './components/ImmersiveSliderSection';
import PlatformSection from './components/PlatformSection';
import MarketSection from './components/MarketSection';
import CompetitorSection from './components/CompetitorSection';
import AnnexureSection from './components/AnnexureSection';
import FadeInBlock from './components/FadeInBlock';

function App() {
  return (
    <Layout>
      {contentData.sections.map(section => {
        let component;
        switch (section.id) {
          case 'vision':
            return <VisionSection key={section.id} section={section} />;
          case 'problem':
          case 'solution':
          case 'revenue':
            component = <ImmersiveSliderSection section={section} />;
            break;
          case 'platform':
            component = <PlatformSection section={section} />;
            break;
          case 'market':
            component = <MarketSection section={section} />;
            break;
          case 'competitors':
            component = <CompetitorSection section={section} />;
            break;
          case 'annexure':
            component = <AnnexureSection section={section} />;
            break;
          default:
            return null;
        }
        return <FadeInBlock key={section.id}>{component}</FadeInBlock>;
      })}
    </Layout>
  );
}

export default App;

