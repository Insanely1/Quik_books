"use client"

import { useState, useEffect } from "react"
import SearchModal from "./SearchModal"
import LoginModal from "./LoginModal"
import SignUpModal from "./SignUpModal"
import { Menu, X } from "lucide-react" // Importing icons from lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null) // State for mobile dropdowns

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && isOpen) {
        setIsOpen(false)
        setActiveMobileDropdown(null)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setActiveMobileDropdown(null) // Close any open mobile dropdowns when main navbar closes
    }
  }

  const toggleMobileDropdown = (index) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index)
  }

  const navItems = [
    {
      name: "Startup",
      suboptions: [
        { name: "Proprietorship", category: "Individual" },
        { name: "Partnership", category: "Individual" },
        { name: "One Person Company", category: "Individual" },
        { name: "Limited Liability Partnership", category: "Individual" },
        { name: "Private Limited Company", category: "Individual" },
        { name: "Section 8 Company", category: "Domestic" },
        { name: "Trust Registration", category: "Domestic" },
        { name: "Public Limited Company", category: "Domestic" },
        { name: "Producer Company", category: "Domestic" },
        { name: "Indian Subsidiary", category: "Domestic" },
        { name: "UAE Company", category: "International" },
        { name: "USA Company", category: "International" },
        { name: "Singapore Company", category: "International" },
        { name: "UK Company", category: "International" },
      ],
    },
    {
      name: "Registrations",
      suboptions: [
        { name: "Company Registration", category: "Business" },
        { name: "LLP Registration", category: "Business" },
        { name: "Partnership Registration", category: "Business" },
        { name: "Proprietorship Registration", category: "Business" },
        { name: "Trust Registration", category: "Non-Profit" },
        { name: "Society Registration", category: "Non-Profit" },
        { name: "Producer Company", category: "Non-Profit" },
        { name: "Section 8 Company", category: "Non-Profit" },
      ],
    },
    {
      name: "Trademark",
      suboptions: [
        { name: "Trademark Registration", category: "Registration" },
        { name: "Trademark Search", category: "Registration" },
        { name: "Trademark Renewal", category: "Registration" },
        { name: "Trademark Opposition", category: "Legal" },
        { name: "Copyright Registration", category: "Legal" },
        { name: "Patent Registration", category: "Legal" },
        { name: "Design Registration", category: "Legal" },
      ],
    },
    {
      name: "GST",
      suboptions: [
        { name: "GST Registration", category: "Registration" },
        { name: "GST Return Filing", category: "Compliance" },
        { name: "GST Annual Return", category: "Compliance" },
        { name: "GST Cancellation", category: "Registration" },
        { name: "GST Amendment", category: "Registration" },
        { name: "Input Tax Credit", category: "Compliance" },
      ],
    },
    {
      name: "Income Tax",
      suboptions: [
        { name: "Income Tax Return", category: "Filing" },
        { name: "TDS Return Filing", category: "Filing" },
        { name: "Tax Planning", category: "Advisory" },
        { name: "Income Tax Notice", category: "Advisory" },
        { name: "Tax Audit", category: "Advisory" },
        { name: "PAN Application", category: "Registration" },
      ],
    },
    {
      name: "MCA",
      suboptions: [
        { name: "Annual Filing", category: "Compliance" },
        { name: "Director KYC", category: "Compliance" },
        { name: "Company Strike Off", category: "Closure" },
        { name: "Name Change", category: "Amendment" },
        { name: "Registered Office Change", category: "Amendment" },
        { name: "Share Transfer", category: "Amendment" },
      ],
    },
    {
      name: "Compliance",
      suboptions: [
        { name: "ROC Compliance", category: "Corporate" },
        { name: "Labour Law Compliance", category: "Corporate" },
        { name: "FSSAI License", category: "Licensing" },
        { name: "ESI Registration", category: "Licensing" },
        { name: "PF Registration", category: "Licensing" },
        { name: "Professional Tax", category: "Tax" },
      ],
    },
    {
      name: "Consultation",
      suboptions: [
        { name: "Legal Consultation", category: "Advisory" },
        { name: "Tax Consultation", category: "Advisory" },
        { name: "Business Consultation", category: "Advisory" },
        { name: "Compliance Consultation", category: "Advisory" },
        { name: "Startup Consultation", category: "Advisory" },
        { name: "Investment Consultation", category: "Advisory" },
      ],
    },
    {
      name: "Guides",
      suboptions: [
        { name: "Company Registration Guide" },
        { name: "GST Guide" },
        { name: "Income Tax Guide" },
        { name: "Trademark Guide" },
        { name: "Compliance Guide" },
        { name: "Startup Guide" },
      ],
    },
    {
      name: "About Us",
      suboptions: [
        { name: "Our Story" },
        { name: "Our Team" },
        { name: "Careers" },
        { name: "Contact Us" },
        { name: "Privacy Policy" },
        { name: "Terms of Service" },
      ],
    },
  ]

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid px-3 px-lg-4">
          {/* Logo */}
          <a className="navbar-brand me-auto" href="#">
            <img
              src="/logo.png"
              alt="India Filings"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>

          {/* Mobile toggle button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation items */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navItems.map((item, index) => (
                <li className={`nav-item ${item.suboptions ? "dropdown position-static" : ""}`} key={index}>
                  <a
                    className={`nav-link text-dark fw-normal px-3 ${item.suboptions ? "dropdown-toggle" : ""}`}
                    href="#"
                    id={`navbarDropdown${index}`}
                    role="button"
                    // For desktop, rely on CSS hover. For mobile, use Bootstrap collapse.
                    data-bs-toggle={window.innerWidth < 992 ? "collapse" : ""}
                    data-bs-target={window.innerWidth < 992 ? `#collapseSuboptions${index}` : ""}
                    aria-expanded={window.innerWidth < 992 ? activeMobileDropdown === index : false}
                    onClick={(e) => {
                      if (window.innerWidth < 992 && item.suboptions) {
                        e.preventDefault()
                        toggleMobileDropdown(index)
                      }
                    }}
                    style={{ fontSize: "14px" }}
                  >
                    {item.name}
                  </a>
                  {item.suboptions && (
                    // Desktop Mega Menu
                    <div className="d-none d-lg-block dropdown-menu mega-menu">
                      <div className="container">
                        <div className="row">
                          {item.name === "Startup" ? (
                            <>
                              <div className="col-md-4">
                                <h6 className="dropdown-header">Individual Business</h6>
                                {item.suboptions
                                  .filter((option) => option.category === "Individual")
                                  .map((suboption, subIndex) => (
                                    <a key={subIndex} className="dropdown-item" href="#">
                                      {suboption.name}
                                    </a>
                                  ))}
                              </div>
                              <div className="col-md-4">
                                <h6 className="dropdown-header">Domestic Companies</h6>
                                {item.suboptions
                                  .filter((option) => option.category === "Domestic")
                                  .map((suboption, subIndex) => (
                                    <a key={subIndex} className="dropdown-item" href="#">
                                      {suboption.name}
                                    </a>
                                  ))}
                              </div>
                              <div className="col-md-4">
                                <h6 className="dropdown-header">International</h6>
                                {item.suboptions
                                  .filter((option) => option.category === "International")
                                  .map((suboption, subIndex) => (
                                    <a key={subIndex} className="dropdown-item" href="#">
                                      {suboption.name}
                                    </a>
                                  ))}
                              </div>
                            </>
                          ) : (
                            <div className="col-12">
                              <div className="row">
                                {item.suboptions.map((suboption, subIndex) => (
                                  <div key={subIndex} className="col-md-6 col-lg-4">
                                    <a className="dropdown-item" href="#">
                                      {typeof suboption === "string" ? suboption : suboption.name}
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {item.suboptions && (
                    // Mobile Collapsible Suboptions
                    <div
                      className={`collapse d-lg-none ${activeMobileDropdown === index ? "show" : ""}`}
                      id={`collapseSuboptions${index}`}
                    >
                      <ul className="list-unstyled ps-3">
                        {item.suboptions.map((suboption, subIndex) => (
                          <li key={subIndex}>
                            <a className="dropdown-item mobile-dropdown-item" href="#">
                              {typeof suboption === "string" ? suboption : suboption.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Right side items */}
            <div className="d-flex align-items-center gap-3 ms-auto ms-lg-0">
              {/* Search icon */}
              <button className="btn btn-link p-0 border-0 text-dark" onClick={() => setShowSearch(true)}>
                <svg width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 0 1 1-11 0 5.5 0 0 1 11 0z" />
                </svg>
              </button>

              {/* Login link */}
              <button
                className="btn btn-link p-0 text-decoration-none text-dark fw-normal border-0"
                style={{ fontSize: "14px" }}
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>

              {/* Sign up button */}
              <button
                className="btn btn-primary px-3 py-2"
                style={{
                  fontSize: "14px",
                  backgroundColor: "#007bff",
                  borderColor: "#007bff",
                  borderRadius: "4px",
                }}
                onClick={() => setShowSignUp(true)}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <SearchModal show={showSearch} onHide={() => setShowSearch(false)} />
      <LoginModal show={showLogin} onHide={() => setShowLogin(false)} />
      <SignUpModal show={showSignUp} onHide={() => setShowSignUp(false)} />
    </>
  )
}

export default Navbar
