import Login from "../components/login/Login";

const userData = {
    email: 'hzpan8@uw.edu',
    password: 'wander123'
};

export default function LoginPage() {
    return <Login userData={userData}/>;
}
