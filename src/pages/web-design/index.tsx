import { Routes, Route } from 'react-router-dom';
import { CustomDesign } from './custom';
import { ShopifyPage } from './shopify';
import { EcommercePage } from './ecommerce';
import { WebDesignServices } from './services';

export function WebDesignPage() {
  return (
    <Routes>
      <Route path="/" element={<WebDesignServices />} />
      <Route path="/services" element={<WebDesignServices />} />
      <Route path="/custom" element={<CustomDesign />} />
      <Route path="/shopify" element={<ShopifyPage />} />
      <Route path="/ecommerce" element={<EcommercePage />} />
    </Routes>
  );
}