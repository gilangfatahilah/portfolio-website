export interface NavbarItemsProps {
  title: string;
  href: string;
  number: string;
}

export interface CardAboutProps {
  images: string;
  title: string;
  informationLevel: string;
}

export interface PageWrapperProps {
  children: React.ReactNode;
  noNavbar?: boolean;
  noContact?: boolean;
  noFooter?: boolean;
  noContainer?: boolean;
}
