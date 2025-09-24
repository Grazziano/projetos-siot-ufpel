import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import RepositoriesSection from '@/components/RepositoriesSection';
import ResearchContext from '@/components/ResearchContext';
import Technologies from '@/components/Technologies';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Introduction />
        <RepositoriesSection />
        <ResearchContext />
        <Technologies />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
