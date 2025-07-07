"use client";

import { useEffect, useState } from "react";

// Placed as below as possible
export const NavSearch = () => {
  console.log("Nav search rendered");

  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch("");
  }, []);

  return <h2>This is nav search {search}</h2>;
};
