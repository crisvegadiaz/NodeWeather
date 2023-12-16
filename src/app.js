import axios from "axios";
import chalk from "chalk";

const API_KEY = "c9b332979b991a4cf698b6c855b252f5";

async function getWeather(city) {
  try {
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const response = await axios.get(endpoint, {
      params: {
        q: city,
        arguments: API_KEY,
        units: "metric",
      },
    });

    return response.data;
  } catch (error) {
    console.error(chalk.red("❌ Error de aplicación: ") + error);
    throw new Error(
      `No es posible obtener la informacion de la ciudad: ${city}`
    );
  }
}

function diplayWeather( weatherData) {
  console.log(
    chalk.green(
      ` 🧭 ${weatherData.name}, ${weatherData.sys.country} - ${weatherData.weather[0].main}`
    ),
    "\n"
  );
  console.log(
    chalk.green(
      ` 🌡️ Temperatura: ${weatherData.main.temp} °C - ${weatherData.main.temp_min} °C - ${weatherData.main.temp_max} °C`
    ),
    "\n"
  );
  console.log(
    chalk.green(
      ` 💧 Humedad: ${weatherData.main.humidity} % - ${weatherData.main.pressure} hPa`
    ),
    "\n"
  );
  console.log(
    chalk.green(
      ` 🌬️  Viento: ${weatherData.wind.speed} m/s - ${weatherData.wind.deg} °`
    ),
    "\n"
  );
}

function hendleError(error) {
  console.error(chalk.red("Error: "), error.message);
  process.exit(1);
}

function initApp() {
  let city = process.argv[2];

  if (!city) {
    console.log(
      chalk.red(" 🗺️ Por favor, proporciona un nombre de lugar o ciudad")
    );
    console.log(chalk.green(" Ejemplo de uso:\n node app.js [nombre ciudad]"));
    return;
  }

  getWeather(city)
    .then((weatherData) => diplayWeather(weatherData))
    .catch(hendleError);
}

initApp();
