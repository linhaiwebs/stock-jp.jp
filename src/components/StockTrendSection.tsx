import { StockInfo } from '../types/stock';

interface StockTrendSectionProps {
  info: StockInfo;
  date: string;
}

export default function StockTrendSection({ info, date }: StockTrendSectionProps) {
  const changeNum = parseFloat(info.change);
  const isPositive = changeNum >= 0;

  return (
    <div className="relative w-full overflow-hidden rounded-lg" style={{
      backgroundImage: 'url(/redis.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '240px',
      padding: '20px'
    }}>

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 240" preserveAspectRatio="none">
        <defs>
          <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 0.8 }} />
          </linearGradient>
          <linearGradient id="trendGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#dc2626', stopOpacity: 0.4 }} />
            <stop offset="100%" style={{ stopColor: '#dc2626', stopOpacity: 0.05 }} />
          </linearGradient>
        </defs>

        <g className="trend-bars">
          <rect x="20" y="120" width="8" height="120" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '0s' }} />
          <rect x="35" y="100" width="8" height="140" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '0.1s' }} />
          <rect x="50" y="115" width="8" height="125" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '0.2s' }} />
          <rect x="65" y="95" width="8" height="145" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '0.3s' }} />
          <rect x="80" y="80" width="8" height="160" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '0.4s' }} />
          <rect x="95" y="85" width="8" height="155" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '0.5s' }} />
          <rect x="110" y="70" width="8" height="170" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '0.6s' }} />
          <rect x="125" y="75" width="8" height="165" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '0.7s' }} />
          <rect x="140" y="60" width="8" height="180" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '0.8s' }} />
          <rect x="155" y="65" width="8" height="175" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '0.9s' }} />
          <rect x="170" y="50" width="8" height="190" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '1s' }} />
          <rect x="185" y="55" width="8" height="185" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '1.1s' }} />
          <rect x="200" y="40" width="8" height="200" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '1.2s' }} />
          <rect x="215" y="45" width="8" height="195" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '1.3s' }} />
          <rect x="230" y="30" width="8" height="210" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '1.4s' }} />
          <rect x="245" y="35" width="8" height="205" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '1.5s' }} />
          <rect x="260" y="25" width="8" height="215" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '1.6s' }} />
          <rect x="275" y="20" width="8" height="220" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '1.7s' }} />
          <rect x="290" y="15" width="8" height="225" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '1.8s' }} />
          <rect x="305" y="18" width="8" height="222" fill="url(#barGradient)" className="animate-bar" style={{ animationDelay: '1.9s' }} />
        </g>

        <polyline
          points="24,125 39,105 54,120 69,100 84,85 99,90 114,75 129,80 144,65 159,70 174,55 189,60 204,45 219,50 234,35 249,40 264,30 279,25 294,20 309,23"
          fill="none"
          stroke="#b91c1c"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-line"
        />

        <polygon
          points="24,125 39,105 54,120 69,100 84,85 99,90 114,75 129,80 144,65 159,70 174,55 189,60 204,45 219,50 234,35 249,40 264,30 279,25 294,20 309,23 309,240 24,240"
          fill="url(#trendGradient)"
          className="animate-area"
        />
      </svg>

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-start" style={{ marginTop: '60px', marginLeft: '10px' }}>
          <div className="relative">
            <img src="/top.png" alt="Price Display" className="h-24" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))' }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ paddingTop: '8px', paddingLeft: '10px' }}>
              <div className="text-3xl font-black text-red-600" style={{ lineHeight: '1' }}>
                {info.price}
              </div>
              <div className="text-sm font-bold text-red-600 mt-1">
                {info.change} ({info.changePercent})
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 right-3 text-right">
          <div className="text-2xl font-black" style={{ color: '#3c0800', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            ({info.code})
          </div>
          <div className="text-xl font-bold" style={{ color: '#3c0800', marginTop: '2px', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)', fontFamily: 'HiraKakuPro-W3, Hiragino Kaku Gothic Pro, sans-serif' }}>
            {date}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes drawLine {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-bar {
          animation: slideUp 0.8s ease-out forwards;
          transform-origin: bottom;
        }

        .animate-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 2s ease-out forwards;
          animation-delay: 0.5s;
        }

        .animate-area {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
