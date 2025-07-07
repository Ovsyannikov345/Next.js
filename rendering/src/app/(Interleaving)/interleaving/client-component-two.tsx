"use client";

import { useEffect, useState } from "react";

export const ClientComponentTwo = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName("Name");
  }, []);

  return <h1>Client component two {name}</h1>;
};
