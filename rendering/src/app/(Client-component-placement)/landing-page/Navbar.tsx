import NavLinks from "./NavLinks";
import { NavSearch } from "./NavSearch";

export default function Navbar() {
  console.log("Navbar rendered");

  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
}
