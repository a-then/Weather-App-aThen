# Weather App

A simple and responsive weather application built with modern web technologies. This app allows users to search for current weather conditions in any city worldwide.

## Features

- Search weather by city name
- Displays temperature, feels like temperature, humidity, wind speed, and weather conditions
- Responsive design for mobile and desktop
- Error handling for invalid city names
- Clean and intuitive user interface

## Technologies Used

- JavaScript (React & VITE)
- HTML5 & CSS3
- OpenWeatherMap API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/a-then/Weather-App-aThen.git
    cd Weather-App-aThen
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) and add it to your `.env` file:
    ```
    VITE_WEATHER_API_KEY=your_api_key_here
    ```

### Running the App

```bash
npm start
# or
yarn start
```

The app will run locally at `http://localhost:5173`.

## Usage

1. Enter a city name in the search bar.
2. View the current weather details for the selected city.

## Folder Structure

```
Weather-App-aThen/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   ├── index.js
│   └── styles/
├── .env
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/)
- [React](https://react.dev/)
- [Create React App](https://create-react-app.dev/)