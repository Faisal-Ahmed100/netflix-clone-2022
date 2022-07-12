
import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../assets/logo.png";
import AccountFooter from "../components/AccountFooter";
import { UseAuth } from "../context/AuthContex";
import requests from "../Request";
import AccountMain from "./AccountMain";
import Row from "./Row";
const Account = () => {
  const { user, logOut } = UseAuth();
  const nevigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      nevigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="sm:p-4 p-2 absolute w-full z-[100] md:px-8 flex items-center">
        <Link to="/">
          <img
            className="md:w-[150px] w-[120px] h-auto object-cover"
            src={LogoImg}
            alt=""
          />
        </Link>

        <div className="flex items-center gap-3 w-full justify-end">
          <h2 className="text-white font-bold cursor-pointer">
            <Link className="hover:text-[#DC2626]" to='/save-movies'>
              Account
            </Link>
            </h2>
          <p className="text-white hidden sm:block">{user?.email}</p>
          <button
            className="text-white  md:px-6 md:py-2 px-2 py-1 rounded bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <AccountMain />

      <Row rowID='1' title="UpComing" fetchUrl={requests.requestUpcoming} />
      <Row rowID='2' title="Popular" fetchUrl={requests.requestPopular}/>
      <Row rowID='3' title="Trending" fetchUrl={requests.requestTrending}/>
      <Row rowID='4' title="Top Rated" fetchUrl={requests.requestTopRated}/>
      <Row rowID='5' title="Horror" fetchUrl={requests.requestHorror}/>
      <AccountFooter />
    </>
  );
};

export default Account;
