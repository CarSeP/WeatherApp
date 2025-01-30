import { useTranslation } from "react-i18next";

function ErrorMessage() {
  const { t } = useTranslation();

  return (
    <div className="bg-red-400 bg-opacity-75 text-white px-4 py-2 rounded-lg mb-6">
      <div className="flex items-center">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="font-semibold">{t("errorTitle")}</span>
      </div>
      <p className="mt-1 text-sm">{t("errorMessage")}</p>
    </div>
  );
}

export default ErrorMessage;
