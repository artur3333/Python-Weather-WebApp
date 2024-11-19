# Python Weather WebApp 🌦️

A sleek and user-friendly weather web application built using **Python** (with the `eel` library) and **HTML/CSS/JavaScript**, allowing users to fetch real-time weather data for any location using the OpenWeatherMap API.

## Features
- **Real-Time Weather Updates**: Fetch current temperature, humidity, and wind speed for any city using the OpenWeatherMap API.
- **Interactive UI**: Search for a city using the input field or hit *Enter* to get instant results.

## Requirements
- **Python**: 3.x
- Obtain an **API Key** from [OpenWeatherMap](https://openweathermap.org/api).

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/artur3333/Python-Weather-WebApp.git
    cd Python-Weather-WebApp
    ```

2. Install the required Python package:
    ```bash
    pip install eel
    ```

3. Replace the placeholder API key in `web/script.js` with your OpenWeatherMap API key:
    ```javascript
    apiKey: "YOUR_OpenAI_KEY"  // Replace "YOUR_OpenAI_KEY" with your OpenWeatherMap API key
    ```

## Usage
1. Run the application:
    ```bash
    python main.py
    ```
2. Enter the name of the city in the search bar.
3. Click the "Show" button or press **Enter**.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork** the repository.
2. **Create a new branch** for your feature or bug fix.
3. **Make your changes** and test them.
4. **Submit** a pull request describing your changes.