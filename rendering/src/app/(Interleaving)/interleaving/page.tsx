import { ClientComponentOne } from "./client-component-one";
import { ServerComponentOne } from "./server-component-one";

export default function InterLeavingPage() {
  return (
    <>
      <h1>Interleaving page</h1>
      <ServerComponentOne />
      <ClientComponentOne />
      {/* Server inside client */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
