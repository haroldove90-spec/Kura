import { Doctor, Review, Appointment, Message } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dra. Cristina Gonzalez',
    specialty: 'Ginecólogo',
    location: 'Plaza Ángeles 4 1ºD, Ciudad de México',
    ratingCount: 186,
    ratingValue: 5,
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=300&h=300',
    visitsInLast30Days: 2923,
    price: 800,
    isPremium: true,
  },
  {
    id: '2',
    name: 'Dr. Maria Pedraza',
    specialty: 'Ginecólogo',
    location: 'Calle Manuel Jiménez "El Alguacil" N4, Ciudad de México',
    ratingCount: 109,
    ratingValue: 5,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    visitsInLast30Days: 1240,
    price: 1200,
  },
  {
    id: '3',
    name: 'Dr. Victor Mendonza',
    specialty: 'Ortopedista',
    location: 'Av. Insurgentes Sur 123, Ciudad de México',
    ratingCount: 45,
    ratingValue: 4.8,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
    visitsInLast30Days: 450,
    price: 1500,
  },
  {
    id: '4',
    name: 'Dra. Ana Fernandez',
    specialty: 'Dentista',
    location: 'Paseo de la Reforma 456, Ciudad de México',
    ratingCount: 12,
    ratingValue: 5,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300',
    visitsInLast30Days: 200,
    price: 600,
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Mariana',
    text: '¡Me encantó! La doctora me dio muchas explicaciones y me ayudó a entender qué es lo que me pasaba. En las siguientes sesiones mejoró mi problema.',
    rating: 5,
    date: 'hace 2 días',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300',
  },
  {
    id: '2',
    author: 'Adrián',
    text: 'Muy recomendable. El doctor supo identificar el origen de mi problema y rápidamente pudimos iniciar el tratamiento para solucionarlo.',
    rating: 5,
    date: 'hace 1 semana',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300',
  }
];

export const APPOINTMENTS: Appointment[] = [
  {
    id: '1',
    doctorId: '4',
    doctorName: 'Dra. Ana Fernandez',
    specialty: 'Dentista',
    date: 'Lunes, 21.04.2025',
    time: '17:00',
    status: 'confirmed',
    doctorImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300',
  }
];

export const MESSAGES: Message[] = [
  {
    id: '1',
    senderName: 'Dra. Maria Caballero',
    text: 'Hola, muchas gracias por reservar cita...',
    time: '13:30',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    unread: true,
  },
  {
    id: '2',
    senderName: 'Dra Ana Fernandez',
    text: 'Hola, falta poco para tu visita, a continuació...',
    time: '17:02',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300',
  }
];

export const CATEGORIES = [
  { id: '1', name: 'Ginecólogo', icon: 'Venus' },
  { id: '2', name: 'Dentista', icon: 'Stethoscope' },
  { id: '3', name: 'Psicólogo', icon: 'Smile' },
  { id: '4', name: 'Ortopedista', icon: 'Bone' },
  { id: '5', name: 'Dermatólogo', icon: 'User' },
  { id: '6', name: 'Urólogo', icon: 'Activity' },
  { id: '7', name: 'Fisioterapeuta', icon: 'Accessibility' },
];
