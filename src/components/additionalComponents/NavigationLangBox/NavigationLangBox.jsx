import * as APP_LANGUAGES from "../../../constants/languages";

const NavigationLangBox = ({ appLang, changeAppLangFunction }) => {
  function changeLanguage(event) {
    changeAppLangFunction(event.target.dataset.lang);
  }

  return (
    <div className="lang-box">
      {Object.values(APP_LANGUAGES).map((appLangItem) => {
        return (
          <button
            key={appLangItem.langAbbr}
            className={
              appLangItem.langIntlCode === appLang
                ? "lang-button lang_active"
                : "lang-button"
            }
            onClick={changeLanguage}
            data-lang={appLangItem.langIntlCode}
          >
            {appLangItem.langAbbr}
          </button>
        );
      })}
    </div>
  );
};

export default NavigationLangBox;
