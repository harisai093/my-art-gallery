📂 README.md Content
Copy everything from the title below down to the end of the license section:

Interactive Art Gallery
A sleek, "Apple-style" responsive art gallery built with vanilla JavaScript, CSS3, and HTML5. This project showcases a collection of drawings and crafts with smooth 3D transitions and a user-friendly interface.

🌟 Features
Categorized Filtering: Quickly switch between "All", "Drawings", and "Crafts" views.

3D Transition Engine: Uses CSS perspective and rotateY for a modern, fluid sliding effect.

Smart Navigation:

Manual: Clickable side arrows and pagination dots.

Keyboard: Supports Left/Right Arrows for navigation and Spacebar to toggle autoplay.

Auto-Scroll Dots: The navigation dots automatically scroll to stay centered on mobile devices.

Customizable Autoplay: Includes a play/pause toggle and a speed slider (1s to 5s) to control the slideshow pace.

Immersive Mode: Built-in Fullscreen API support to view art without distractions.

Mobile Optimized: Fully responsive design with touch-friendly controls and a scrollable dot navigation bar to prevent layout breaking.

📂 Project Structure
/project-root
│   index.html      # Main structure and UI components
│   style.css       # Visual styling and 3D animations
│   script.js       # Gallery logic, filtering, and event handling
└───images/         # Artwork assets (hanuman.jpg, flowers.jpg, etc.)

🚀 Getting Started
Clone or Download the project files.

Organize Images: Ensure your artwork is placed in an images/ folder. The current script is configured to look for specific filenames such as hanuman.jpg, flowers.jpg, and ganesh.jpg.

Launch: Open index.html in any modern web browser.

🛠️ Configuration
To add more art or change the order, update the myWorks array in script.js:
{ 
  title: "Your Art Title", 
  img: "images/your-image.jpg", 
  type: "Drawing" // Use "Drawing" or "Craft"
}

📜 License
This project is open-source. Feel free to customize the styles in style.css or the logic in script.js to fit your personal brand!