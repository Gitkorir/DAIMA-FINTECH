export interface LoanApplication {
  id?: string;
  full_name: string;
  id_number: string;
  phone_number: string;
  loan_amount: number;
  status?: 'pending' | 'approved' | 'rejected';
  registration_fee_paid?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Testimonial {
  id: string;
  customer_name: string;
  testimonial_text: string;
  amount_received: number;
  display_order: number;
  created_at?: string;
}

export interface DemoPayment {
  id?: string;
  application_id?: string;
  phone_number: string;
  amount: number;
  transaction_id?: string;
  status?: 'pending' | 'completed' | 'failed';
  created_at?: string;
}
