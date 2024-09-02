import { useState } from "react";
import { useUser } from "../../Shared/context/user-context";
import { Btn, LinkList, ListItem, Nav, StyledLink } from "./styles";
import Avatar from "../Avatar";
import Button from "../Button";

const Navbar = () => {
  const { user, logoutUser } = useUser();
  const [activePage, setActivePage] = useState("home");

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <Nav>
      <div className="logo">Logo</div>
      <LinkList>
        <ListItem>
          <StyledLink
            to="/home"
            onClick={() => setActivePage("home")}
            active={activePage === "home" ? "true" : "false"}
          >
            Home
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink
            to="/guarantee"
            onClick={() => setActivePage("guarantee")}
            active={activePage === "guarantee" ? "true" : "false"}
          >
            Guarantee
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink
            to="/about"
            onClick={() => setActivePage("about")}
            active={activePage === "about" ? "true" : "false"}
          >
            About us
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink
            to="contact"
            onClick={() => setActivePage("contact")}
            active={activePage === "contact" ? "true" : "false"}
          >
            Contact us
          </StyledLink>
        </ListItem>
      </LinkList>
      <div className="cta">
        {user && <Btn to="/cart">Cart</Btn>}
        {user ? (
          <Button variant="text" onClick={handleLogout}>
            <Avatar name={user.username} />
          </Button>
        ) : (
          <Btn to="/userAccess">Sign up | Login</Btn>
        )}
      </div>
    </Nav>
  );
};

export default Navbar;
