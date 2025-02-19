import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacts,
  updateContacts,
} from "../../store/slices/contactsSlice";
import CenteredLoader from "../CenteredLoader";
import CenteredButton from "../CenteredButton";
import Grid from "../Grid";
import H3 from "../H3";
import TextFieldImpl from "../TextFieldImpl";

const ContactsPage = () => {
  const [contactsState, setContacts] = useState({
    id: 1,
    phone: "",
    workingHoursEn: "",
    workingHoursUA: "",
    addressEn: "",
    addressUa: "",
    instagram: "",
  });

  const labels = {
    phone: "Номер телефону",
    workingHoursEn: "Часи та дні роботи на англійській",
    workingHoursUA: "Часі та дні роботи на українській",
    addressEn: "Адреса школи на англійській",
    addressUa: "Адреса школи на українській",
    instagram: "Інстаграм школи",
  };

  const dispatch = useDispatch();

  const { contacts, isLoading, isError } = useSelector(
    (state) => state.contacts
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  useEffect(() => {
    setContacts(contacts);
  }, [contacts]);

  const update = () => {
    dispatch(updateContacts(contactsState));
  };

  return (
    <Grid
      container
      size={12}
      className="justify-content-center align-items-center text-center"
    >
      <Grid size={{ xs: 12, lg: 8 }} className="d-flex flex-column gap-3">
        <H3 content="Контактні дані" />

        {isLoading && <CenteredLoader />}

        {!isLoading && (
          <>
            {Object.keys(contactsState).map((key) => {
              if (key === "id") return <span key={key}></span>;
              return (
                <TextFieldImpl
                  key={key}
                  label={labels[key]}
                  helperText={labels[key]}
                  name={key}
                  value={contactsState[key]}
                  onChange={(event) =>
                    setContacts({ ...contactsState, [key]: event.target.value })
                  }
                />
              );
            })}
          </>
        )}

        <CenteredButton
          isError={isError}
          buttonText="Оновити контактні дані"
          onClick={update}
        />
      </Grid>
    </Grid>
  );
};

export default ContactsPage;
