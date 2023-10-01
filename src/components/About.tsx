import React from "react";


function About<T extends { title: string; data: string }>(
  props: T
): React.ReactElement {
  const { title, data } = props;
  

  return (
    <div
      style={{
        border: "1px solid palegreen",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      {title} - {data}
    </div>
  );
}

export default About;
