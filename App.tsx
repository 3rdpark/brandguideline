import React, { useState, useEffect } from 'react';
import HeroMarquee from './components/HeroMarquee';
import { TrendItem } from './types';

const App: React.FC = () => {
  const [trends, setTrends] = useState<TrendItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 뉴타입 디자인의 포트폴리오 이미지들을 매칭했습니다.
    const dummyTrends: TrendItem[] = [
      { id: '1', text: 'Work 01', title: 'Design Project 1', imageUrl: 'https://newtype.design/wp-content/uploads/2023/10/thumb-nt-re.jpg', ratio: '3:2' },
      { id: '2', text: 'Work 02', title: 'Design Project 2', imageUrl: 'https://newtype.design/wp-content/uploads/2023/10/thumb-frizm.jpg', ratio: 'square' },
      { id: '3', text: 'Work 03', title: 'Design Project 3', imageUrl: 'https://newtype.design/wp-content/uploads/2021/04/p-hyundaicard.jpg', ratio: '3:2' },
      { id: '4', text: 'Work 04', title: 'Design Project 4', imageUrl: 'https://newtype.design/wp-content/uploads/2021/04/p-mclaren.jpg', ratio: 'square' },
      { id: '5', text: 'Work 05', title: 'Design Project 5', imageUrl: 'https://newtype.design/wp-content/uploads/2021/04/p-laneige.jpg', ratio: '3:2' },
      { id: '6', text: 'Work 06', title: 'Design Project 6', imageUrl: 'https://newtype.design/wp-content/uploads/2023/10/thumb-laneige.jpg', ratio: 'square' },
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
            Loading Newtype Styles...
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
