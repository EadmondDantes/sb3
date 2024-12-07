import { ShopifyHero } from './ShopifyHero';
import { ShopifyServices } from './ShopifyServices';
import { ShopifyProcess } from './ShopifyProcess';
import { ShopifyPortfolio } from './ShopifyPortfolio';
import { ShopifyTestimonials } from './ShopifyTestimonials';

export function ShopifyPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <ShopifyHero />
      <ShopifyServices />
      <ShopifyProcess />
      <ShopifyPortfolio />
      <ShopifyTestimonials />
    </div>
  );
}