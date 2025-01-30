import { useTranslation } from "react-i18next";

function Search({ onSearch }: { onSearch: (locationName: string) => void }) {
  const { t } = useTranslation();

  const onSubmit = (e:any) => {
    e.preventDefault()
    onSearch(e.target.search.value)
  }

  return (
    <div className="mb-8">
      <form onSubmit={onSubmit} className="flex items-center">
        <input
          type="text"
          name="search"
          placeholder={t("inputPlaceholder")}
          className="w-full px-4 py-2 rounded-l-full opacity text-white placeholder-white placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          className="opacity text-white px-4 py-2 rounded-r-full hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Search;
