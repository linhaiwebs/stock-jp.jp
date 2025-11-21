import { StockInfo, StockPrice } from '../types/stock';

interface StockDataGridProps {
  info: StockInfo;
  latestPrice?: StockPrice;
}

export default function StockDataGrid({ info, latestPrice }: StockDataGridProps) {
  const dataItems = [
    { label: '始値', value: latestPrice?.open || info.price, color: '#16a34a' },
    { label: '高値', value: latestPrice?.high || info.price, color: '#16a34a' },
    { label: '安値', value: latestPrice?.low || info.price, color: '#16a34a' },
    { label: '終値', value: latestPrice?.close || info.price, color: '#16a34a' },
    { label: '売買高', value: latestPrice?.volume || 'N/A', color: '#16a34a' },
  ];

  return (
    <div className="w-full px-4 py-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none animate-wave-flow"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(60, 8, 0, 0.15) 20%, rgba(60, 8, 0, 0.25) 40%, rgba(60, 8, 0, 0.15) 60%, transparent 80%)',
          backgroundSize: '200% 100%',
          opacity: 0.7
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-16 animate-wave pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full" style={{ opacity: 0.4 }}>
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="rgba(60, 8, 0, 0.3)"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 animate-wave-delayed pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full" style={{ opacity: 0.3 }}>
          <path
            d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z"
            fill="rgba(60, 8, 0, 0.25)"
          />
        </svg>
      </div>

      <div className="max-w-2xl mx-auto relative">
        <div className="flex flex-col gap-y-1">
          {[0, 1, 2].map((rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-2 gap-x-16">
              {dataItems.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
                <div key={index} className="flex items-center gap-1 relative group">
                  <div
                    className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-bar pointer-events-none"
                    style={{
                      background: 'linear-gradient(180deg, rgba(60, 8, 0, 0.4) 0%, rgba(60, 8, 0, 0.1) 100%)',
                      backgroundSize: '100% 200%',
                      zIndex: -1
                    }}
                  />
                  <div className="text-base font-medium text-left" style={{ color: '#3c0800' }}>
                    {item.label}
                  </div>
                  <div className="text-2xl font-bold text-left" style={{ color: item.color }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes wave-flow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-5%) translateY(-5px);
          }
        }

        @keyframes wave-delayed {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(5%) translateY(-3px);
          }
        }

        @keyframes gradient-bar {
          0%, 100% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 0% 100%;
          }
        }

        .animate-wave-flow {
          animation: wave-flow 8s linear infinite;
        }

        .animate-wave {
          animation: wave 4s ease-in-out infinite;
        }

        .animate-wave-delayed {
          animation: wave-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-gradient-bar {
          animation: gradient-bar 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
