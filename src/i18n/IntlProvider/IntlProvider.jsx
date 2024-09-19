import { useMemo } from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";
import getMessages from "..";

const IntlProvider = ({ children, lang }) => {
  const messages = useMemo(() => getMessages(lang), [lang]);

  return (
    <ReactIntlProvider defaultLocale="ukr" locale={lang} messages={messages}>
      {children}
    </ReactIntlProvider>
  );
};
export default IntlProvider;
