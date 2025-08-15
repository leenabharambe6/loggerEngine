import React from "react";

export default function LogTable({ logs }) {
  const levelColors = {
    error: "bg-red-100 border-l-4 border-red-500",
    warn: "bg-yellow-100 border-l-4 border-yellow-500",
    info: "bg-blue-100 border-l-4 border-blue-500",
    debug: "bg-gray-100 border-l-4 border-gray-500",
  };

  return (
    <div className="p-4">
      {logs.length === 0 && <p>No logs found.</p>}
      <ul className="space-y-2">
        {logs.map((log, idx) => (
          <li key={idx} className={`p-3 rounded ${levelColors[log.level] || ""}`}>
            <div className="flex justify-between">
              <span className="font-bold">{log.level.toUpperCase()}</span>
              <span className="text-sm">{new Date(log.timestamp).toLocaleString()}</span>
            </div>
            <p>{log.message}</p>
            <small className="text-gray-600">Resource: {log.resourceId}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
