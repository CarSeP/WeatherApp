import { useTranslation } from "react-i18next";
import Forecast from "./Forecast";

function FooterCard({locationName}: {locationName:string}) {
  const { t } = useTranslation();

  const dateCurrent = new Date();

  return (
    <div className="mt-8 border-t border-white pt-4">
      <h2 className="text-xl font-semibold text-white mb-4">
        {t("footerTitle")}
      </h2>
      <div className="flex justify-between text-white">
        {[4, 3, 2, 1].map((el) => (
          <Forecast
            key={el}
            locationName={locationName}
            date={[
              dateCurrent.getFullYear(),
              dateCurrent.getMonth() + 1,
              dateCurrent.getDate() - el,
            ].join("-")}
          />
        ))}
      </div>
    </div>
  );
}

export default FooterCard;
