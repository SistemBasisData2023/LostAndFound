import AdminListLost from "./AdminListLost";
import { useNavigate } from 'react-router-dom';
import AdminGetUser from "./AdminGetUser";
import AdminListFound from "./AdminListFound";

function AdminHome() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user_id');
        window.location.href = '/';
      };

    return (
        <>
            <h1>Admin Home</h1>
            <button onClick={handleLogout}>Logout</button>
            <AdminListLost />
            <AdminListFound />
            <AdminGetUser />
        </>
    );
}
export default AdminHome;