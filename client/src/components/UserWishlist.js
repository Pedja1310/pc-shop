import { useSelector } from "react-redux";

const UserWishlist = ({ userWishlist }) => {
  const user = useSelector((state) => state.users.currentUser);

  return (
    <div>
      {!user.hasOwnProperty("wishlist") && <p>Log In to see the wishlist</p>}
      {user.wishlist?.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default UserWishlist;
