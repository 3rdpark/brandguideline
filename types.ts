
export interface TrendItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  ratio: '1:1' | '3:2';
}

export interface PredictionResponse {
  trends: TrendItem[];
}
