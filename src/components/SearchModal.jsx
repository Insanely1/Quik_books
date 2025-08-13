"use client"

import { useState } from "react"

const SearchModal = ({ show, onHide }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  // Mock search data
  const mockData = [
    "Private Limited Company Registration",
    "GST Registration",
    "Trademark Registration",
    "Income Tax Return Filing",
    "LLP Registration",
    "Partnership Firm Registration",
    "Copyright Registration",
    "FSSAI License",
    "ESI Registration",
    "Annual Filing",
    "Director KYC",
    "Company Strike Off",
    "Tax Planning",
    "Legal Consultation",
  ]

  const handleSearch = (query) => {
    setSearchQuery(query)
    if (query.length > 2) {
      setIsSearching(true)
      // Simulate API call delay
      setTimeout(() => {
        const results = mockData.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
        setSearchResults(results)
        setIsSearching(false)
      }, 300)
    } else {
      setSearchResults([])
    }
  }

  const handleClose = () => {
    setSearchQuery("")
    setSearchResults([])
    onHide()
  }

  if (!show) return null

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title">Search Services</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text">
                  <svg width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for services, registrations, compliance..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  autoFocus
                />
              </div>
            </div>

            {isSearching && (
              <div className="text-center py-3">
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <span className="ms-2">Searching...</span>
              </div>
            )}

            {searchResults.length > 0 && (
              <div className="search-results">
                <h6 className="mb-3">Search Results ({searchResults.length})</h6>
                <div className="list-group">
                  {searchResults.map((result, index) => (
                    <a key={index} href="#" className="list-group-item list-group-item-action" onClick={handleClose}>
                      <div className="d-flex align-items-center">
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-right me-2"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                        {result}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {searchQuery.length > 2 && searchResults.length === 0 && !isSearching && (
              <div className="text-center py-4 text-muted">
                <svg width="48" height="48" fill="currentColor" className="bi bi-search mb-3" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <p>No results found for "{searchQuery}"</p>
                <small>Try searching for different keywords</small>
              </div>
            )}

            {searchQuery.length === 0 && (
              <div className="popular-searches">
                <h6 className="mb-3">Popular Searches</h6>
                <div className="d-flex flex-wrap gap-2">
                  {["Company Registration", "GST Registration", "Trademark", "Income Tax", "Annual Filing"].map(
                    (tag, index) => (
                      <button key={index} className="btn btn-outline-primary btn-sm" onClick={() => handleSearch(tag)}>
                        {tag}
                      </button>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal
