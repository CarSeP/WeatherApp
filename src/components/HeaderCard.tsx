import { data } from "../interfaces/data";
import { useTranslation } from 'react-i18next';

function HeaderCard({ data }: { data: data }) {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-white mb-2">{data.name}</h1>
      <p className="text-xl text-white">{t("monday")}, {t("january")} 15th</p>
    </div>
  );
}

export default HeaderCard;
