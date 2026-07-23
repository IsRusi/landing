export const TruckIcon = ({ size = 36 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" fill="rgba(249,115,22,0.18)" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" fill="rgba(249,115,22,0.12)" />
    <circle cx="5.5" cy="18.5" r="2.5" fill="rgba(249,115,22,0.22)" />
    <circle cx="18.5" cy="18.5" r="2.5" fill="rgba(249,115,22,0.22)" />
  </svg>
)