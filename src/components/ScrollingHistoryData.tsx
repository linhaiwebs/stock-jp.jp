import { StockPrice } from '../types/stock';
import { useState, useEffect } from 'react';

interface ScrollingHistoryDataProps {
  prices: StockPrice[];
  stockName: string;
}

export default function ScrollingHistoryData({ prices, stockName }: ScrollingHistoryDataProps) {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (prices.length <= 3) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const next = prev + 1;
        return next >= prices.length - 2 ? 0 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [prices.length]);

  if (prices.length === 0) {
    return null;
  }

  const displayPrices = prices.length <= 3
    ? prices
    : [prices[startIndex], prices[startIndex + 1], prices[startIndex + 2]];

  const formatChange = (change: string, changePercent: string) => {
    const changeNum = parseFloat(change);
    const sign = changeNum >= 0 ? '+' : '';
    return `${sign}${change} (${changePercent}%)`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  };

  const renderTopEntry = (price: StockPrice, index: number) => {
    const changeNum = parseFloat(price.change);
    const changeColor = changeNum >= 0 ? '#c6e48b' : '#ff6b6b';

    return (
      <div
        key={`${price.date}-${index}`}
        className="absolute top-[8%] left-1/2 -translate-x-1/2 text-center"
        style={{ width: '70%' }}
      >
        <div className="text-white font-bold text-lg mb-1" style={{ transform: 'rotate(-8deg)' }}>
          株-{price.code || stockName.slice(0, 4)} {formatDate(price.date)}
        </div>
        <div className="text-sm" style={{ color: changeColor, transform: 'rotate(-6deg)' }}>
          <span className="font-medium text-white">終値：</span>
          <span className="font-bold">{price.close}</span>
        </div>
        <div className="text-sm mt-0.5" style={{ color: changeColor, transform: 'rotate(-4deg)' }}>
          <span className="font-medium text-white">前日比：</span>
          <span className="font-bold">{formatChange(price.change, price.changePercent)}</span>
        </div>
      </div>
    );
  };

  const renderMiddleEntry = (price: StockPrice, index: number) => {
    const changeNum = parseFloat(price.change);
    const changeColor = changeNum >= 0 ? '#c6e48b' : '#ff6b6b';

    return (
      <div
        key={`${price.date}-${index}`}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        style={{ width: '70%' }}
      >
        <div className="text-white font-bold text-lg mb-1">
          株-{price.code || stockName.slice(0, 4)} {formatDate(price.date)}
        </div>
        <div className="text-sm" style={{ color: changeColor }}>
          <span className="font-medium text-white">終値：</span>
          <span className="font-bold">{price.close}</span>
        </div>
        <div className="text-sm mt-0.5" style={{ color: changeColor }}>
          <span className="font-medium text-white">前日比：</span>
          <span className="font-bold">{formatChange(price.change, price.changePercent)}</span>
        </div>
      </div>
    );
  };

  const renderBottomEntry = (price: StockPrice, index: number) => {
    const changeNum = parseFloat(price.change);
    const changeColor = changeNum >= 0 ? '#c6e48b' : '#ff6b6b';

    return (
      <div
        key={`${price.date}-${index}`}
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 text-center"
        style={{ width: '70%' }}
      >
        <div className="text-white font-bold text-lg mb-1" style={{ transform: 'rotate(8deg)' }}>
          株-{price.code || stockName.slice(0, 4)} {formatDate(price.date)}
        </div>
        <div className="text-sm" style={{ color: changeColor, transform: 'rotate(6deg)' }}>
          <span className="font-medium text-white">終値：</span>
          <span className="font-bold">{price.close}</span>
        </div>
        <div className="text-sm mt-0.5" style={{ color: changeColor, transform: 'rotate(4deg)' }}>
          <span className="font-medium text-white">前日比：</span>
          <span className="font-bold">{formatChange(price.change, price.changePercent)}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="relative w-full" style={{ paddingBottom: '100%' }}>
          <div className="absolute inset-0">
            <img
              src="/stock.png"
              alt="Stock background"
              className="w-full h-full object-contain"
            />

            <div className="absolute top-[3%] left-[3%] w-[15%] h-[15%]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="#8B4513" opacity="0.8"/>
                <circle cx="50" cy="50" r="35" fill="#D2691E" opacity="0.6"/>
                <circle cx="50" cy="50" r="25" fill="#FFD700" opacity="0.4"/>
                {[...Array(12)].map((_, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={50 + 40 * Math.cos((i * 30 * Math.PI) / 180)}
                    y2={50 + 40 * Math.sin((i * 30 * Math.PI) / 180)}
                    stroke="#FFD700"
                    strokeWidth="1"
                  />
                ))}
              </svg>
            </div>

            <div className="absolute bottom-[3%] right-[3%] w-[15%] h-[15%]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="#8B4513" opacity="0.8"/>
                <circle cx="50" cy="50" r="35" fill="#D2691E" opacity="0.6"/>
                <circle cx="50" cy="50" r="25" fill="#FFD700" opacity="0.4"/>
                {[...Array(12)].map((_, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={50 + 40 * Math.cos((i * 30 * Math.PI) / 180)}
                    y2={50 + 40 * Math.sin((i * 30 * Math.PI) / 180)}
                    stroke="#FFD700"
                    strokeWidth="1"
                  />
                ))}
              </svg>
            </div>

            {displayPrices.length >= 1 && renderTopEntry(displayPrices[0], 0)}
            {displayPrices.length >= 2 && renderMiddleEntry(displayPrices[1], 1)}
            {displayPrices.length >= 3 && renderBottomEntry(displayPrices[2], 2)}
          </div>
        </div>

        <div className="mt-3 text-center">
          <p className="text-xs text-blue-900">
            データ出典: 公開市場情報 | 更新: 準リアルタイム
          </p>
          <p className="text-xs text-blue-900 mt-1">
            ※過去のデータは将来の結果を保証するものではありません
          </p>
        </div>
      </div>
    </div>
  );
}
