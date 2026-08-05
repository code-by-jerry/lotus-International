import { NextResponse } from "next/server";
import * as z from "zod";

const rfqSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  country: z.string().min(2),
  category: z.string().min(1),
  quantity: z.string().min(1),
  timeline: z.string().min(1),
  message: z.string().min(10),
  items: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      fabric: z.string(),
    })
  ).optional(),
  techPackName: z.string().nullable().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = rfqSchema.parse(body);

    // In a real application, we would use Nodemailer, SendGrid, Resend, or a CRM web-hook here.
    console.log("---- RECEIVED RFQ INQUIRY ----");
    console.log("Details:", validatedData);
    console.log("-------------------------------");

    // Return a success JSON payload
    return NextResponse.json({
      success: true,
      message: "RFQ received successfully. Our merchandising desk will follow up in 1 business day.",
      submissionId: `RFQ-${Math.floor(100000 + Math.random() * 900000)}`,
    });
  } catch (error) {
    console.error("RFQ validation failed:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
