import { serverFunction } from "../_utils/server-utils";

export default function ServerRoutePage() {
    console.log(serverFunction());

    return <h1>Server route</h1>;
}
