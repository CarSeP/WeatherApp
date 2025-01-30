import { useTranslation } from "react-i18next";
import { data } from "../interfaces/data";

function TemperatureCard({ data }: { data: data }) {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center mb-8">
      <img src={data.icon} className="w-32 h-32" />
      <div className="text-center">
        <p className="text-6xl font-bold text-white">{data.temp}°C</p>
        <p className="text-2xl text-white">{t(data.weather?.split(" ").join("") ?? "")}</p>
      </div>
    </div>
  );
}

export default TemperatureCard;
