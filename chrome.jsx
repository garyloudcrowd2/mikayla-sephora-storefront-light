// Sephora chrome — minimal black header that anchors the page to sephora.com
const SephoraChrome = () => (
  <header className="sephora-chrome">
    <div className="sc-row">
      <div className="sc-left">
        <button className="sc-burger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <a className="sc-logo" href="#">SEPHORA</a>
      </div>
      <nav className="sc-nav">
        <a href="#">New</a>
        <a href="#">Brands</a>
        <a href="#">Makeup</a>
        <a href="#">Skincare</a>
        <a href="#">Hair</a>
        <a href="#">Fragrance</a>
        <a href="#" className="sc-active">Creators</a>
        <a href="#">Sale</a>
      </nav>
      <div className="sc-right">
        <div className="sc-search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
          <span>Search</span>
        </div>
        <a href="#" className="sc-icon" aria-label="Stores">📍 Stores</a>
        <a href="#" className="sc-icon" aria-label="Account">Sign In</a>
        <a href="#" className="sc-icon" aria-label="Bag">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>
          <span className="sc-bag-count">2</span>
        </a>
      </div>
    </div>
    <div className="sc-bread">
      <span>Sephora</span>
      <span className="sc-sep">/</span>
      <span>Creators</span>
      <span className="sc-sep">/</span>
      <span className="sc-current">Aria Okafor</span>
    </div>
  </header>
);

window.SephoraChrome = SephoraChrome;
