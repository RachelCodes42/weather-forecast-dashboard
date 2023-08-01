// Function to fetch current weather data for a city
function getCurrentWeatherData(city) {
    var apiKey = "YOUR_API_KEY"; // Replace "YOUR_API_KEY" with your actual API key from OpenWeatherMap
  
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    var APIKey = "6fbdc0a863fd5db347336fe3c13fa708";
    
    // Use Fetch API to fetch current weather data
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found.");
        }
        return response.json();
      })
      .then((data) => {
        // Process the current weather data and display it on the dashboard
        displayCurrentWeatherData(data);
        // Fetch 5-day forecast data for the city
        return fetchFiveDayForecast(city);
      })
      .then((forecastData) => {
        // Process the 5-day forecast data and display it on the dashboard
        displayForecastData(forecastData);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  
  // Function to fetch 5-day forecast data for a city
  function fetchFiveDayForecast(city) {
    var apiKey = "YOUR_API_KEY"; // Replace "YOUR_API_KEY" with your actual API key from OpenWeatherMap
  
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
  
    // Use Fetch API to fetch 5-day forecast data
    return fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found.");
        }
        return response.json();
      })
      .then((data) => data.list)
      .catch((error) => {
        throw error;
      });
  }
  
  // Function to display current weather data on the dashboard
  function displayCurrentWeatherData(data) {
    // Update the DOM elements to display current weather data
    // You can use jQuery or native DOM manipulation to create and update HTML elements as needed
  }
  
  // Function to display 5-day forecast data on the dashboard
  function displayForecastData(data) {
    // Update the DOM elements to display 5-day forecast data
    // You can use jQuery or native DOM manipulation to create and update HTML elements as needed
  }
  
  // Function to handle form submission
  $("#search-form").submit(function (event) {
    event.preventDefault();
    var city = $("#city-input").val().trim();
  
    // Call the function to get current weather data for the entered city
    getCurrentWeatherData(city);
  
    // Clear the input field after search
    $("#city-input").val("");
  });
  
  // Function to handle click on search history
  $("#search-history").on("click", ".history-item", function () {
    var city = $(this).text();
  
    // Call the function to get current weather data for the clicked city
    getCurrentWeatherData(city);
  });
  