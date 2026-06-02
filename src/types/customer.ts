export interface Customer {
  id: number;
  full_name: string;
  email: string;
  phone: string;
}

export interface CreateCustomer {
  full_name: string;
  email: string;
  phone: string;
}