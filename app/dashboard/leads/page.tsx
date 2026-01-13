import StatusBadge from "./StatusBadge";

export default function LeadsPage() {
  type LeadStatus = "new" | "contacted" | "closed";

interface Lead {
  id: number;
  name: string;
  email: string;
  source: string;
  status: LeadStatus;
}

const leads: Lead[] = [
  {
    id: 1,
    name: "Ali Marketing",
    email: "ali@gmail.com",
    source: "Instagram",
    status: "new", // ✅ Type matches LeadStatus
  },
  {
    id: 2,
    name: "Startup XYZ",
    email: "hello@xyz.com",
    source: "Telegram",
    status: "contacted",
  },
  {
    id: 3,
    name: "Ecom Store",
    email: "store@mail.com",
    source: "Landing",
    status: "closed",
  },
];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Leads</h1>
        <p className="text-gray-500">
          Kelgan barcha potensial mijozlar
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Source</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 font-medium">
                  {lead.name}
                </td>
                <td className="px-4 py-3">{lead.email}</td>
                <td className="px-4 py-3">{lead.source}</td>
                <td className="px-4 py-3">
                  <StatusBadge status ={lead.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
