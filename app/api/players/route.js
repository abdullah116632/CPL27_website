import connectToDatabase from "../../../lib/mongodb";
import Player from "../../../models/player";

export const runtime = "nodejs";

export const GET = async () => {
  await connectToDatabase();
  const players = await Player.find().populate("team", "name").sort({ createdAt: -1 }).lean();
  return Response.json({ players });
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { fullName, phone, playerId, email, session, categories, photoUrl } = body;
    if (![fullName, phone, playerId, email, session].every(Boolean) || !Array.isArray(categories) || !categories.length) {
      return Response.json({ error: "All required player fields must be provided." }, { status: 400 });
    }
    await connectToDatabase();
    const player = await Player.create({ fullName, phone, playerId, email, session, categories, photoUrl });
    return Response.json({ player }, { status: 201 });
  } catch (error) {
    const status = error?.code === 11000 ? 409 : 500;
    return Response.json({ error: status === 409 ? "Player ID or email already exists." : "Unable to create player." }, { status });
  }
};
