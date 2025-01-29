import { data } from "../interfaces/data";

function HeaderCard({ data }: { data: data }) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-white mb-2">{data.name}</h1>
      <p className="text-xl text-white">Monday, January 15th</p>
    </div>
  );
}

export default HeaderCard;
