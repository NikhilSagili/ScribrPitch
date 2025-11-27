import type { TextBlockData } from '../types';

interface TextBlockProps extends TextBlockData {}

const TextBlock: React.FC<TextBlockProps> = ({ title, subtitle, body }) => {
  return (
    <div className="mb-4">
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      {subtitle && <h4 className="text-lg font-medium text-gray-400 mb-2">{subtitle}</h4>}
      <p className="text-gray-300">{body}</p>
    </div>
  );
};

export default TextBlock;
