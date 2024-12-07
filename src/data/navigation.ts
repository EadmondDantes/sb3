export interface SubService {
  name: string;
  href: string;
}

export interface MainService {
  name: string;
  href: string;
  children: SubService[];
}

export const mainServices: MainService[] = [
  {
    name: 'Branding',
    href: '/services/branding',
    children: [
      { name: 'Branding Services', href: '/services/branding/services' },
      { name: 'Logo Design', href: '/services/branding/logo-design' },
      { name: 'Brand Identity', href: '/services/branding/identity' },
      { name: 'Graphic Design', href: '/services/branding/graphic-design' },
      { name: 'Brand Marketing', href: '/services/branding/marketing' }
    ]
  },
  {
    name: 'Web Design',
    href: '/services/web-design',
    children: [
      { name: 'Custom Website Design', href: '/services/web-design/custom' },
      { name: 'Shopify Website Design', href: '/services/web-design/shopify' },
      { name: 'eCommerce Website Design', href: '/services/web-design/ecommerce' }
    ]
  },
  {
    name: 'CRO',
    href: '/services/cro',
    children: [
      { name: 'Conversion Rate Optimization', href: '/services/cro/optimization' },
      { name: 'Conversion Centered Design', href: '/services/cro/centered-design' },
      { name: 'User Experience Research', href: '/services/cro/ux-research' },
      { name: 'Liftmap Tech Stack Consulting', href: '/services/cro/tech-stack' }
    ]
  },
  {
    name: 'Marketing',
    href: '/services/marketing',
    children: [
      { name: 'Integrated Marketing Services', href: '/services/marketing/integrated' },
      { name: 'Search Engine Optimization', href: '/services/marketing/seo' },
      { name: 'Social Media Marketing', href: '/services/marketing/social-media' },
      { name: 'Consulting Services', href: '/services/marketing/consulting' },
      { name: 'Before & After Designs', href: '/services/marketing/designs' }
    ]
  }
];