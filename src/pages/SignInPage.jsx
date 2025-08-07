import SignIn from "../components/signin/SignIn";

const userData = {
    email: 'hzpan8@uw.edu',
    password: 'wander123'
};

export default function SignInPage() {
    return <SignIn userData={userData} />;
}
