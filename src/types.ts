// Defines the structure for a simple text block
export interface TextBlockData {
  type: 'text';
  title?: string;
  subtitle?: string;
  body: string;
}

// Defines the structure for the market funnel block
export interface MarketFunnelBlockData {
  type: 'market_funnel';
  slides: {
    title: string;
    rings: { id: string; label: string; value: string; full_form: string }[];
    quotes: { text: string; source: string }[];
  }[];
}

// Defines the structure for the spider graph block
// Defines a single dataset for the Chart.js radar chart
export interface ChartDataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  borderWidth: number;
  pointBackgroundColor: string;
  fill: boolean;
  borderDash?: number[];
}

// Defines the structure for the spider graph block
export interface SpiderGraphBlockData {
  type: 'spider_graph';
  title: string;
  labels: string[];
  datasets: ChartDataset[];
  competitors: { name: string; desc: string; data: number[] }[];
}

// Defines the structure for the partnership table block
export interface PartnershipTableBlockData {
  type: 'partnership_table';
  title: string;
  rows: { capability: string; ownership: string; importance: string; companies: string }[];
}

// Defines the structure for the D3 tree block
export interface D3TreeBlockData {
  type: 'd3_tree';
  title: string;
  tree_id: string;
  data: any; // Simplified for now
}

// Defines the structure for the vision hero block
export interface VisionHeroBlockData {
  type: 'vision_hero';
  title: string;
  body: string;
  image_url: string;
}

// A union type for all possible block shapes
export type Block = VisionHeroBlockData | TextBlockData | MarketFunnelBlockData | SpiderGraphBlockData | PartnershipTableBlockData | D3TreeBlockData;

// Defines the structure for the capabilities section
export interface Capability {
  title: string;
  subtitle: string;
  features: { head: string; desc: string }[];
  why_matters: string;
}

// Defines the structure for a sub-section within the Annexure
export interface SubSection {
  id: string;
  title: string;
  blocks: Block[];
}

// Defines the structure for a main content section
export interface Section {
  id: string;
  bg_style: string;
  left_label: string;
  heading: string;
  is_tabbed?: boolean;
  blocks?: Block[];
  capabilities?: Capability[];
  sub_sections?: SubSection[];
}

// Defines the root data structure
export interface ContentData {
  page_id: string;
  sections: Section[];
}
