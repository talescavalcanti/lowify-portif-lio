import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Features from './components/Features';
import WhatsAppRecovery from './components/WhatsAppRecovery';
import Awards from './components/Awards';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { SmoothScroll } from './components/ui/SmoothScroll';
import './App.css';

function App() {
    return (
        <SmoothScroll>
            <div className="app">
                <Navbar />
                <main>
                    <Hero />
                    <Showcase />
                    <Features />
                    <WhatsAppRecovery />
                    <Awards />
                    <FAQ />
                </main>
                <Footer />
            </div>
        </SmoothScroll>
    );
}

export default App;
