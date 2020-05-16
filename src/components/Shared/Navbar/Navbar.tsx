import React from 'react';
import './Navbar.scss';
import { default as NavbarBootstrap } from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import config from '../../../config/config';
import Analytics from '../../../utils/analytics/Analytics';

export default function Navbar() {
  const handleClick = (e: any) => {
    const dataUrl = e.currentTarget.getAttribute('data-title');

    if (dataUrl) {
      Analytics.onClick(dataUrl);
    }
  };

  return (
    <NavbarBootstrap collapseOnSelect fixed="top" variant="dark" expand="md" className="p-0">
      <Link href="/">
        <NavbarBootstrap.Brand
          as={'a'}
          className="mr-md-5 mr-0"
          data-title="Logo"
          onClick={handleClick}
        >
          <span className="p-3">Jordan Barbosa</span>
        </NavbarBootstrap.Brand>
      </Link>
      <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" className="p-2">
        MENU <i className="fas fa-bars"></i>
      </NavbarBootstrap.Toggle>
      <NavbarBootstrap.Collapse id="responsive-navbar-nav">
        <Nav fill>
          <Nav.Item>
            <Link href="/">
              <Nav.Link as={'a'} className="nav-link">
                HOME
              </Nav.Link>
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link href="/about">
              <Nav.Link as={'a'} className="nav-link">
                ABOUT
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/projects">
              <Nav.Link as={'a'} className="nav-link">
                PROJECTS
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/contact">
              <Nav.Link as={'a'} className="nav-link">
                CONTACT
              </Nav.Link>
            </Link>
          </Nav.Item>
        </Nav>

        <Nav className="ml-auto social-links d-flex flex-row justify-content-center pr-2">
          <Link href="https://github.com/jordanjordanb1/" prefetch={false}>
            <Nav.Link
              as={'a'}
              target="_blank"
              rel="noopener noreferer"
              data-title="Github Link"
              onClick={handleClick}
            >
              <i className="fab fa-github mt-2"></i>
            </Nav.Link>
          </Link>

          <Link href="https://www.linkedin.com/in/jordan-barbosa/" prefetch={false}>
            <Nav.Link
              as={'a'}
              rel="noopener noreferer"
              data-title="LinkedIn Link"
              onClick={handleClick}
              target="_blank"
            >
              <i className="fab fa-linkedin mt-2"></i>
            </Nav.Link>
          </Link>

          <Link
            href="mailto: jordansbarbosa01@gmail.com?subject=Contact from your website"
            prefetch={false}
          >
            <Nav.Link
              as={'a'}
              rel="noopener noreferer"
              data-title="Email Link"
              onClick={handleClick}
            >
              <i className="far fa-envelope mt-2"></i>
            </Nav.Link>
          </Link>

          <Link href={`${config.getStatic()}/resume/resume.pdf`} prefetch={false}>
            <Nav.Link
              as={'a'}
              data-title="Resume Link - Navbar"
              onClick={handleClick}
              target="_blank"
            >
              <Button className="p-1 px-2 resume-button">RESUME</Button>
            </Nav.Link>
          </Link>
        </Nav>
      </NavbarBootstrap.Collapse>
    </NavbarBootstrap>
  );
}
