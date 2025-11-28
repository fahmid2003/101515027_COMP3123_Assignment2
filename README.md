# 101515027_comp3123_labtest2: Simple Current Weather App

## 🌍 Project Description
This is a simple single-page application built using React to display the current weather conditions for any user-specified city. The app integrates with a public API to fetch real-time data and demonstrates key React principles including:
* State management using `useState` for handling user input, loading status, and weather data.
* Data fetching and side effects using the `useEffect` and `useCallback` hooks.
* Data transfer between components using `props` (passing data from `App.js` to `WeatherDisplay.js`).
* Basic UI/UX design principles for clarity and functionality.

---

## 🔑 API Used
The application uses the **OpenWeatherMap API** to retrieve current weather information.
* **Endpoint:** Current Weather Data (`http://api.openweathermap.org/data/2.5/weather`)
* **Units:** Data is fetched using the `units=metric` parameter to ensure temperatures are in **Celsius** and wind speed is in meters/second.

---

## ⚙️ Setup and Installation Steps

To run this project locally, follow these steps:

1.  **Create React projecr folder:**
    
    comp3123_labtest2

    # create React environment

    npx create-react-app comp3123_labtest2
    

2.  **Install Dependencies:**
    ```bash
    npm install
    # (axios is a key dependency installed here)
    ```

3.  **API Key Configuration:**
    * Create a file named **`.env`** in the project root directory.
    * Add your OpenWeatherMap API key to the file using the variable name:
        ```
        REACT_APP_WEATHER_API_KEY=YOUR_OPENWEATHERMAP_API_KEY_HERE
        ```

4.  **Start the Application:**
    ```bash
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.

---

## 📸 Screenshots of the App




---

## 📝 Notes and Assumptions

* **API Key Security:** The API key is stored in a local **`.env`** file and is excluded from Git using the `.gitignore` file for security.
* **Error Handling:** The application includes basic error handling to catch status codes like `404` (City not found).
* **Temperature Conversion:** While the API is called with `units=metric`, the application logic ensures data integrity and uses the standard Kelvin to Celsius conversion if the `units` parameter is somehow missing or ignored.
* **Default View:** The app is configured to fetch the weather for **Toronto** upon initial load.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
