import { useSelector } from "react-redux";

const UserWishlist = ({ userWishlist }) => {
  const { wishlist } = useSelector((state) => state.users.currentUser);

  return (
    <div>
      {wishlist.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default UserWishlist;
