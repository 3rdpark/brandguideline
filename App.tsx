
import React, { useState, useEffect } from 'react';
import HeroMarquee from './components/HeroMarquee';
import { TrendItem } from './types';
import { getTrendingInsights } from './services/geminiService';

const App: React.FC = () => {
  const [trends, setTrends] = useState<TrendItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // Fetch a default set of trending insights to populate the marquee
        const data = await getTrendingInsights('lifestyle');
        setTrends(data.trends);
      } catch (error) {
        console.error("Failed to fetch trends:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-red-200 flex flex-col items-center justify-start overflow-x-hidden">
      {trends.length > 0 ? (
        <HeroMarquee trends={trends} />
      ) : (
        <div className="h-screen flex items-center justify-center">
          <div className="animate-pulse text-2xl font-bold text-gray-300 font-sans tracking-tight">
            Predicting 2025...
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
