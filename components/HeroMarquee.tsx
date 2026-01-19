import React from 'react';
import { TrendItem } from '../types';

interface MarqueeRowProps {
  items: TrendItem[];
  direction?: 'left' | 'right';
  duration?: string;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction = 'left', duration = '40s' }) => {
  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
  const displayItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden w-full flex py-8">
      <div 
        className={`flex gap-6 shrink-0 ${animationClass}`}
        style={{ '--duration': duration } as React.CSSProperties}
      >
        {displayItems.map((item, idx) => (
          <div 
            key={`${item.id}-${idx}`}
            className={`relative overflow-hidden rounded-[2.5rem] shadow-sm transition-all duration-500 hover:scale-105 ${
              item.ratio === '3:2' ? 'w-[350px] md:w-[500px] aspect-[3/2]' : 'w-[250px] md:w-[350px] aspect-square'
            }`}
          >
            <img 
              src={item.imageUrl} 
              alt={item.text}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                // 이미지 로드 실패 시 대체 이미지
                (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${idx}/800/600`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroMarquee: React.FC<{ trends: TrendItem[] }> = ({ trends }) => {
  return (
    <div className="w-full pt-20 md:pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <h1 className="text-[2.5rem] md:text-[5rem] font-bold tracking-[-0.03em] mb-8 leading-[1.1] text-[#111111]">
          Introduction to <br/>Core Elements
        </h1>
        <p className="text-lg md:text-[1.375rem] text-[#555555] max-w-3xl mx-auto font-medium leading-[1.6]">
          KakaoBank answer가 지향하는 생활 금융의 친근함과 답을 찾아가는 살아있는 흐름을 담아,<br/>친화적인 블로그 톤으로 생각의 과정을 자연스럽게 전달하며 브랜드 정체성을 명확히 드러냅니다.
        </p>
      </div>

      <div className="relative w-full">
        <MarqueeRow items={trends} direction="left" duration="80s" />
      </div>
    </div>
  );
};

export default HeroMarquee;
