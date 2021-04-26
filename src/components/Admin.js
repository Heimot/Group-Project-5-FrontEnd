import AddUserManually from "./AddUserManually";
import AllUsers from "./AllUsers";
import SearchAllProducts from "./SearchAllProducts";
import AddProductManually from "./AddProductManually";





export default function Admin() {
    return (
            <div>
                    <AddUserManually />
                    <AllUsers />
                    <AddProductManually />
                    <SearchAllProducts />
            </div>
    );
}