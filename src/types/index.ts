// src/types/index.ts

export interface NavItem {
  title: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Product {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string; // Optional for 'Coming Soon'
}

export type OrderStatus = 'pending' | 'processing' | 'delivered';

export interface OrderDetails {
  bottleSize: string;
  bottlesPerDay: number;
  deliveryDays: string[];
  startDate: string;
}
