import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";

export const PageNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Abhinish Raj</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        
        <span className="badge bagde-pill badge-secondary">{props.totalCounters}</span>
      </Navbar>
    </div>
  );
};


