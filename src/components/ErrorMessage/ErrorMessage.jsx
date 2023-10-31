import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <>
      <span role="img" aria-label="emoji">
        ⚠️ {children}
      </span>
    </>
  );
};

export default ErrorMessage;
