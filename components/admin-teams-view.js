"use client";

import { useEffect, useMemo, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const statusBadge = { active: "bg-[#426e12] text-[#c6f45a]", inactive: "bg-[#7a1f1f] text-[#ff9d9d]" };

const AdminTeamsView = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/teams");
        const result = await response.json();
        if (!response.ok) throw new Error(result.error);
        setTeams(result.teams);
      } catch (err) {
        setError(err.message || "Unable to load teams.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return teams;
    return teams.filter((team) => [team.name, team.uniqueKey, ...team.managers.flatMap((manager) => [manager.name, manager.phone, manager.email])].some((v) => v?.toLowerCase().includes(q)));
  }, [teams, search]);

  return <section className="rounded-lg border border-[#b8a18055] bg-[#031827]/90 p-4 shadow-lg">
    <h2 className="mb-4 flex items-center gap-2 font-[Impact,Arial_Narrow,sans-serif] text-sm tracking-wide"><i className="size-2 rounded-full bg-[#81bd30]" />ALL TEAMS</h2>
    <div className="mb-4 flex min-w-[220px] items-center gap-2 rounded border border-white/25 bg-[#02121f] px-3 py-2 text-xs text-[#aeb9bf]">
      <FaMagnifyingGlass />
      <input className="w-full bg-transparent text-white outline-none placeholder:text-[#7c8790]" placeholder="Search by team name, key, manager name, phone or email..." value={search} onChange={(event) => setSearch(event.target.value)} />
    </div>
    <p className="mb-2 text-xs text-[#8bc832]">{loading ? "Loading teams..." : `Showing ${filtered.length} of ${teams.length} teams`}</p>
    {error && <p className="mb-2 text-xs text-red-300">{error}</p>}
    <div className="overflow-x-auto">
      <table className="w-full min-w-[900px] text-left text-[11px]">
        <thead className="border-y border-white/15 text-[#d4dde1]"><tr><th className="px-2 py-2">#</th><th className="px-2 py-2">Logo</th><th className="px-2 py-2">Team Name</th><th className="px-2 py-2">Unique Key</th><th className="px-2 py-2">Managers</th><th className="px-2 py-2">Players</th><th className="px-2 py-2">Status</th><th className="whitespace-nowrap px-2 py-2">Registered</th></tr></thead>
        <tbody>
          {filtered.map((team, index) => <tr className="border-b border-white/10" key={team._id}>
            <td className="px-2 py-2">{index + 1}</td>
            <td className="px-2 py-2">{team.logoUrl ? <img className="size-8 rounded-full object-cover" src={team.logoUrl} alt={team.name} /> : "—"}</td>
            <td className="whitespace-nowrap px-2 py-2 font-medium">{team.name}</td>
            <td className="whitespace-nowrap px-2 py-2 font-mono">{team.uniqueKey}</td>
            <td className="px-2 py-2">{team.managers.map((manager) => <div className="whitespace-nowrap" key={`${manager.email}-${manager.phone}`}>{manager.name} • {manager.phone} • {manager.email}</div>)}</td>
            <td className="px-2 py-2">{team.players.length}</td>
            <td className="px-2 py-2"><b className={`rounded px-1.5 py-0.5 capitalize ${statusBadge[team.status]}`}>{team.status}</b></td>
            <td className="whitespace-nowrap px-2 py-2">{new Date(team.createdAt).toLocaleDateString()}</td>
          </tr>)}
          {!loading && !filtered.length && <tr><td className="px-2 py-6 text-center text-[#8b979d]" colSpan={8}>No teams match the search.</td></tr>}
        </tbody>
      </table>
    </div>
  </section>;
};

export default AdminTeamsView;
