import axios from "axios";
import { useEffect, useState } from "react";
import ContentCard from "./components/ContentCard";
import FooterCard from "./components/FooterCard";
import HeaderCard from "./components/HeaderCard";
import Search from "./components/search";
import TemperatureCard from "./components/TemperatureCard";
import { data } from "./interfaces/data";

function App() {
  const [data, setData] = useState<data>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`;
        const { data } = await axios.get(url);
        setData({
          name: data.location.name,
          temp: data.current.temp_c,
          icon: data.current.condition.icon,
          weather: data.current.condition.text,
          tempSensation: data.current.feelslike_c,
          humidity: data.current.humidity,
          wind: data.current.wind_kph,
          uv: data.current.uv,
        });
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="opacity backdrop-blur-lg rounded-3xl p-8 max-w-md w-full">
      <Search />
      {isLoading && (
        <>
          <HeaderCard data={data} />
          <TemperatureCard data={data} />
          <ContentCard data={data} />
          <FooterCard />
        </>
      )}
    </div>
  );
}

export default App;
