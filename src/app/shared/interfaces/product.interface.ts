export interface IProduct {
  title: string;
  price: string;
  merchTag: string;

  history?: string;

  blank?: string;
  colors?: string;
  print?: string;
  composition?: string;
  thickness?: string;

  size?: {
    s?: number;
    m?: number;
    l?: number;
    xl?: number;
  };

  productImages: string[];
}
