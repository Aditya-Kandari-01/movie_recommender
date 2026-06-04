import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex font-bold items-center w-full bg-slate-800 h-20">
      <div className="ml-16 rounded-lg flex items-center justify-center w-20 h-10 bg-teal-500 text-white">
        <button onClick={()=>navigate("/")} className="">Home</button>
      </div>
        <nav className="flex gap-10 ml-auto mr-10 text-white font-semibold">
        <button className="bg-slate-700 hover:bg-slate-600 w-48 h-10 rounded-lg">
          MovieRecommender
        </button>
        <button className="bg-slate-700 hover:bg-slate-600 w-24 h-10 rounded-lg">
          Movies
        </button>
        <button className="bg-slate-700 hover:bg-slate-600 w-28 h-10 rounded-lg">
          WebSeries
        </button>
        <button className="bg-slate-700 hover:bg-slate-600 w-24 h-10 rounded-lg">
          TvShows
        </button>
      </nav>
    </div>
  );
};
export default Header;
