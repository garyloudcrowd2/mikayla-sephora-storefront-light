// Hero — three variations selected via tweaks
// h1: full-bleed reel + creator card
// h2: split editorial — portrait | name | stats
// h3: cinema marquee — poster grid + giant name

const Play = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M7 5v14l12-7z"/></svg>
);

const Star = ({ size = 11, filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 17.8 5.8 21.3 7 14.3 2 9.4l7-.9z"/></svg>
);

const HeroFullBleed = () => {
  const [muted, setMuted] = React.useState(true);
  const [playing, setPlaying] = React.useState(true);
  return (
    <section className="hero hero-fullbleed">
      <div className="hf-stage">
        <img className="hf-bg" src={CREATOR.cover} alt="" />
        <div className="hf-vignette"></div>

        {/* The autoplay vertical reel — the centerpiece */}
        <div className="hf-reel">
          <img src={HERO_REEL.poster} alt="" />
          <div className="hf-reel-grain"></div>
          <div className="hf-reel-progress"><div className="hf-reel-bar"></div></div>
          <div className="hf-reel-controls">
            <button onClick={() => setPlaying(!playing)} aria-label="Play/Pause">
              {playing ? <span className="pause-bars"><i></i><i></i></span> : <Play size={12} />}
            </button>
            <button onClick={() => setMuted(!muted)} aria-label="Mute">
              {muted ? "🔇" : "🔊"}
            </button>
          </div>
          <div className="hf-reel-caption">
            <div className="hf-reel-tag">NOW PLAYING</div>
            <div className="hf-reel-title">{HERO_REEL.caption}</div>
          </div>
        </div>

        {/* Creator info — left rail, editorial */}
        <div className="hf-info">
          <div className="hf-eyebrow">SEPHORA × CREATORS</div>
          <h1 className="hf-name">
            <span>Mikayla</span>
            <span className="hf-name-italic">Nogueira</span>
          </h1>
          <div className="hf-title">{CREATOR.title}</div>
          <p className="hf-bio">{CREATOR.bio}</p>
          <div className="hf-cta">
            <button className="btn-pri">Shop Mikayla's Kit</button>
            <button className="btn-sec">
              <Play size={10} /> Watch the masterclass
            </button>
          </div>
          <div className="hf-stats">
            <div><b>{CREATOR.followers}</b><span>followers</span></div>
            <div><b>{CREATOR.looks}</b><span>looks</span></div>
            <div><b>{CREATOR.curated}</b><span>curated</span></div>
            <div className="hf-rating">
              <b>{CREATOR.rating}</b>
              <span className="hf-stars">{[1,2,3,4,5].map(i => <Star key={i} />)}</span>
              <span>{CREATOR.ratingCount} reviews</span>
            </div>
          </div>
        </div>

        <div className="hf-floor">
          <div className="hf-floor-l">Storefront live · Updated 2 hours ago</div>
          <div className="hf-floor-r">Scroll to shop ↓</div>
        </div>
      </div>
    </section>
  );
};

const HeroSplit = () => (
  <section className="hero hero-split">
    <div className="hs-portrait">
      <img src={CREATOR.portrait} alt={CREATOR.name} />
      <div className="hs-portrait-tag">
        <Play size={10} /> 1:32 · Editorial Smoke
      </div>
    </div>
    <div className="hs-info">
      <div className="hf-eyebrow">SEPHORA × CREATORS · NO. 047</div>
      <h1 className="hs-name">
        Mikayla<br/>
        <em>Nogueira.</em>
      </h1>
      <div className="hs-rule"></div>
      <div className="hs-title">{CREATOR.title}</div>
      <p className="hs-bio">{CREATOR.bio}</p>
      <div className="hs-meta">
        <div className="hs-meta-row"><span>Followers</span><b>{CREATOR.followers}</b></div>
        <div className="hs-meta-row"><span>Looks published</span><b>{CREATOR.looks}</b></div>
        <div className="hs-meta-row"><span>Products curated</span><b>{CREATOR.curated}</b></div>
        <div className="hs-meta-row">
          <span>Rating</span>
          <b className="hs-rating">{CREATOR.rating} <span className="hf-stars">{[1,2,3,4,5].map(i => <Star key={i} size={9} />)}</span> · {CREATOR.ratingCount}</b>
        </div>
      </div>
      <div className="hf-cta">
        <button className="btn-pri">Shop Mikayla's Kit</button>
        <button className="btn-sec"><Play size={10} /> Watch masterclass</button>
      </div>
    </div>
  </section>
);

// Mikayla's actual TikTok clips, hosted in-project (CORS-safe).
const HERO_VIDEOS = [
  { url: "videos/mikayla-4.mp4", poster: "videos/mikayla-4-poster.jpg" },
  { url: "videos/mikayla-5.mp4", poster: "videos/mikayla-5-poster.jpg" },
  { url: "videos/mikayla-1.mp4", poster: "videos/mikayla-1-poster.jpg" },
  { url: "videos/mikayla-2.mp4", poster: "videos/mikayla-2-poster.jpg" },
  { url: "videos/mikayla-3.mp4", poster: "videos/mikayla-3-poster.jpg" },
];

// Restored original Cinema Marquee
const HeroMarquee = () => (
  <section className="hero hero-marquee">
    <div className="hm-eyebrow">
      <span>SEPHORA × CREATORS</span>
      <span>NO. 047 / FALL 2026</span>
    </div>
    <div className="hm-name">
      <span className="hm-line1">MIKAYLA</span>
      <span className="hm-line2">NOGUEIRA</span>
    </div>
    <div className="hm-tagline">
      <em>{CREATOR.title}</em> · {CREATOR.followers} followers · {CREATOR.looks} looks
    </div>
    <div className="hm-grid">
      {REELS.slice(0, 5).map((r, i) => (
        <div key={r.id} className={`hm-tile hm-tile-${i}`}>
          <img src={r.poster} alt={r.title} />
          <div className="hm-tile-grain"></div>
          <div className="hm-tile-meta">
            <Play size={10} />
            <span>{r.duration}</span>
          </div>
          <div className="hm-tile-title">{r.title}</div>
        </div>
      ))}
    </div>
    <div className="hm-floor">
      <button className="btn-pri">Shop Mikayla's Kit</button>
      <div className="hm-quote">"If I love it, you'll know — if I don't, you'll know louder." — Mikayla</div>
    </div>
  </section>
);

// NEW: Broadcast — vertical-reel TV-channel hero
const BROADCAST_REELS = [
  { ep: "01", tag: "MASTERCLASS", title: "Editorial Smoke", caption: "How I build dimensional smoke for runway and lens.", duration: "1:32", products: 4, viewers: "2.1k", video: HERO_VIDEOS[0] },
  { ep: "02", tag: "GRWM",        title: "No-Makeup Makeup", caption: "The skin-first ritual I use on every editorial.", duration: "0:58", products: 3, viewers: "1.4k", video: HERO_VIDEOS[1] },
  { ep: "03", tag: "TUTORIAL",    title: "Bridal · 12-Hour Wear", caption: "Photographs like a dream. Survives the toast.", duration: "2:14", products: 5, viewers: "987", video: HERO_VIDEOS[2] },
  { ep: "04", tag: "REVIEW",      title: "Skin Tint Showdown", caption: "Six tints. One face. The honest verdict.", duration: "1:48", products: 6, viewers: "3.3k", video: HERO_VIDEOS[3] },
  { ep: "05", tag: "BACKSTAGE",   title: "Old Hollywood Lip", caption: "The exact red I use on every red carpet.", duration: "1:05", products: 3, viewers: "1.8k", video: HERO_VIDEOS[4] },
];

const HeroBroadcast = ({ onOpenReel }) => {
  const [active, setActive] = React.useState(0);
  const [muted, setMuted] = React.useState(true);
  const [time, setTime] = React.useState(new Date());
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  // Auto-advance every 10s
  React.useEffect(() => {
    const id = setInterval(() => {
      setActive(i => (i + 1) % BROADCAST_REELS.length);
    }, 10000);
    return () => clearInterval(id);
  }, []);

  const np = BROADCAST_REELS[active];
  const timeStr = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

  return (
    <section className="hero hero-broadcast">
      {/* Ambient backdrop — blurred, slowly cross-fading */}
      <div className="hb-backdrop">
        <img key={`bg-${active}`} src={np.video.poster} alt="" className="hb-backdrop-img" />
      </div>
      <div className="hb-backdrop-tint"></div>
      <div className="hb-grain"></div>

      {/* Top channel chrome */}
      <div className="hb-chrome">
        <div className="hb-chrome-l">
          <span className="hb-live"><span className="hb-live-dot"></span>ON AIR</span>
          <span className="hb-divider"></span>
          <span className="hb-channel">CH·047 — MIKAYLA</span>
          <span className="hb-divider"></span>
          <span className="hb-show">SEPHORA × CREATORS · FALL '26</span>
        </div>
        <div className="hb-chrome-r">
          <span className="hb-viewers">★ {np.viewers} watching</span>
          <span className="hb-divider"></span>
          <span className="hb-clock">{timeStr}</span>
        </div>
      </div>

      {/* Editorial name strip */}
      <div className="hb-name-strip">
        <div className="hb-name">
          <span>MIKAYLA</span>
          <span className="hb-name-italic"><em>Nogueira</em></span>
        </div>
        <div className="hb-byline-col">
          <div className="hb-byline">{CREATOR.title}</div>
          <div className="hb-stats">
            <span><b>{CREATOR.followers}</b> followers</span>
            <span><b>{CREATOR.curated}</b> products curated</span>
            <span><b>{CREATOR.rating}★</b> · {CREATOR.ratingCount}</span>
          </div>
        </div>
      </div>

      {/* The reel wall */}
      <div className="hb-wall">
        {BROADCAST_REELS.map((r, i) => {
          const offset = i - active;
          // Wrap so we always have neighbours
          const realOffset = ((offset % BROADCAST_REELS.length) + BROADCAST_REELS.length) % BROADCAST_REELS.length;
          const wrapped = realOffset > BROADCAST_REELS.length / 2 ? realOffset - BROADCAST_REELS.length : realOffset;
          const isActive = wrapped === 0;
          return (
            <div
              key={r.ep}
              className={`hb-reel ${isActive ? 'is-active' : ''}`}
              style={{
                '--off': wrapped,
                zIndex: 50 - Math.abs(wrapped),
              }}
              onClick={() => setActive(i)}
            >
              <div className="hb-reel-frame">
                {isActive ? (
                  <video
                    className="hb-reel-video"
                    src={r.video.url}
                    poster={r.video.poster}
                    autoPlay
                    muted={muted}
                    loop
                    playsInline
                  />
                ) : (
                  <img src={r.video.poster} alt="" className="hb-reel-img hb-zoom-slow" />
                )}
                <div className="hb-reel-vignette"></div>

                {/* Episode badge — top-left */}
                <div className="hb-reel-badge">
                  <span className="hb-reel-ep">EP·{r.ep}</span>
                  <span className="hb-reel-tag">{r.tag}</span>
                </div>

                {/* Active-only chrome */}
                {isActive && (
                  <>
                    <div className="hb-reel-controls">
                      <button onClick={(e) => { e.stopPropagation(); setMuted(!muted); }} aria-label="Mute">
                        {muted ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="m22 9-6 6"/><path d="m16 9 6 6"/></svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a9 9 0 0 1 0 14"/></svg>
                        )}
                      </button>
                    </div>

                    <div className="hb-reel-bottom">
                      <div className="hb-reel-meta">
                        <span><Play size={9} /> {r.duration}</span>
                        <span className="hb-reel-dot"></span>
                        <span>{r.products} products</span>
                      </div>
                      <h2 className="hb-reel-title">{r.title}</h2>
                      <p className="hb-reel-cap">{r.caption}</p>
                      <div className="hb-reel-cta">
                        <button className="hb-btn-watch"><Play size={10} /> Watch</button>
                        <button className="hb-btn-shop" onClick={(e) => { e.stopPropagation(); onOpenReel && onOpenReel(REELS[active % REELS.length]); }}>Explore products →</button>
                      </div>
                    </div>

                    {/* Live progress at bottom */}
                    <div className="hb-reel-progress">
                      <div className="hb-reel-progress-bar"></div>
                    </div>
                  </>
                )}

                {/* Inactive overlay — dim with EQ bars */}
                {!isActive && (
                  <div className="hb-reel-dim">
                    <div className="hb-reel-peek">
                      <div className="hb-reel-peek-tag">{r.tag}</div>
                      <div className="hb-reel-peek-title">{r.title}</div>
                      <div className="hb-reel-peek-dur">{r.duration}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Channel guide / chapter strip */}
      <div className="hb-guide">
        {BROADCAST_REELS.map((r, i) => (
          <button
            key={r.ep}
            className={`hb-guide-cell ${i === active ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            <div className="hb-guide-num">EP·{r.ep}</div>
            <div className="hb-guide-title">{r.title}</div>
            <div className="hb-guide-dur">{r.duration}</div>
            {i === active && (
              <div className="hb-guide-eq"><span></span><span></span><span></span><span></span></div>
            )}
          </button>
        ))}
      </div>

      {/* Live ticker */}
      <div className="hb-ticker">
        <div className="hb-ticker-label">LIVE FEED</div>
        <div className="hb-ticker-track">
          <div className="hb-ticker-content">
            <span>★ Maya R. just bought the Editorial Smoke kit</span>
            <span className="hb-ticker-sep">◆</span>
            <span>Mikayla added 2 new looks this week</span>
            <span className="hb-ticker-sep">◆</span>
            <span>Trending: Pat McGrath Mothership IX — 47 sold today</span>
            <span className="hb-ticker-sep">◆</span>
            <span>"Best masterclass on the internet" — Joon P., 5★</span>
            <span className="hb-ticker-sep">◆</span>
            <span>New episode drops Friday: "Old Hollywood Red Lip"</span>
            <span className="hb-ticker-sep">◆</span>
            <span>★ Maya R. just bought the Editorial Smoke kit</span>
            <span className="hb-ticker-sep">◆</span>
            <span>Mikayla added 2 new looks this week</span>
            <span className="hb-ticker-sep">◆</span>
            <span>Trending: Pat McGrath Mothership IX — 47 sold today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero = ({ variant, onOpenReel }) => {
  if (variant === "split") return <HeroSplit />;
  if (variant === "marquee") return <HeroMarquee />;
  if (variant === "broadcast") return <HeroBroadcast onOpenReel={onOpenReel} />;
  return <HeroFullBleed />;
};

window.Hero = Hero;
