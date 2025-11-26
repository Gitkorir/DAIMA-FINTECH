import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Apply from './pages/Apply';

type Page = 'home' | 'about' | 'apply';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const titles: Record<Page, string> = {
      home: 'Daima Limited - Instant Phone Loans',
      about: 'About Us - Daima Limited',
      apply: 'Apply for Loan - Daima Limited',
    };
    document.title = titles[currentPage];
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onApplyClick={() => setCurrentPage('apply')} />;
      case 'about':
        return <About />;
      case 'apply':
        return <Apply />;
      default:
        return <Home onApplyClick={() => setCurrentPage('apply')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
