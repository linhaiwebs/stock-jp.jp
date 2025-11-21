import { StockInfo, StockPrice } from '../types/stock';

interface SplitStockCardProps {
  info: StockInfo;
  latestPrice?: StockPrice;
}

export default function SplitStockCard({ info, latestPrice }: SplitStockCardProps) {
  const changeNum = parseFloat(info.change);
  const isPositive = changeNum >= 0;
  const changeColor = isPositive ? 'text-red-600' : 'text-green-600';
  const arrowColor = isPositive ? '#ef4444' : '#22c55e';
  const chartColor = isPositive ? '#ef4444' : '#22c55e';

  const getValueColor = (current: string, reference: string) => {
    const currentNum = parseFloat(current.replace(/,/g, ''));
    const referenceNum = parseFloat(reference.replace(/,/g, ''));
    if (isNaN(currentNum) || isNaN(referenceNum)) return 'text-gray-400';
    if (currentNum > referenceNum) return 'text-red-600';
    if (currentNum < referenceNum) return 'text-green-600';
    return 'text-gray-400';
  };

  return (
    <div className="px-4 py-0">
      <div className="max-w-lg mx-auto">
        <div className="px-2 py-0">
            <div className="flex gap-3">
              <div className="flex-1" style={{ width: '50%' }}>
                <div className="text-lg text-red-900 font-bold mb-1 whitespace-nowrap">
                  {info.name} ({info.code}) {latestPrice?.date || info.timestamp}
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className={`text-4xl font-black ${changeColor}`}>{info.price}</span>
                  <span className={`text-lg font-bold ${changeColor}`}>{info.change}</span>
                  <span className={`text-lg font-bold ${changeColor}`}>{info.changePercent}</span>
                </div>

                <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-sm">
                  <div className="flex flex-col">
                    <span className="text-red-600 font-semibold">{info.change}</span>
                    <span style={{ color: '#384860' }} className="text-xs">前日比較</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-red-600 font-semibold">{latestPrice?.high || info.price}</span>
                    <span style={{ color: '#384860' }} className="text-xs">高値</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-red-600 font-semibold">{latestPrice?.open || info.price}</span>
                    <span style={{ color: '#384860' }} className="text-xs">始値</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-red-600 font-semibold">{latestPrice?.low || info.price}</span>
                    <span style={{ color: '#384860' }} className="text-xs">安値</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-red-600 font-semibold">{latestPrice?.close || info.price}</span>
                    <span style={{ color: '#384860' }} className="text-xs">終値</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-red-600 font-semibold">{info.per}</span>
                    <span style={{ color: '#384860' }} className="text-xs">PER</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-red-600 font-semibold">{latestPrice?.volume || 'N/A'}</span>
                    <span style={{ color: '#384860' }} className="text-xs">前日取引</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-red-600 font-semibold">{info.dividend}</span>
                    <span style={{ color: '#384860' }} className="text-xs">配当利回り</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center" style={{ width: '50%' }}>
                <svg width="100%" height="100%" viewBox="0 0 100 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`gradient-${isPositive ? 'up' : 'down'}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: chartColor, stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: chartColor, stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>

                  {isPositive ? (
                    <>
                      <polyline
                        points="10,60 30,50 45,55 60,45 75,40 90,35 105,25"
                        fill="none"
                        stroke={chartColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="10,60 30,50 45,55 60,45 75,40 90,35 105,25 105,70 10,70"
                        fill={`url(#gradient-up)`}
                      />
                      <polygon
                        points="105,15 115,25 105,25"
                        fill={chartColor}
                      />
                    </>
                  ) : (
                    <>
                      <polyline
                        points="10,20 30,30 45,25 60,35 75,40 90,45 105,55"
                        fill="none"
                        stroke={chartColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polygon
                        points="10,20 30,30 45,25 60,35 75,40 90,45 105,55 105,10 10,10"
                        fill={`url(#gradient-down)`}
                      />
                      <polygon
                        points="105,65 115,55 105,55"
                        fill={chartColor}
                      />
                    </>
                  )}

                  <rect x="10" y="73" width="8" height="5" fill="#fbbf24" />
                  <rect x="25" y="70" width="8" height="8" fill="#fbbf24" />
                  <rect x="40" y="68" width="8" height="10" fill="#fb923c" />
                  <rect x="55" y="65" width="8" height="13" fill="#f97316" />
                </svg>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
