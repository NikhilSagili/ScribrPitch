import { useState } from 'react';
import Sidebar from './Sidebar';
import DynamicBackground from './DynamicBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative w-full bg-paper lg:h-screen lg:overflow-hidden lg:grid lg:grid-cols-[280px,1fr]">
      <DynamicBackground />

      {/* Sidebar for Desktop */}
      <div className="hidden lg:block">
        <Sidebar isOpen={true} setIsOpen={() => {}} />
      </div>

      {/* Sidebar for Mobile/Tablet */}
      <div className="lg:hidden">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>
      
      {/* Hamburger Menu Button */}
      <button 
        className="lg:hidden fixed top-4 right-4 z-50 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-border-color shadow-md"
        onClick={() => setIsSidebarOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>

      <main className="flex-1 relative overflow-y-auto isolate">
        {children}
      </main>
    </div>
  );
};

export default Layout;
