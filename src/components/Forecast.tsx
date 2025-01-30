import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { data } from "../interfaces/data";

function Forecast({ date, locationName }: { date: string, locationName:string }) {
  const { t } = useTranslation();

  const [data, setData] = useState<data>({});
  const [isLoading, setIsLoading] = useState(false);
  const day = new Date(date)
    .toLocaleDateString("en-US", { weekday: "short" })
    .toLowerCase();

  const onSearchForecast = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${locationName}&dt=${date}`;
      const { data } = await axios.get(url);
      const { day } = data.forecast.forecastday[0];
      setData({
        temp: day.avgtemp_c,
        icon: day.condition.icon,
      });
      setIsLoading(true);
    } catch {}
  };
  useEffect(() => {
    onSearchForecast();
  }, [locationName]);

  return (
    <div className="text-center">
      {isLoading && (
        <>
          <p className="font-semibold">{t(day)}</p>
          <img src={data.icon} className="w-10 h-10 mx-auto" />
          <p>{data.temp}°C</p>
        </>
      )}
    </div>
  );
}

export default Forecast;
