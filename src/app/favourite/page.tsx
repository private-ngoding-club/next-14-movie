"use client";

// TODO : Wishlist page
// - [ ] Create a page that will display the user's wishlist
// - [ ] Show list of wishlisted movies
// - [ ] Add a button to remove a movie from the wishlist
// - [ ] Add a button to clear the wishlist
// - [ ] Use cards to display the movie

import { Auth } from "@/provider/auth";
import { useContext, useEffect } from "react";

const WishlishPage = () => {
  const { user } = useContext(Auth);

  useEffect(() => {
    console.log(user.favourite);
  }, []);

  return <div>page</div>;
};

export default WishlishPage;
