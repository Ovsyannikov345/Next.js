"use client";

import { useEffect, useState } from "react";
import { ClientComponentTwo } from "./client-component-two";

export const ClientComponentOne = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName("Name");
  }, []);

  return (
    <>
      <h1>Client component one {name}</h1>
      {/* Client inside client */}
      <ClientComponentTwo />
      {children}
    </>
  );
};
