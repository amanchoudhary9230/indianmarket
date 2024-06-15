export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "IndianMarket",
  description: "A marketplace for Indian sellers and buyers",
  navItems: [
    {
      label: "Seller",
      href: "/seller",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Seller",
      href: "/seller",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Signup",
      href: "/signup",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    seller: "https://indianmarket.vercel.app/seller",
    signup: "https://indianmarket.vercel.app/signup",
  },
};
