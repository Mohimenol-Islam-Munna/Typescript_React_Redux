import React from "react";
import { ContactType } from "../types";

const Contact: React.FC<ContactType<string>> = <T extends string>({
  title,
  data,
}: ContactType<T>): JSX.Element => {
  return (
    <div
      style={{ border: "1px solid salmon", padding: "20px", marginTop: "20px" }}
    >
      {title} - {data}
    </div>
  );
};

export default Contact;
