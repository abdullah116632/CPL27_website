import connectToDatabase from "../../../lib/mongodb";
import Team from "../../../models/team";

export const runtime = "nodejs";

export const GET = async () => {
  await connectToDatabase();
  const teams = await Team.find().populate("players", "fullName playerId").sort({ createdAt: -1 }).lean();
  return Response.json({ teams });
};

export const POST = async (request) => {
  try {
    const { name, uniqueKey, managers } = await request.json();
    if (!name || !uniqueKey || !Array.isArray(managers) || !managers.length || managers.some(manager => !manager.name || !manager.phone || !manager.email)) {
      return Response.json({ error: "Team name, unique key, and at least one complete manager are required." }, { status: 400 });
    }
    await connectToDatabase();
    const team = await Team.create({ name, uniqueKey, managers });
    return Response.json({ team }, { status: 201 });
  } catch (error) {
    const status = error?.code === 11000 ? 409 : 500;
    return Response.json({ error: status === 409 ? "Team name or unique key already exists." : "Unable to create team." }, { status });
  }
};
