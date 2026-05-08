export interface PortfolioItem {
  id: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  category: 'installation' | 'maintenance' | 'commercial' | 'residential';
  imageUrl: string;
  thumbnailUrl?: string;
  location?: string;
  year?: number;
  tags?: string[];
}

export interface GalleryImage {
  id: number;
  url: string;
  captionEn: string;
  captionAr: string;
  category: string;
}
