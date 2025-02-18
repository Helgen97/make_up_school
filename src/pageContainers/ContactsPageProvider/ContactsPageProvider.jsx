import React from "react";
import AuthProvider from "../../auth/AuthProvider";
import ContactsPage from "../../components/ContactsPage"

const ContactsPageProvider = () => {
  return (
    <AuthProvider>
      <ContactsPage />
    </AuthProvider>
  );
};

export default ContactsPageProvider;
