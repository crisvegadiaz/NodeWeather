# Documentación de la Aplicación del Tiempo

## Resumen
Esta aplicación Node.js obtiene y muestra información meteorológica actual para una ciudad dada utilizando la API de OpenWeatherMap. La aplicación está diseñada para ejecutarse desde la línea de comandos, tomando el nombre de la ciudad como un argumento de línea de comandos.

## Requisitos Previos
Antes de ejecutar la aplicación, asegúrese de tener Node.js instalado en su sistema. Además, necesita una clave de API de [OpenWeatherMap](https://openweathermap.org/) para acceder a sus datos meteorológicos.

## Instalación
1. Clonar el repositorio:
    ```bash
    git clone <url-del-repositorio>
    ```
2. Navegar al directorio del proyecto:
    ```bash
    cd <directorio-del-proyecto>
    ```
3. Instalar dependencias:
    ```bash
    npm install
    ```

## Uso
Ejecute la aplicación desde la línea de comandos de la siguiente manera:
```bash
node app.js [nombre-ciudad]
```
Reemplace `[nombre-ciudad]` con el nombre de la ciudad para la cual desea obtener información meteorológica.

### Ejemplo
```bash
node app.js Madrid
```

## Configuración
Asegúrese de haber obtenido una clave de API de OpenWeatherMap y reemplace el valor de `API_KEY` en el archivo `app.js` con su clave de API real:
```javascript
const API_KEY = "tu-clave-de-api";
```

## Dependencias
Esta aplicación depende de los siguientes paquetes de Node.js, que se instalan automáticamente durante el proceso de configuración:
- [axios](https://www.npmjs.com/package/axios): Utilizado para realizar solicitudes HTTP a la API de OpenWeatherMap.
- [chalk](https://www.npmjs.com/package/chalk): Proporciona salida de consola con colores para una mejor legibilidad.

## Estructura del Código
### `app.js`
- Punto de entrada principal de la aplicación.
- Importa los módulos necesarios (axios y chalk).
- Define la clave de API de OpenWeatherMap (`API_KEY`).
- Implementa funciones para obtener datos meteorológicos (`getWeather`), mostrar información meteorológica (`displayWeather`), manejar errores (`handleError`), e inicializar la aplicación (`initApp`).

### `getWeather(city)`
- Función asíncrona que realiza una solicitud GET a la API de OpenWeatherMap para obtener datos meteorológicos de la ciudad especificada.
- Devuelve una promesa con los datos meteorológicos si tiene éxito, o genera un error si hay algún problema.

### `displayWeather(weatherData)`
- Muestra información meteorológica formateada en la consola utilizando chalk para colorear.

### `handleError(error)`
- Registra mensajes de error en la consola y sale del proceso con un código de error.

### `initApp()`
- Analiza los argumentos de la línea de comandos para extraer el nombre de la ciudad.
- Verifica si se proporciona un nombre de ciudad; si no, muestra un mensaje de uso.
- Llama a `getWeather` con el nombre de la ciudad proporcionado y maneja el resultado o el error.

## Manejo de Errores
- Los errores se capturan y registran utilizando chalk para una mejor visibilidad.
- Si ocurre un error durante la solicitud a la API, la aplicación genera un mensaje de error personalizado.

## Contribuciones
Siéntase libre de contribuir al proyecto enviando informes de errores, solicitudes de funciones o solicitudes de extracción.

## Licencia
Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
