import { StockInfo, StockPrice } from '../types/stock';

interface StockDataGridProps {
  info: StockInfo;
  latestPrice?: StockPrice;
}

export default function StockDataGrid({ info, latestPrice }: StockDataGridProps) {
  const dataItems = [
    { label: '初期値', value: latestPrice?.open || info.price, color: '#16a34a' },
    { label: '高値', value: latestPrice?.high || info.price, color: '#16a34a' },
    { label: '一昨日の終わり', value: info.change, color: '#16a34a' },
    { label: '値', value: latestPrice?.close || info.price, color: '#16a34a' },
    { label: '最終値を調整する', value: latestPrice?.close || info.price, color: '#16a34a' },
    { label: '売買高', value: latestPrice?.volume || 'N/A', color: '#16a34a' },
  ];

  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col gap-y-1">
          {[0, 1, 2].map((rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-2 gap-x-16">
              {dataItems.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-base font-medium text-left" style={{ color: '#384860', minWidth: '140px' }}>
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
    </div>
  );
}
