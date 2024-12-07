import { BrandIdentityHero } from './BrandIdentityHero';
import { BrandIdentityServices } from './BrandIdentityServices';
import { BrandIdentityProcess } from './BrandIdentityProcess';

export function BrandIdentity() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <BrandIdentityHero />
      <BrandIdentityServices />
      <BrandIdentityProcess />
    </div>
  );
}