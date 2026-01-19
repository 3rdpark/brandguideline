import React, { useState, useEffect } from 'react';
import HeroMarquee from './components/HeroMarquee';
import { TrendItem } from './types';

const App: React.FC = () => {
  const [trends, setTrends] = useState<TrendItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 요청하신 6개의 이미지 소스를 적용했습니다.
    const dummyTrends: TrendItem[] = [
      { 
        id: '1', 
        text: 'Visual Identity', 
        imageUrl: 'https://dm3yrk3qb82fp.cloudfront.net/works/7f1e5064-207f-4e5b-9e01-a942400f60dc.jpg', 
        ratio: '3:2' 
      },
      { 
        id: '2', 
        text: 'Brand Experience', 
        imageUrl: 'https://dm3yrk3qb82fp.cloudfront.net/works/b900c6ad-9534-4308-808b-46a3c6aa28bc.jpg', 
        ratio: 'square' 
      },
      { 
        id: '3', 
        text: 'Digital Product', 
        imageUrl: 'https://dm3yrk3qb82fp.cloudfront.net/works/405511f1-fbd3-4ba9-897b-8d95c3ddfc99.png', 
        ratio: '3:2' 
      },
      { 
        id: '4', 
        text: 'Typography System', 
        imageUrl: 'https://dm3yrk3qb82fp.cloudfront.net/works/57f12e2f-d5f2-48ed-86b0-01e922e5e546.png', 
        ratio: 'square' 
      },
      { 
        id: '5', 
        text: 'Core Elements', 
        imageUrl: 'https://dm3yrk3qb82fp.cloudfront.net/works/09e79803-63e5-4ea4-b698-6ecff0fc25f8.png', 
        ratio: '3:2' 
      },
      { 
        id: '6', 
        text: 'Creative Direction', 
        imageUrl: 'https://dm3yrk3qb82fp.cloudfront.net/works/ecb65758-60b3-45fc-9a21-10c8cb01b2ca.png', 
        ratio: 'square' 
      },
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
            Deploying New Brand Assets...
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
