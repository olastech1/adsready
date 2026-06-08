import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch the latest resume for the user
    const resume = await prisma.resume.findFirst({
      where: { userId: session.user.id },
      orderBy: { updatedAt: "desc" },
    });

    if (!resume) {
      return NextResponse.json({ resume: null });
    }

    return NextResponse.json({ resume: { ...resume, data: JSON.parse(resume.data) } });
  } catch (error) {
    console.error("Failed to fetch resume:", error);
    return NextResponse.json({ error: "Failed to fetch resume" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data } = await req.json();

    // Check if a resume already exists for the user
    const existingResume = await prisma.resume.findFirst({
      where: { userId: session.user.id },
    });

    let resume;
    if (existingResume) {
      resume = await prisma.resume.update({
        where: { id: existingResume.id },
        data: { data: JSON.stringify(data), updatedAt: new Date() },
      });
    } else {
      resume = await prisma.resume.create({
        data: {
          title: "My Resume",
          data: JSON.stringify(data),
          userId: session.user.id,
        },
      });
    }

    return NextResponse.json({ success: true, resume: { ...resume, data: JSON.parse(resume.data) } });
  } catch (error) {
    console.error("Failed to save resume:", error);
    return NextResponse.json({ error: "Failed to save resume" }, { status: 500 });
  }
}
