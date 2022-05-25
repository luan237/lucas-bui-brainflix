import "./Header.scss";
import headerLogo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
function Header(props) {
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
        <img className="header__search-bar--avatar" alt="avatar" src={avatar} />
      </div>
      {/* UPLOAD BAR */}
      <div className="header__upload">
        <img
          src={uploadIcon}
          className="header__upload--icon"
          alt="upload icon"
        />
        <p className="header__upload--text">UPLOAD</p>
      </div>
    </header>
  );
}

export default Header;
