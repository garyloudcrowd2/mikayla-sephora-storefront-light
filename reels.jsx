// Reels rail — three shop-the-look interaction variations
// stl1: timestamped product cards drift in beside video as creator applies them
// stl2: tap pause → hotspots bloom on the model's face for each product used
// stl3: bottom drawer with product carousel that scrubs with the video

const PlayIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M7 5v14l12-7z"/></svg>
);

// Format mm:ss
const fmtTime = (s) => {
  const m = Math.floor(s / 60); const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

// ─── Variant 1: Timeline products beside video ─────────────────────────
const ReelTimeline = ({ reel, active, onClose }) => {
  const [t, setT] = React.useState(0);
  const total = 92; // seconds
  React.useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      setT(prev => (prev + 0.4) % total);
    }, 100);
    return () => clearInterval(id);
  }, [active]);

  const tl = TIMELINES[reel.id] || [];
  const visibleSteps = tl.filter(s => t >= s.t).slice(-3);
  const currentStep = tl.filter(s => t >= s.t).slice(-1)[0];

  return (
    <div className="reel-modal">
      <button className="rm-close" onClick={onClose}>×</button>
      <div className="rm-stage rm-stage-timeline">
        <div className="rm-video">
          <video src={reel.video} poster={reel.poster} autoPlay muted loop playsInline className="rm-video-el" />
          <div className="rm-video-grain"></div>
          <div className="rm-overlay-meta">
            <div className="rm-overlay-tag">{reel.tag}</div>
            <h3>{reel.title}</h3>
          </div>
          <div className="rm-progress">
            <div className="rm-progress-bar" style={{width: `${(t/total)*100}%`}}></div>
            {tl.map(s => (
              <div key={s.t} className="rm-progress-mark" style={{left: `${(s.t/total)*100}%`}}></div>
            ))}
          </div>
          <div className="rm-time">{fmtTime(t)} / {fmtTime(total)}</div>
        </div>
        <div className="rm-side">
          <div className="rm-side-head">
            <div className="rm-side-eyebrow">EXPLORE PRODUCTS · LIVE</div>
            <div className="rm-side-title">As Mikayla applies →</div>
          </div>
          <div className="rm-side-list">
            {tl.map((s, i) => {
              const p = PRODUCTS[s.id];
              const reached = t >= s.t;
              const isCurrent = currentStep && currentStep.t === s.t;
              return (
                <div key={i} className={`rm-side-item ${reached ? "reached" : ""} ${isCurrent ? "current" : ""}`}>
                  <div className="rm-side-step">
                    <span className="rm-side-stepn">0{i+1}</span>
                    <span className="rm-side-stept">{fmtTime(s.t)}</span>
                  </div>
                  <div className="rm-side-card">
                    <div className="rm-side-img" style={{background: p.color}}>
                      <img src={p.img} alt={p.name} />
                    </div>
                    <div className="rm-side-info">
                      <div className="rm-side-brand">{p.brand}</div>
                      <div className="rm-side-name">{p.name}</div>
                      <div className="rm-side-foot">
                        <span>{s.step}</span>
                        <button className="rm-add">+ Add ${p.price}</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="rm-shopall">Shop all {tl.length} products · ${tl.reduce((s,x)=>s+PRODUCTS[x.id].price,0)}</button>
        </div>
      </div>
    </div>
  );
};

// ─── Variant 2: Pause → face hotspots ──────────────────────────────────
const ReelHotspots = ({ reel, onClose }) => {
  const [paused, setPaused] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  const hs = HOTSPOTS[reel.id] || [];

  return (
    <div className="reel-modal">
      <button className="rm-close" onClick={onClose}>×</button>
      <div className="rm-stage rm-stage-hotspots">
        <div className="rm-video rm-video-tall" onClick={() => setPaused(!paused)}>
          <video src={reel.video} poster={reel.poster} autoPlay muted loop playsInline className="rm-video-el" />
          <div className="rm-video-grain"></div>
          {!paused && (
            <div className="rm-tap-hint">
              <span>Tap video to pause</span>
              <span className="rm-tap-hint-sub">→ shop what Mikayla's wearing</span>
            </div>
          )}
          {paused && hs.map(h => (
            <div key={h.id} className="rm-hotspot" style={{left: `${h.x}%`, top: `${h.y}%`}} onMouseEnter={() => setHovered(h.id)} onMouseLeave={() => setHovered(null)}>
              <div className="rm-hotspot-dot"></div>
              <div className="rm-hotspot-ring"></div>
              <div className="rm-hotspot-label">{h.label}</div>
              {hovered === h.id && (
                <div className="rm-hotspot-card">
                  <div className="rm-hotspot-img" style={{background: PRODUCTS[h.id].color}}>
                    <img src={PRODUCTS[h.id].img} alt="" />
                  </div>
                  <div className="rm-hotspot-info">
                    <div className="rm-side-brand">{PRODUCTS[h.id].brand}</div>
                    <div className="rm-side-name">{PRODUCTS[h.id].name}</div>
                    <button className="rm-add">+ ${PRODUCTS[h.id].price}</button>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="rm-overlay-meta rm-overlay-meta-tall">
            <div className="rm-overlay-tag">{reel.tag}</div>
            <h3>{reel.title}</h3>
          </div>
          <div className="rm-paused-badge">{paused ? "PAUSED · TAP A DOT" : "PLAYING"}</div>
        </div>
      </div>
    </div>
  );
};

// ─── Variant 3: Scrub drawer ───────────────────────────────────────────
const ReelDrawer = ({ reel, onClose }) => {
  const [t, setT] = React.useState(0);
  const total = 92;
  const tl = TIMELINES[reel.id] || [];
  const activeIdx = Math.max(0, tl.findIndex((s, i) => {
    const next = tl[i+1];
    return t >= s.t && (!next || t < next.t);
  }));

  return (
    <div className="reel-modal">
      <button className="rm-close" onClick={onClose}>×</button>
      <div className="rm-stage rm-stage-drawer">
        <div className="rm-video rm-video-cinema">
          <video src={reel.video} poster={reel.poster} autoPlay muted loop playsInline className="rm-video-el" />
          <div className="rm-video-grain"></div>
          <div className="rm-overlay-meta">
            <div className="rm-overlay-tag">{reel.tag}</div>
            <h3>{reel.title}</h3>
          </div>
        </div>
        <div className="rm-scrub">
          <input type="range" min="0" max={total} step="0.1" value={t} onChange={(e) => setT(parseFloat(e.target.value))}/>
          <div className="rm-scrub-time">{fmtTime(t)} / {fmtTime(total)}</div>
        </div>
        <div className="rm-drawer">
          <div className="rm-drawer-head">
            <div className="rm-side-eyebrow">EXPLORE PRODUCTS · SCRUB TO REVEAL</div>
            <div>{tl.length} products · ${tl.reduce((s,x)=>s+PRODUCTS[x.id].price,0)}</div>
          </div>
          <div className="rm-drawer-rail">
            {tl.map((s, i) => {
              const p = PRODUCTS[s.id];
              return (
                <div key={i} className={`rm-drawer-card ${i === activeIdx ? "active" : ""}`} onClick={() => setT(s.t)}>
                  <div className="rm-drawer-img" style={{background: p.color}}>
                    <img src={p.img} alt={p.name} />
                  </div>
                  <div className="rm-drawer-info">
                    <div className="rm-drawer-step">{fmtTime(s.t)} · {s.step}</div>
                    <div className="rm-side-brand">{p.brand}</div>
                    <div className="rm-side-name">{p.name}</div>
                    <button className="rm-add">+ ${p.price}</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ReelModal = ({ reel, variant, onClose }) => {
  if (!reel) return null;
  if (variant === "hotspots") return <ReelHotspots reel={reel} onClose={onClose} />;
  if (variant === "drawer") return <ReelDrawer reel={reel} onClose={onClose} />;
  return <ReelTimeline reel={reel} active={true} onClose={onClose} />;
};

const ReelsRail = ({ onOpen }) => {
  return (
    <section className="reels">
      <div className="section-head">
        <div className="section-eye">CHAPTER 02 · TUTORIALS</div>
        <h2 className="section-title">The technique. <em>The exact products.</em></h2>
        <p className="section-sub">Tap any reel to open Mikayla's masterclass. Explore products as she applies them.</p>
      </div>
      <div className="reels-rail">
        {REELS.map(r => (
          <button key={r.id} className="reel-card" onClick={() => onOpen(r)}>
            <div className="reel-poster">
              <img src={r.poster} alt={r.title} />
              <div className="reel-grain"></div>
              <div className="reel-tag">{r.tag}</div>
              <div className="reel-play"><PlayIcon size={16} /></div>
              <div className="reel-meta">
                <span>{r.duration}</span>
                <span className="reel-dot">·</span>
                <span>{r.views} views</span>
              </div>
            </div>
            <div className="reel-info">
              <div className="reel-title">{r.title}</div>
              <div className="reel-products">
                {r.products.slice(0, 4).map(pid => (
                  <div key={pid} className="reel-prod-pip" style={{background: PRODUCTS[pid].color}}>
                    <img src={PRODUCTS[pid].img} alt="" />
                  </div>
                ))}
                <span className="reel-prod-count">{r.products.length} products</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

window.ReelsRail = ReelsRail;
window.ReelModal = ReelModal;
