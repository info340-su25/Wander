import UpdateAccount from "../components/update-account/UpdateAccount"

const userData = {
    email: 'hzpan8@uw.edu',
    password: 'wander123'
};

export default function UpdateAccountPage() {
    return <UpdateAccount userData={userData} />
}