import { StateCreator } from 'zustand';
import { Appointment } from '../types';

export interface AppointmentSlice {
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id'>) => void;
}

export const createAppointmentSlice: StateCreator<AppointmentSlice> = (set) => ({
  appointments: [
    {
      id: 1,
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Cardiologist',
      date: '2024-03-20',
      time: '10:00 AM',
      status: 'confirmed',
      location: 'Main Hospital, Room 302'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      date: '2024-03-22',
      time: '2:30 PM',
      status: 'pending',
      location: 'Medical Center, Room 105'
    }
  ],
  addAppointment: (appointment) =>
    set((state) => ({
      appointments: [
        ...state.appointments,
        { ...appointment, id: state.appointments.length + 1 }
      ]
    }))
});