import React, { useState, useEffect } from 'react';
import HeroMarquee from './components/HeroMarquee';
import { TrendItem } from './types';

const App: React.FC = () => {
  const [trends, setTrends] = useState<TrendItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. AI를 직접 부르지 않고, 임시 데이터를 바로 넣어줍니다.
    const dummyTrends: TrendItem[] = [
      { id: '1', text: 'Brand Strategy 2026', category: 'Strategy' },
      { id: '2', text: 'Minimalist Design System', category: 'Design' },
      { id: '3', text: 'AI Driven Experience', category: 'Digital' },
      { id: '4', text: 'Sustainable Identity', category: 'Brand' },
    ];
    
    setTrends(dummyTrends);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-red-200 flex flex-col items-center justify-start overflow-x-hidden">
      {!loading && trends.length > 0 ? (
        <HeroMarquee trends={trends} />
      ) : (
        <div className="h-screen flex items-center justify-center">
          <div className="animate-pulse text-2xl font-bold text-gray-300 font-sans tracking-tight">
            Loading Brand Experience...
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
