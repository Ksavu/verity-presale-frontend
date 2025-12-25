import { getBuyers } from "../lib/presale";

export const AdminPanel = () => {
  const buyers = getBuyers();

  return (
    <div style={{ margin: "20px 0", padding: "16px", border: "1px solid #ccc" }}>
      <h3>Admin Panel</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Address</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Amount USD</th>
          </tr>
        </thead>
        <tbody>
          {buyers.map((b, i) => (
            <tr key={i}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{b.address}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{b.amountUSD}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
