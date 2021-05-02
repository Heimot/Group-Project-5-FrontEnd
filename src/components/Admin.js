import AddUserManually from "./AddUserManually";
import AllUsers from "./AllUsers";
import AdminPicture from "./adminPicture";
import SearchAllProducts from "./SearchAllProducts";
import AddProductManually from "./AddProductManually";
import { useHistory } from "react-router";

export default function Admin() {
  let history = useHistory();
  if (JSON.parse(localStorage.getItem("user")).role !== "2") {
    history.push("/");
  }

  return (
    <div>
      <AddUserManually />
      <AllUsers />
      <AddProductManually />
      <SearchAllProducts />
    </div>
  );
}
