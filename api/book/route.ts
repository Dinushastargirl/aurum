
// This file is structured for Next.js App Router (e.g., app/api/book/route.ts)
// It follows the requirements to provide a backend-ready structure.

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Basic Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // This is where you would integrate with your database (Prisma, MongoDB, etc.)
    // or an email service (Resend, SendGrid, MailerSend, etc.)
    // Example:
    // await db.appointment.create({ data: { name, email, phone, message } });
    
    console.log('New Booking Received:', { name, email, phone, message });

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Appointment request received successfully',
        data: { receivedAt: new Date().toISOString() }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
