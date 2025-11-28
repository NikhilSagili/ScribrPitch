import type { Section } from '../types';
import D3Tree from './D3Tree';

interface AnnexureSectionProps {
  section: Section;
}

const AnnexureSection: React.FC<AnnexureSectionProps> = ({ section }) => {
  return (
    <section id={section.id} className="min-h-screen bg-annexure">
      {section.sub_sections?.map((subSection) => (
        <div key={subSection.id} id={subSection.id} className="mb-16">
          <div className="sticky top-0 bg-paper px-8 md:px-16 lg:px-24 py-8 z-10 border-b border-border-color h-32 flex flex-col justify-center">
            <h2 className="font-space-grotesk text-4xl font-bold text-text-main">
              {subSection.title}
            </h2>
          </div>
          <div className="px-8 md:px-16 lg:px-24 py-12 md:py-16">
            {subSection.id === 'annexure-flows' ? (
              <div className="bg-white border border-border-color rounded-lg p-8 shadow-lg">
                {subSection.blocks.map((block, index) => {
                  if (block.type === 'text') {
                    return <div key={index} className="text-center mb-8" dangerouslySetInnerHTML={{ __html: block.body }} />;
                  } else if (block.type === 'd3_tree') {
                    return (
                      <div key={index} className="mt-8">
                        <div className="w-16 h-0.5 bg-accent-red mb-4"></div>
                        <h3 className="font-space-grotesk text-2xl font-bold mb-4 text-accent-red uppercase">{block.title}</h3>
                        <div className="bg-grid-pattern rounded-md border border-border-color overflow-x-auto">
                          <D3Tree data={block.data} />
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            ) : (
              subSection.blocks.map((block, index) => {
                if (block.type === 'partnership_table') {
                  return (
                    <div key={index} className="bg-card rounded-lg shadow-lg overflow-x-auto border border-border-color">
                      <div className="grid grid-cols-[1.5fr,1fr,2.5fr,1.5fr] bg-sidebar p-5 font-bold uppercase text-sm text-text-gray tracking-wider" style={{ minWidth: '800px' }}>
                        <div>Partner/Capability</div>
                        <div>Ownership</div>
                        <div>Why it is Important</div>
                        <div>Suggested Companies</div>
                      </div>
                      {block.rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="grid grid-cols-[1.5fr,1fr,2.5fr,1.5fr] p-6 border-t border-border-color items-center" style={{ minWidth: '800px' }}>
                          <div className="font-semibold text-text-main">{row.capability}</div>
                          <div>
                            <span className={`px-3 py-1 text-xs font-bold rounded-full ${row.ownership === 'OWNED' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                              {row.ownership}
                            </span>
                          </div>
                          <div className="text-sm text-text-gray pr-4">{row.importance}</div>
                          <div className="font-space-grotesk text-sm text-accent-red">{row.companies}</div>
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              })
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default AnnexureSection;