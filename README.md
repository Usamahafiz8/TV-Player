
markdown
# TV Player App

This is a simple React application that displays a carousel of videos, allowing users to cycle through them using "Next" and "Previous" buttons.

## Features

- Displays a list of videos.
- Allows navigation between videos using "Next" and "Previous" buttons.
- Overlays an image on top of the video with absolute positioning.
- Simple styling for the buttons and video display.
- Auto-plays, mutes, and loops the video.

## Demo

You can try out the app locally by following the setup instructions below.

## Installation

1. Clone the repository to your local machine:

   bash
   git clone [https://github.com/Usamahafiz8/TV-Player]
   

2. Navigate to the project directory:

   bash
   cd video-carousel-app
   

3. Install the required dependencies:

   bash
   npm install
   

4. Start the development server:

   bash
   npm start
   

5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the app running.

## File Structure


## How It Works

1. The `App.js` component is responsible for rendering the video carousel.
2. The `videos` array contains the URLs for the videos to be displayed.
3. The `currentVideoIndex` state tracks the currently displayed video.
4. When the "Next" or "Previous" buttons are clicked, the `currentVideoIndex` is updated, changing the video displayed.
5. The video is displayed within a `div` container, which has an overlay image (`tv_screen.png`).

## Customization

- To add more videos to the carousel, simply modify the `videos` array in `App.js` by adding new URLs.
- The overlay image (`tv_screen.png`) can be replaced with any image of your choice.
- The styling for the buttons and video can be adjusted in `App.css`.

## Dependencies

- React (v18 or higher)
- CSS for styling

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
