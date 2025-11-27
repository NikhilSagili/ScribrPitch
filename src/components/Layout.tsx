import Sidebar from './Sidebar';
import DynamicBackground from './DynamicBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-[280px,1fr] w-full h-screen bg-paper overflow-hidden">
      <DynamicBackground />
      <Sidebar />
      <main className="flex-1 relative overflow-y-auto isolate">
        {children}
      </main>
    </div>
  );
};

export default Layout;
