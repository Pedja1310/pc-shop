import { useSelector } from "react-redux";
import WishlistItem from "./WishlistItem";

const UserWishlist = () => {
  const user = useSelector((state) => state.users.currentUser);

  return (
    <div className="d-flex flex-column align-items-center">
      <h5 className="mb-3">User Wishlist</h5>
      {!user.hasOwnProperty("wishlist") && <p>Login to see the wishlist</p>}
      {user.wishlist?.length === 0 && <p>Wishlist is currently empty.</p>}
      {user.wishlist?.map((item) => (
        <WishlistItem key={item._id} product={item} />
      ))}
    </div>
  );
};

export default UserWishlist;
