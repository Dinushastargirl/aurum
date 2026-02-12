
export interface NavItem {
  label: string;
  href: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  data?: any;
}
