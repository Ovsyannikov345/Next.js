import "server-only";

export const serverFunction = () => {
    console.log("this is server function only");

    return "server result";
};
