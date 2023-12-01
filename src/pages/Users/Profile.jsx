import { useSelector } from "react-redux";

const Profile = () => {
  // Assuming you have a user state in your Redux store
  const user = useSelector((state) => state.user);

  // If the user is not authenticated, you might want to redirect them to the login page
  if (!user) {
    // Redirect logic or show a message
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="container max-w-6xl p-2">
      <h2 className="text-3xl font-bold mb-4">User Profile</h2>
      <div className="max-w-md">
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Name:</label>
          <p>{user.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Email:</label>
          <p>{user.email}</p>
        </div>
        {/* Add more user details as needed */}
      </div>
    </div>
  );
};

export default Profile;
