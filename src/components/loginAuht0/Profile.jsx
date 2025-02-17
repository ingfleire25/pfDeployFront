import { useAuth0 } from "@auth0/auth0-react"
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
    //console.log(user )
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <p>{user.name}</p>
      </div>
    )
  );
};

export default Profile;