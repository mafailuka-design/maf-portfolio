import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col justify-between">
      {/* Fixed/Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Pages */}
      <Home />

      {/* Footer */}
      <Footer />
    </div>
  );
}
