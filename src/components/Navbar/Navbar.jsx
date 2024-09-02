import { useState } from "react";
import { useUser } from "../../Shared/context/user-context";
import { Btn, LinkList, ListItem, Nav, StyledLink } from "./styles";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const { user, setUser } = useUser();
  const [activePage, setActivePage] = useState("home");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
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
        <Btn
          to="/cart"
          onClick={(e) => {
            if (!user) {
              e.preventDefault();
              setModalIsOpen(true);
            }
          }}
        >
          Cart
        </Btn>
        {user ? (
          <Btn onClick={handleLogout}>Logout</Btn>
        ) : (
          <Btn to="/userAccess">Sign up | Login</Btn>
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        title="Login"
        onClose={() => {
          setModalIsOpen(false);
        }}
      >
        Please login to visit your carts page.
      </Modal>
    </Nav>
  );
};

export default Navbar;
