'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: Date;
}

export interface Message {
  id: string;
  name: string;
  phone: string;
  message: string;
  read: boolean;
  created_at: Date;
}

const isDbConfigured = () => !!process.env.POSTGRES_URL;

export async function checkDbStatus() {
  return isDbConfigured();
}

export async function initDb() {
  if (!isDbConfigured()) return;
  
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS appointments (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        service VARCHAR(100) NOT NULL,
        date VARCHAR(50) NOT NULL,
        time VARCHAR(50) NOT NULL,
        status VARCHAR(20) DEFAULT 'pending',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    await sql`
      CREATE TABLE IF NOT EXISTS messages (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        message TEXT NOT NULL,
        read BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
  } catch (error) {
    console.error("Failed to initialize database tables:", error);
    throw error;
  }
}

export async function createAppointment(data: Omit<Appointment, 'id' | 'status' | 'created_at'>) {
  if (!isDbConfigured()) throw new Error("Database not configured");
  
  // Ensure tables exist before inserting
  await initDb();
  
  await sql`
    INSERT INTO appointments (name, phone, service, date, time)
    VALUES (${data.name}, ${data.phone}, ${data.service}, ${data.date}, ${data.time})
  `;
  revalidatePath('/admin');
}

export async function getAppointments(): Promise<Appointment[]> {
  if (!isDbConfigured()) return [];
  
  try {
    const { rows } = await sql<Appointment>`SELECT * FROM appointments ORDER BY created_at DESC`;
    return rows;
  } catch (error) {
    console.error("Failed to fetch appointments:", error);
    return [];
  }
}

export async function updateAppointmentStatus(id: string, status: string) {
  if (!isDbConfigured()) return;
  
  await sql`UPDATE appointments SET status = ${status} WHERE id = ${id}`;
  revalidatePath('/admin');
}

export async function createMessage(data: Omit<Message, 'id' | 'read' | 'created_at'>) {
  if (!isDbConfigured()) throw new Error("Database not configured");
  
  // Ensure tables exist before inserting
  await initDb();
  
  await sql`
    INSERT INTO messages (name, phone, message)
    VALUES (${data.name}, ${data.phone}, ${data.message})
  `;
  revalidatePath('/admin');
}

export async function getMessages(): Promise<Message[]> {
  if (!isDbConfigured()) return [];
  
  try {
    const { rows } = await sql<Message>`SELECT * FROM messages ORDER BY created_at DESC`;
    return rows;
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return [];
  }
}

export async function markMessageRead(id: string) {
  if (!isDbConfigured()) return;
  
  await sql`UPDATE messages SET read = TRUE WHERE id = ${id}`;
  revalidatePath('/admin');
}
