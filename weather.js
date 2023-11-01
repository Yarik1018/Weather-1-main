
async function getApi() {
    let a = document.getElementById("city_line").value;
    let data = `https://api.weatherapi.com/v1/forecast.json?key=8b7cab1863ae4b3d83f185637231109&q=${a}&days=6&aqi=no&alerts=no`;
    const response = await fetch(data);
    const result = await response.json();
    console.log(result)

    // Работа с первым блоком


    let city_val = document.getElementById("city_val").innerHTML = document.getElementById("city_line").value;

    let timedata = result.location.localtime;
    const str = timedata;
    const [dat, time] = str.split(" ");

    const formatDate = (dat) => {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        const date = new Date(dat);
        const dayOfWeek = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(date);
        const day = date.getDate();
        const month = months[date.getMonth()];

        return `${dayOfWeek}, ${day} ${month}`;
    };

    const formattedDate = formatDate(dat);

    let time_line = document.getElementById("time_line").innerHTML = time;
    let date_line = document.getElementById("date_line").innerHTML = formattedDate;

    // Работа со вторым блоком

    let weather_celfl = result.current.feelslike_c;
    let weather_cel = result.current.temp_c;
    document.getElementById("grades-f-l").innerHTML = `${Math.round(weather_celfl)} °C`;
    document.getElementById("grades").innerHTML = `${Math.round(weather_cel)} °C`;

    let sunrise = result.forecast.forecastday[0].astro.sunrise;
    document.getElementById("Sunrise").innerHTML = sunrise;

    let sunset = result.forecast.forecastday[0].astro.sunset;
    document.getElementById("Sunset").innerHTML = sunset;

    let Humidity = result.current.humidity;
    document.getElementById("Humidity").innerHTML = `${Humidity} %`;

    let pressure_mb = result.current.pressure_mb;
    document.getElementById("pressure_mb").innerHTML = `${pressure_mb} hPa`;

    let wind_mph = result.current.wind_mph;
    document.getElementById("wind_mph").innerHTML = `${wind_mph} km/h`;

    let uv = result.current.uv;
    document.getElementById("Uv").innerHTML = `${uv}`;



    let maintext = document.getElementById("Main_w_text");
    let mainimg = document.getElementById("Main_w_img");
    const weather = result.current.condition.text;

    const rain = "rain";
    const Rain = "Rain";

    const snow = "snow";
    const Snow = "Snow";

    const clear = "clear";
    const Clear = "Clear";

    const clouds = "overcast";
    const Clouds = "Overcast";

    const cloudy = "cloudy";
    const Cloudy = "Cloudy";

    if (weather.includes(rain)) {
        mainimg.src = "./icons/drizzle 1.svg";
        maintext.innerHTML = Rain;
    }
    if (weather.includes(Rain)) {
        mainimg.src = "./icons/drizzle 1.svg";
        maintext.innerHTML = Rain;
    }


    if (weather.includes(snow)) {
        mainimg.src = "./icons/rain 1.svg";
        maintext.innerHTML = Snow;
    }
    if (weather.includes(Snow)) {
        mainimg.src = "./icons/rain 1.svg";
        maintext.innerHTML = Snow;
    }


    if (weather.includes(Clear)) {
        mainimg.src = "./icons/clear 3.svg";
        maintext.innerHTML = Clear;
    }
    if (weather.includes(clear)) {
        mainimg.src = "./icons/clear 3.svg";
        maintext.innerHTML = Clear;
    }


    if (weather.includes(Clouds)) {
        mainimg.src = "./icons/clouds 1.svg";
        maintext.innerHTML = "Overcast";
    }
    if (weather.includes(clouds)) {
        mainimg.src = "./icons/clouds 3.svg";
        maintext.innerHTML = "Overcast";
    }

    if (weather.includes(cloudy)) {
        mainimg.src = "./icons/clouds 2.png";
        maintext.innerHTML = Cloudy;
    }
    if (weather.includes(Cloudy)) {
        mainimg.src = "./icons/clouds 2.png";
        maintext.innerHTML = Cloudy;
    }



    // работа с третьим блоком


    // общая работа с 3м блоком
    let d_frc_1_img = document.getElementById("d_frc_1_img")
    let d_frc_1_C = document.getElementById("d_frc_1_C")
    let d_frc_1_date = document.getElementById("d_frc_1_date")

    let d_frc_2_img = document.getElementById("d_frc_2_img")
    let d_frc_2_C = document.getElementById("d_frc_2_C")
    let d_frc_2_date = document.getElementById("d_frc_2_date")

    let d_frc_3_img = document.getElementById("d_frc_3_img")
    let d_frc_3_C = document.getElementById("d_frc_3_C")

    let d_frc_4_img = document.getElementById("d_frc_4_img")
    let d_frc_4_C = document.getElementById("d_frc_4_C")

    let d_frc_5_img = document.getElementById("d_frc_5_img")
    let d_frc_5_C = document.getElementById("d_frc_5_C")


    //работа с первой строчкой
    const date_fr_1 = formatDate(result.forecast.forecastday[1].date);
    const weather_forecast_1 = result.forecast.forecastday[1].day.condition.text;

    if (weather_forecast_1.includes(rain)) {
        d_frc_1_img.src = "./icons/drizzle 1.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;

    }
    if (weather_forecast_1.includes(Rain)) {
        d_frc_1_img.src = "./icons/drizzle 1.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_1.includes(snow)) {
        d_frc_1_img.src = "./icons/rain 1.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }
    if (weather_forecast_1.includes(Snow)) {
        d_frc_1_img.src = "./icons/rain 1.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_1.includes(Clear)) {
        d_frc_1_img.src = "./icons/clear 3.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;

    }
    if (weather_forecast_1.includes(clear)) {
        d_frc_1_img.src = "./icons/clear 3.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_1.includes(Clouds)) {
        d_frc_1_img.src = "./icons/clouds 1.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }
    if (weather_forecast_1.includes(clouds)) {
        d_frc_1_img.src = "./icons/clouds 3.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_1.includes(cloudy)) {
        d_frc_1_img.src = "./icons/clouds 2.png";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }
    if (weather_forecast_1.includes(Cloudy)) {
        d_frc_1_img.src = "./icons/clouds 2.png";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }




    //робота со второй сточкой
    const date_fr_2 = formatDate(result.forecast.forecastday[2].date);
    const weather_forecast_2 = result.forecast.forecastday[1].day.condition.text;

    if (weather_forecast_2.includes(rain)) {
        d_frc_2_img.src = "./icons/drizzle 1.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;

    }
    if (weather_forecast_2.includes(Rain)) {
        d_frc_2_img.src = "./icons/drizzle 1.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_2.includes(snow)) {
        d_frc_2_img.src = "./icons/rain 1.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }
    if (weather_forecast_2.includes(Snow)) {
        d_frc_2_img.src = "./icons/rain 1.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_2.includes(Clear)) {
        d_frc_2_img.src = "./icons/clear 3.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;

    }
    if (weather_forecast_2.includes(clear)) {
        d_frc_2_img.src = "./icons/clear 3.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_2.includes(Clouds)) {
        d_frc_2_img.src = "./icons/clouds 1.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }
    if (weather_forecast_2.includes(clouds)) {
        d_frc_2_img.src = "./icons/clouds 3.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_2.includes(cloudy)) {
        d_frc_2_img.src = "./icons/clouds 2.png";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }
    if (weather_forecast_2.includes(Cloudy)) {
        d_frc_2_img.src = "./icons/clouds 2.png";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }

    // третья строчка
    d_frc_3_img.src = "./icons/clear 3.svg";
    d_frc_3_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c) - 2} °C`

    //четвертая строчка
    d_frc_4_img.src = "./icons/clouds 2.png";
    d_frc_4_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c) + 2} °C`

    //пятая строчка 
    d_frc_5_img.src = "./icons/rain 1.svg";
    d_frc_5_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c) + 2} °C`




    // все
};

