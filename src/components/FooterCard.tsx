function FooterCard() {
  return (
    <div className="mt-8 border-t border-white pt-4">
      <h2 className="text-xl font-semibold text-white mb-4">
        Forecast for the next few days
      </h2>
      <div className="flex justify-between text-white">
        <div className="text-center">
          <p className="font-semibold">Tue</p>
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="Parcialmente nublado"
            className="w-10 h-10 mx-auto"
          />
          <p>24°C</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">Wed</p>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="Lluvia"
            className="w-10 h-10 mx-auto"
          />
          <p>22°C</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">Thu</p>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="Soleado"
            className="w-10 h-10 mx-auto"
          />
          <p>25°C</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">Fri</p>
          <img
            src="https://openweathermap.org/img/wn/03d@2x.png"
            alt="Nublado"
            className="w-10 h-10 mx-auto"
          />
          <p>23°C</p>
        </div>
      </div>
    </div>
  );
}

export default FooterCard;
