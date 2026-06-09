import Carousel from './components/Carousel';

const IMAGES = [
  { url: '/images/lake.png' },
  { url: '/images/forest.png' },
  { url: '/images/dunes.png' },
  { url: '/images/mountains.png' }
];

export default function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Image Carousel</h1>
        <p className="app-subtitle">Made using react</p>
      </header>

      <section className="carousel-section">
        <Carousel images={IMAGES} />
      </section>
    </main>
  );
}
