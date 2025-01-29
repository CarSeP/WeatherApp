import { data } from "../interfaces/data";

function TemperatureCard({ data }: { data: data }) {
  return (
    <div className="flex justify-center items-center mb-8">
      <img
        src={data.icon}
        alt="Soleado"
        className="w-32 h-32"
      />
      <div className="text-center">
        <p className="text-6xl font-bold text-white">{data.temp}°C</p>
        <p className="text-2xl text-white">{data.weather}</p>
      </div>
    </div>
  );
}

export default TemperatureCard;
