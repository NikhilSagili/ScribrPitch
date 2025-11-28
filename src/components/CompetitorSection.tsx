import { useState, useMemo, useEffect } from 'react';
import { Radar } from 'react-chartjs-2';
import type { Section, SpiderGraphBlockData } from '../types';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface CompetitorSectionProps {
  section: Section;
}

const CompetitorSection: React.FC<CompetitorSectionProps> = ({ section }) => {
  const block = section.blocks?.[0] as SpiderGraphBlockData | undefined;
  const [hoveredCompetitorName, setHoveredCompetitorName] = useState<string | null>(null);
  const [pointLabelFontSize, setPointLabelFontSize] = useState(window.innerWidth < 768 ? 10 : 12);

  useEffect(() => {
    const handleResize = () => {
      setPointLabelFontSize(window.innerWidth < 768 ? 10 : 12);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const chartData = useMemo(() => {
    if (!block) return { labels: [], datasets: [] };

    const scribrDataset = { ...block.datasets[0], fill: true };
    const templateDataset = { ...block.datasets[1], fill: true };

    const competitorInfo = block.competitors.find(c => c.name === hoveredCompetitorName);

    let competitorDataset;

    if (competitorInfo) {
      competitorDataset = {
        ...templateDataset,
        label: competitorInfo.name,
        data: competitorInfo.data,
        borderDash: [],
      };
    } else {
      competitorDataset = {
        ...templateDataset,
        label: 'Select a Competitor',
        data: [0, 0, 0, 0, 0, 0],
        borderDash: [5, 5],
      };
    }

    return {
      labels: block.labels,
      datasets: [scribrDataset, competitorDataset],
    };
  }, [block, hoveredCompetitorName]);

  if (!block || block.type !== 'spider_graph') {
    return null;
  }

  const chartOptions: import('chart.js').ChartOptions<'radar'> = {
    scales: {
      r: {
        angleLines: { color: '#333' },
        grid: { color: '#ccc' },
        pointLabels: {
          color: '#5e5b55',
          font: {
            size: pointLabelFontSize,
            family: '"Space Grotesk", sans-serif',
            weight: 'bold' as 'bold',
          },
        },
        ticks: { display: false },
        min: 0,
        max: 6,
      },
    },
    plugins: {
      legend: { labels: { color: '#5e5b55', font: { size: 14 } } },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
  };

  return (
    <section id={section.id} className="relative h-screen overflow-hidden">
      <div className="sticky top-0 bg-paper px-8 md:px-16 lg:px-24 py-8 z-10 border-b border-border-color h-32 flex flex-col justify-center">
        <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-text-main">
          {section.heading}
        </h2>
      </div>
      <div className="h-auto lg:h-[calc(100vh-128px)] flex flex-col justify-center items-center p-8 md:p-12 lg:p-16 bg-competitors">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-8 lg:gap-12 w-full max-w-7xl items-center flex-1">
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
            <Radar data={chartData} options={chartOptions} />
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase text-text-gray tracking-wider mb-4">Click competitors to compare spread</h3>
            <div className="overflow-y-auto pr-4 space-y-3 h-64 sm:h-80 lg:h-auto lg:flex-1">
              {block.competitors.map((competitor, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCompetitorName(competitor.name)}
                  onMouseLeave={() => setHoveredCompetitorName(null)}
                  className={`bg-white border border-border-color p-4 rounded-lg cursor-pointer transition-all border-l-4 ${hoveredCompetitorName === competitor.name ? 'border-l-accent-red' : 'border-l-transparent'}`}>
                  <div className="flex justify-between items-center">
                    <h4 className="font-space-grotesk font-bold text-lg">{competitor.name}</h4>
                    {hoveredCompetitorName === competitor.name && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-2 comp-icon"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20V14"/></svg>}
                  </div>
                  <p className="text-text-gray text-sm mt-1">{competitor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitorSection;
