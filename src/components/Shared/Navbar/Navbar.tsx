import Analytics from '@/analytics/Analytics';
import React from 'react';
import NavItem from './NavItem/NavItem';
import AppBar from '@material-ui/core/AppBar';
import Branding from './Branding/Branding';
import RightSideNav from './RightSideNav/RightSideNav';
import { StyledToolbar, StyledTabs } from './Navbar.style';

type Position = 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';

type NavbarProps = {
  position?: Position;
  elevation: number;
  analytics?: boolean;
};

const Navbar: React.SFC<NavbarProps> = ({ position = 'fixed', elevation, analytics = true }) => {
  const handleClick = (e: any) => {
    if (analytics) {
      const dataUrl = e.currentTarget.getAttribute('data-title');

      if (dataUrl) {
        return Analytics.onClick(dataUrl);
      }
    }

    return false;
  };

  return (
    <AppBar position={position} color="transparent" elevation={elevation}>
      <StyledToolbar>
        <Branding
          variant="h6"
          href="/"
          handleClick={analytics ? handleClick : undefined}
          analyticsTitle="Branding - Navbar"
        >
          Jordan Barbosa
        </Branding>

        <StyledTabs value={false}>
          <NavItem
            href="/"
            text="home"
            handleClick={analytics ? handleClick : undefined}
            analyticsTitle="Home - Navbar"
          />

          <NavItem
            href="/about"
            text="about"
            handleClick={analytics ? handleClick : undefined}
            analyticsTitle="About - Navbar"
          />

          <NavItem
            href="/projects"
            text="projects"
            handleClick={analytics ? handleClick : undefined}
            analyticsTitle="Projects - Navbar"
          />

          <NavItem
            href="/contact"
            text="contact"
            handleClick={analytics ? handleClick : undefined}
            analyticsTitle="Contact - Navbar"
          />
        </StyledTabs>

        <RightSideNav />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;

// <NavbarBootstrap collapseOnSelect fixed="top" variant="dark" expand="md" className="p-0">
//   <Link href="/">
//     <NavbarBootstrap.Brand
//       as={'a'}
//       className="mr-md-5 mr-0"
//       data-title="Logo"
//       onClick={handleClick}
//     >
//       <span className="p-3">Jordan Barbosa</span>
//     </NavbarBootstrap.Brand>
//   </Link>
//   <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" className="p-2">
//     MENU <i className="fas fa-bars"></i>
//   </NavbarBootstrap.Toggle>
//   <NavbarBootstrap.Collapse id="responsive-navbar-nav">
//     <Nav fill>
//       <NavItem href="/" text="home" />
//       <NavItem href="/about" text="about" />
//       <NavItem href="/projects" text="projects" />
//       <NavItem href="/contact" text="contact" />
//     </Nav>

//     <Nav className="ml-auto social-links d-flex flex-row justify-content-center pr-2">
//       <Link href="https://github.com/jordanjordanb1/" prefetch={false}>
//         <Nav.Link
//           as={'a'}
//           target="_blank"
//           rel="noopener noreferer"
//           data-title="Github Link"
//           onClick={handleClick}
//         >
//           <i className="fab fa-github mt-2"></i>
//         </Nav.Link>
//       </Link>

//       <Link href="https://www.linkedin.com/in/jordan-barbosa/" prefetch={false}>
//         <Nav.Link
//           as={'a'}
//           rel="noopener noreferer"
//           data-title="LinkedIn Link"
//           onClick={handleClick}
//           target="_blank"
//         >
//           <i className="fab fa-linkedin mt-2"></i>
//         </Nav.Link>
//       </Link>

//       <Link
//         href="mailto: jordansbarbosa01@gmail.com?subject=Contact from your website"
//         prefetch={false}
//       >
//         <Nav.Link
//           as={'a'}
//           rel="noopener noreferer"
//           data-title="Email Link"
//           onClick={handleClick}
//         >
//           <i className="far fa-envelope mt-2"></i>
//         </Nav.Link>
//       </Link>

//       <Link href={`${config.getStatic()}/resume/resume.pdf`} prefetch={false}>
//         <Nav.Link
//           as={'a'}
//           data-title="Resume Link - Navbar"
//           onClick={handleClick}
//           target="_blank"
//         >
//           <Button className="p-1 px-2 resume-button">RESUME</Button>
//         </Nav.Link>
//       </Link>
//     </Nav>
//   </NavbarBootstrap.Collapse>
// </NavbarBootstrap>
