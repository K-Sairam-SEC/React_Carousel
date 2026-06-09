Ex05 Image Carousel

Date: 7/6/2026

Register Number: 212225240132


AIM:
To create a Image Carousel using React



ALGORITHM
STEP 1 Initial Setup:
Input: A list of images to display in the carousel.



Output: A component displaying the images with navigation controls (e.g., next/previous buttons).


Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo: currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image: currentIndex = (currentIndex - 1 + images.length) % images.length;

Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

PROGRAM:

App.jsx

```jsx
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
```

Index.css

```css
:root {
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --bg-color: #fbfbfb;
  --text-color: #2a2a2a;
  --text-muted: #666666;
  --border: #e2e2e2;
  --code-bg: #f5f5f5;
  
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: var(--font-sans);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #121212;
    --text-color: #e0e0e0;
    --text-muted: #999999;
    --border: #2c2c2c;
    --code-bg: #1c1c1c;
  }
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

#root {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
}

.app-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.app-header {
  text-align: center;
}

.app-header h1 {
  margin: 0 0 8px 0;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.025em;
}

.app-subtitle {
  margin: 0;
  font-size: 1rem;
  color: var(--text-muted);
}

.carousel-section {
  width: 100%;
}

.app-footer {
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 16px;
}
```
OUTPUT:
<img width="2557" height="1459" alt="image" src="https://github.com/user-attachments/assets/0de7d4b9-026d-4883-b6cd-7e81378de137" />

RESULT
The program for creating Image Carousel using React is executed successfully.
