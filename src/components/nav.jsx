/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeLang } from "../redux/actions/changLangAction"
import { useContext } from "react";
import { languaContext } from "../context/languageContext";

export default function Nav() {


  const getFavMovies = useSelector((state) => state.favoriteList.favMovies);

  // const getCurrLang = useSelector((state) => state.language.lang)
  // const dispatch = useDispatch();

  const { lang, setLang } = useContext(languaContext);

  function changeCurrLang(lang) {
    setLang(lang)
  }


  return (

    <nav className="navbar navbar-expand-lg bg-dark w-100 mx-auto p-2" data-bs-theme="dark" dir={lang == "AR" ? "rtl" : ""}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{lang == "EN" ? "Movies" : "أفلام"}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">{lang == "EN" ? "Home" : "الرئيسية"}</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/favorite">{lang == "EN" ? "favorites" : "المفضلة"} ({getFavMovies.length})</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">{lang == "EN" ? "Login" : "تسجيل دخول"}</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="register">{lang == "EN" ? "Register" : "انشاء حساب"}</Link>
            </li>

            <li className="nav-item">
              <div class="dropdown w-75">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {lang == "EN" ? "Language" : "اللغة"}: {lang}
                </button>
                <ul class="dropdown-menu">
                  <li><a className={`dropdown-item ${lang == "EN" ? "active" : ""}`} onClick={() => changeCurrLang("EN")}>English</a></li>
                  <li><a className={`dropdown-item ${lang == "AR" ? "active" : ""}`} onClick={() => changeCurrLang("AR")} >العربية</a></li>
                </ul>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}