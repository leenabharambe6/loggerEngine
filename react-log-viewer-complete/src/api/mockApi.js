const mockLogs = [
  {
    level: "error",
    message: "Failed to connect to database.",
    resourceId: "server-1234",
    timestamp: "2023-09-15T08:00:00Z",
    traceId: "abc-xyz-123",
    spanId: "span-456",
    commit: "5e5342f",
    metadata: { parentResourceId: "server-5678" },
  },
  {
    level: "info",
    message: "User login successful.",
    resourceId: "server-5678",
    timestamp: "2023-09-16T10:15:00Z",
    traceId: "def-ghi-789",
    spanId: "span-789",
    commit: "9f8b2cd",
    metadata: { parentResourceId: "server-1234" },
  },
  {
    level: "warn",
    message: "High memory usage detected.",
    resourceId: "server-9999",
    timestamp: "2023-09-17T14:20:00Z",
    traceId: "hij-klm-111",
    spanId: "span-321",
    commit: "1a2b3c4",
    metadata: { parentResourceId: "server-5678" },
  }
];

export function getLogs(filters) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let results = [...mockLogs];

      if (filters.message) {
        results = results.filter(log =>
          log.message.toLowerCase().includes(filters.message.toLowerCase())
        );
      }

      if (filters.level) {
        results = results.filter(log => log.level === filters.level);
      }

      if (filters.resourceId) {
        results = results.filter(log =>
          log.resourceId.toLowerCase().includes(filters.resourceId.toLowerCase())
        );
      }

      if (filters.startDate) {
        results = results.filter(log =>
          new Date(log.timestamp) >= new Date(filters.startDate)
        );
      }

      if (filters.endDate) {
        results = results.filter(log =>
          new Date(log.timestamp) <= new Date(filters.endDate)
        );
      }

      results.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      resolve(results);
    }, 300);
  });
}
