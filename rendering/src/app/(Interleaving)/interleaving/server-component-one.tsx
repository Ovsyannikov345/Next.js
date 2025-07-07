import fs from "fs";
import { ServerComponentTwo } from "./server-component-two";
import { ClientComponentOne } from "./client-component-one";

export const ServerComponentOne = () => {
  fs.readFileSync(
    "src/app/(Interleaving)/interleaving/server-component-one.tsx",
    "utf-8"
  );

  return (
    <>
      <h1>Server component one</h1>
      {/* Server inside server */}
      <ServerComponentTwo />
      {/* Client inside server */}
      <ClientComponentOne />
    </>
  );
};
