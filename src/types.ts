export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  location: string;
  ratingCount: number;
  ratingValue: number;
  image: string;
  visitsInLast30Days: number;
  price: number;
  isPremium?: boolean;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  avatar?: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed';
  doctorImage: string;
}

export interface Message {
  id: string;
  senderName: string;
  text: string;
  time: string;
  image: string;
  unread?: boolean;
}
