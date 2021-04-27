import AddUserManually from "./AddUserManually";
import AllUsers from "./AllUsers";
import AdminPicture from "./adminPicture";




export default function Admin() {
    return (
            <div>
                    <AddUserManually />
                    <AllUsers />
                    <AdminPicture />
            </div>
    );
}