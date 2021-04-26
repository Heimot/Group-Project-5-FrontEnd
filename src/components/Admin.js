import AddUserManually from "./AddUserManually";
import AllUsers from "./AllUsers";
import SearchAllProducts from "./SearchAllProducts";




export default function Admin() {
    return (
            <div>
                    <AddUserManually />
                    <AllUsers />
                    <SearchAllProducts />
            </div>
    );
}