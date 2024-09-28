export interface Crypto {
  id: number;
  name: string;
  symbol: string;
  price_usd: number;
  market_cap_usd: number;
  volume_24h_usd: number;
  change_24h_percent: number;
  image_url: string;
}