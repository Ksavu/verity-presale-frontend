import { useEffect, useState } from "react";
import { getTotalUSD, CONFIG } from "../lib/presale";

export const ProgressBar = () => {
  const [total, setTotal] = useState(0);
  const [softcap, setSoftcap] = useState(0);

  useEffect(() => {
    setSoftcap(CONFIG?.softcapUSD || 100000);
    setTotal(getTotalUSD());

    const interval = setInterval(() => setTotal(getTotalUSD()), 1000);
    return () => clearInterval(interval);
  }, []);

  const percent = softcap ? Math.min((total / softcap) * 100, 100) : 0;

  return (
    <div
      style={{
        width: "100%",
        background: "#111d33",
        borderRadius: "8px",
        overflow: "hidden",
        margin: "10px 0",
      }}
    >
      <div
        style={{
          width: `${percent}%`,
          height: "24px",
          background: "linear-gradient(270deg, #4facfe, #00f2fe, #4facfe)",
          backgroundSize: "600% 600%",
          borderRadius: "8px",
          animation: "gradientAnim 3s ease infinite",
          textAlign: "center",
          color: "white",
          lineHeight: "24px",
          fontWeight: "bold",
        }}
      >
        {total.toLocaleString()} / {softcap.toLocaleString()} USD
      </div>
      <style>
        {`
          @keyframes gradientAnim {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};
