// Storefront body sections — stat strip, signature kit, full grid, edits, reviews, footer

const StarSm = ({ size = 10, filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 17.8 5.8 21.3 7 14.3 2 9.4l7-.9z"/></svg>
);

const StatStrip = () => (
  <section className="statstrip">
    <div className="ss-item">
      <div className="ss-label">FOLLOWERS</div>
      <div className="ss-val">{CREATOR.followers}</div>
    </div>
    <div className="ss-item">
      <div className="ss-label">LOOKS PUBLISHED</div>
      <div className="ss-val">{CREATOR.looks}</div>
    </div>
    <div className="ss-item">
      <div className="ss-label">PRODUCTS CURATED</div>
      <div className="ss-val">{CREATOR.curated}</div>
    </div>
    <div className="ss-item">
      <div className="ss-label">RATING</div>
      <div className="ss-val ss-rating">{CREATOR.rating}<span className="ss-stars">{[1,2,3,4,5].map(i => <StarSm key={i} />)}</span></div>
    </div>
    <div className="ss-item ss-press">
      <div className="ss-label">AS SEEN IN</div>
      <div className="ss-press-list">
        <span>VOGUE</span>
        <span>·</span>
        <span>ALLURE</span>
        <span>·</span>
        <span>HARPER'S BAZAAR</span>
      </div>
    </div>
  </section>
);

const SignatureKit = ({ onAdd }) => {
  const products = SIGNATURE_KIT.map(id => PRODUCTS[id]);
  const total = products.reduce((s, p) => s + p.price, 0);
  return (
    <section className="signature">
      <div className="sig-portrait">
        <img src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=900&q=80&auto=format&fit=crop" alt="" />
        <div className="sig-portrait-cap">
          <div className="sig-portrait-eye">ON MIKAYLA TODAY</div>
          <div className="sig-portrait-name">The Signature</div>
        </div>
      </div>
      <div className="sig-side">
        <div className="section-eye">CHAPTER 01 · THE KIT</div>
        <h2 className="section-title sig-title">Five products. <em>One face she trusts.</em></h2>
        <p className="section-sub">"If I had to walk into a 6am call time with a single black case, this is what's in it." — Mikayla</p>
        <ol className="sig-list">
          {products.map((p, i) => (
            <li key={p.id} className="sig-item">
              <div className="sig-num">0{i+1}</div>
              <div className="sig-img" style={{background: p.color}}>
                <img src={p.img} alt={p.name} />
              </div>
              <div className="sig-info">
                <div className="sig-brand">{p.brand}</div>
                <div className="sig-name">{p.name}</div>
                <div className="sig-cat">{p.category}</div>
              </div>
              <div className="sig-price">${p.price}</div>
              <button className="sig-add" onClick={() => onAdd(p)}>+</button>
            </li>
          ))}
        </ol>
        <div className="sig-foot">
          <div className="sig-total">
            <span>Kit total</span>
            <b>${total}</b>
          </div>
          <button className="btn-pri sig-bundle">Add the full kit · Save 15%</button>
        </div>
      </div>
    </section>
  );
};

const ShopGrid = ({ onAdd }) => {
  const all = Object.values(PRODUCTS);
  const cats = ["All", "Complexion", "Eyes", "Cheeks", "Highlighter", "Skincare"];
  const [cat, setCat] = React.useState("All");
  const filtered = cat === "All" ? all : all.filter(p => p.category === cat);

  return (
    <section className="shopgrid">
      <div className="section-head">
        <div className="section-eye">CHAPTER 03 · MIKAYLA'S FULL KIT</div>
        <h2 className="section-title">Everything she's curated. <em>{Object.keys(PRODUCTS).length} pieces.</em></h2>
      </div>
      <div className="sg-filters">
        {cats.map(c => (
          <button key={c} className={`sg-chip ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>
        ))}
        <div className="sg-spacer"></div>
        <div className="sg-sort">Sort: Mikayla's pick order ↓</div>
      </div>
      <div className="sg-grid">
        {filtered.map(p => (
          <div key={p.id} className="sg-card">
            <div className="sg-img" style={{background: p.color}}>
              <img src={p.img} alt={p.name} />
              <button className="sg-quick" onClick={() => onAdd(p)}>+ Add to bag</button>
              <div className="sg-vid-pip" title="Featured in tutorial">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5v14l12-7z"/></svg>
              </div>
            </div>
            <div className="sg-info">
              <div className="sg-brand">{p.brand}</div>
              <div className="sg-name">{p.name}</div>
              <div className="sg-foot">
                <span className="sg-price">${p.price}</span>
                <span className="sg-rating"><StarSm size={9} /> 4.{6 + (parseInt(p.id.slice(1)) % 4)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Edits = () => (
  <section className="edits">
    <div className="section-head">
      <div className="section-eye">CHAPTER 04 · THE EDITS</div>
      <h2 className="section-title">Curated for the moment. <em>Curated by Mikayla.</em></h2>
    </div>
    <div className="edits-grid">
      {EDITS.map((e, i) => (
        <div key={e.id} className={`edit-card edit-${i}`}>
          <div className="edit-img">
            <img src={e.img} alt={e.name} />
            <div className="edit-grain"></div>
          </div>
          <div className="edit-body">
            <div className="edit-num">EDIT NO. 0{i+1}</div>
            <h3 className="edit-name">{e.name}</h3>
            <p className="edit-desc">{e.desc}</p>
            <div className="edit-foot">
              <span>{e.count} products</span>
              <button>Shop the edit →</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Reviews = () => (
  <section className="reviews">
    <div className="section-head">
      <div className="section-eye">CHAPTER 05 · THE COMMUNITY</div>
      <h2 className="section-title">{CREATOR.ratingCount} reviews. <em>From people who actually bought.</em></h2>
    </div>
    <div className="reviews-summary">
      <div className="rs-big">
        <div className="rs-num">{CREATOR.rating}</div>
        <div className="rs-stars">{[1,2,3,4,5].map(i => <StarSm key={i} size={16} />)}</div>
        <div className="rs-count">{CREATOR.ratingCount} verified reviews</div>
      </div>
      <div className="rs-bars">
        {[5,4,3,2,1].map(n => (
          <div key={n} className="rs-bar-row">
            <span className="rs-bar-n">{n}</span>
            <div className="rs-bar-track"><div className="rs-bar-fill" style={{width: `${n === 5 ? 88 : n === 4 ? 8 : n === 3 ? 2 : 1}%`}}></div></div>
            <span className="rs-bar-pct">{n === 5 ? "88" : n === 4 ? "8" : n === 3 ? "2" : "1"}%</span>
          </div>
        ))}
      </div>
    </div>
    <div className="reviews-grid">
      {REVIEWS.map((r, i) => (
        <article key={i} className="review-card">
          <div className="rev-head">
            <div className="rev-stars">{[1,2,3,4,5].slice(0, r.rating).map(i => <StarSm key={i} />)}</div>
            <span className="rev-verify">✓ Verified</span>
          </div>
          <p className="rev-body">"{r.body}"</p>
          <div className="rev-foot">
            <div>
              <div className="rev-name">{r.name}</div>
              <div className="rev-date">{r.date} · Bought via Mikayla's storefront</div>
            </div>
            <div className="rev-look">{r.look}</div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="storefront-footer">
    <div className="sf-cta">
      <div className="sf-eye">SEPHORA × MIKAYLA NOGUEIRA</div>
      <h2 className="sf-h">Shop her storefront <em>or book her.</em></h2>
      <div className="sf-actions">
        <button className="btn-pri">Shop the full kit</button>
        <button className="btn-sec-l">Follow on Sephora →</button>
        <button className="btn-sec-l">Book Mikayla for an event</button>
      </div>
    </div>
    <div className="sf-base">
      <span>© 2026 Sephora USA, Inc.</span>
      <span>·</span>
      <span>Storefront powered by creator program</span>
      <span>·</span>
      <a href="#">Become a Sephora creator</a>
    </div>
  </footer>
);

const MiniBag = ({ items, onClose }) => (
  <div className={`minibag ${items.length ? "has" : ""}`}>
    <div className="mb-row">
      <span><b>{items.length}</b> in bag · <b>${items.reduce((s, p) => s + p.price, 0)}</b></span>
      <div className="mb-pips">
        {items.slice(-4).map((p, i) => (
          <div key={i} className="mb-pip" style={{background: p.color}}>
            <img src={p.img} alt="" />
          </div>
        ))}
      </div>
      <button className="btn-pri mb-go">Checkout →</button>
    </div>
  </div>
);

Object.assign(window, { StatStrip, SignatureKit, ShopGrid, Edits, Reviews, Footer, MiniBag });
