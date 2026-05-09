import { getUser, getWeather } from "./services.js";

async function showWeatherDashboard() {
  try {
    console.log("Fetching user....");

    const user = await getUser();

    console.log("User Found: ", user);

    console.log("\nFetching weather....");

    const weather = await getWeather(user.city);

    console.log("\nWeather Report: ");
    console.log(weather);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

showWeatherDashboard();
