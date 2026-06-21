// Original botanical illustration built from the brand palette — a stand-in for
// real project photography (PRD §3.8 prefers real photos; this fills the gap until
// AgriBlooms supplies them). Swap <HeroIllustration /> for an <img> when ready.

export default function HeroIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 560 560"
      className={className}
      role="img"
      aria-label="Illustration of layered leaves and rolling green terrain"
    >
      <defs>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff7e6" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#fff7e6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hillBack" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a9c896" />
          <stop offset="100%" stopColor="#6fa058" />
        </linearGradient>
        <linearGradient id="hillFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c6b45" />
          <stop offset="100%" stopColor="#1f5c3a" />
        </linearGradient>
      </defs>

      <circle cx="410" cy="150" r="120" fill="url(#sunGlow)" />
      <circle cx="410" cy="150" r="46" fill="#f4ead0" opacity="0.9" />

      {/* back hill */}
      <path
        d="M0 360 C 90 300, 200 300, 280 340 C 360 380, 470 320, 560 350 L560 560 L0 560 Z"
        fill="url(#hillBack)"
        opacity="0.55"
      />
      {/* front hill */}
      <path
        d="M0 420 C 110 360, 240 460, 340 400 C 430 350, 500 410, 560 390 L560 560 L0 560 Z"
        fill="url(#hillFront)"
      />

      {/* leaf cluster, left */}
      <g transform="translate(70,330)">
        <path d="M0 80C-18 50-12 16 14 0c8 26 4 56-14 80z" fill="#44291d" opacity="0.85" />
        <path d="M10 90C-8 56-2 18 26 0c10 30 4 64-16 90z" fill="#1f5c3a" />
        <path d="M28 95C12 60 16 22 46 4c8 32 0 68-18 91z" fill="#6fa058" />
      </g>

      {/* leaf cluster, right */}
      <g transform="translate(430,300) scale(-1,1)">
        <path d="M0 70C-16 44-10 14 12 0c7 23 4 49-12 70z" fill="#44291d" opacity="0.85" />
        <path d="M9 80C-7 50-2 16 23 0c9 27 3 57-14 80z" fill="#1f5c3a" />
        <path d="M25 84C11 53 14 19 41 4c7 28 0 60-16 80z" fill="#6fa058" />
      </g>

      {/* small scattered leaves */}
      <g fill="#1f5c3a">
        <ellipse cx="230" cy="250" rx="10" ry="22" transform="rotate(20 230 250)" opacity="0.8" />
        <ellipse cx="320" cy="230" rx="9" ry="19" transform="rotate(-18 320 230)" opacity="0.7" />
        <ellipse cx="270" cy="290" rx="8" ry="17" transform="rotate(35 270 290)" opacity="0.6" />
      </g>
    </svg>
  );
}
