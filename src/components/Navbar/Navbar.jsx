import { useState } from 'react';
import { useUserValue } from '../../Shared/context/user-context';
import { Btn, LinkList, ListItem, Nav, StyledLink } from './styles';
import { useModalValue } from '../../Shared/context/modal-context';
import messages from '../../Shared/utils/messages';

const Navbar = () => {
     const [user, setUser] = useUserValue();
     const [activePage, setActivePage] = useState('home');
     const setModalText = useModalValue()[1];

     return (
          <Nav>
               <div className="logo">Logo</div>
               <LinkList>
                    <ListItem>
                         <StyledLink
                              to="home"
                              onClick={() => setActivePage('home')}
                              active={activePage === 'home' ? 'true' : 'false'}
                         >
                              Home
                         </StyledLink>
                    </ListItem>
                    <ListItem>
                         <StyledLink
                              to="guarantee"
                              onClick={() => setActivePage('guarantee')}
                              active={
                                   activePage === 'guarantee' ? 'true' : 'false'
                              }
                         >
                              Guarantee
                         </StyledLink>
                    </ListItem>
                    <ListItem>
                         <StyledLink
                              to="about"
                              onClick={() => setActivePage('about')}
                              active={activePage === 'about' ? 'true' : 'false'}
                         >
                              About us
                         </StyledLink>
                    </ListItem>
                    <ListItem>
                         <StyledLink
                              to="contact"
                              onClick={() => setActivePage('contact')}
                              active={
                                   activePage === 'contact' ? 'true' : 'false'
                              }
                         >
                              Contact us
                         </StyledLink>
                    </ListItem>
               </LinkList>
               <div className="cta">
                    <Btn
                         to="cart"
                         onClick={(e) => {
                              if (!user) {
                                   setModalText(messages.shouldLogin);
                                   e.preventDefault();
                              }
                         }}
                    >
                         Cart
                    </Btn>
                    {user ? (
                         <Btn onClick={() => setUser(null)}>Logout </Btn>
                    ) : (
                         <Btn to="login">Login </Btn>
                    )}
               </div>
          </Nav>
     );
};

export default Navbar;
