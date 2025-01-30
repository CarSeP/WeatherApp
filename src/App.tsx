import axios from "axios";
import { useEffect, useState } from "react";
import ContentCard from "./components/ContentCard";
import FooterCard from "./components/FooterCard";
import HeaderCard from "./components/HeaderCard";
import Search from "./components/Search";
import TemperatureCard from "./components/TemperatureCard";
import { data } from "./interfaces/data";
import i18n from "./i18n";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [data, setData] = useState<data>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [locationName, setLocationName] = useState("");

  const onSearch = async (locationName: string) => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationName}`;
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
      setError(false);
      setLocationName(data.location.name);
    } catch (error) {
      setError(true);
    }
  };
  const handleLanguage = () => {
    const userLang = navigator.language;
    const lang = userLang.startsWith("es") ? "es" : "en";

    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    handleLanguage();
  }, []);

  return (
    <div className="opacity backdrop-blur-lg rounded-3xl p-8 max-w-md w-full">
      <Search onSearch={onSearch} />
      {isLoading && !isError && (
        <>
          <HeaderCard data={data} />
          <TemperatureCard data={data} />
          <ContentCard data={data} />
          <FooterCard locationName={locationName}/>
        </>
      )}
      {isError && <ErrorMessage />}
    </div>
  );
}

export default App;
