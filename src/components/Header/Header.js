import "./Header.scss";
import headerLogo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
function Header() {
  return (
    <header className="header">
      {/* LOGO */}
      <img className="header__logo" src={headerLogo} alt="BrainFlix logo" />

      {/* SEARCH BAR */}
      <div className="header__search-bar">
        <div className="header__search-bar--container">
          <input
            className="search-bar"
            type="text"
            name="search"
            placeholder="Search"
          />
          <img
            className="search-bar--icon"
            src={searchIcon}
            alt="search icon"
          />
        </div>
        <div className="header__search-bar--avatar"></div>

        {/* UPLOAD BAR */}
        <button className="header__upload">
          <img
            src={uploadIcon}
            className="header__upload--icon"
            alt="upload icon"
          />
          <p className="header__upload--text sub-header">UPLOAD</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
