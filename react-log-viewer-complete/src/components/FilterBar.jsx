import React from "react";

export default function FilterBar({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 bg-gray-100 flex flex-wrap gap-4 items-end">
      <input
        type="text"
        name="message"
        placeholder="Search message"
        value={filters.message}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <select
        name="level"
        value={filters.level}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="">All Levels</option>
        <option value="error">Error</option>
        <option value="warn">Warning</option>
        <option value="info">Info</option>
        <option value="debug">Debug</option>
      </select>
      <input
        type="text"
        name="resourceId"
        placeholder="Resource ID"
        value={filters.resourceId}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="datetime-local"
        name="startDate"
        value={filters.startDate}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input
        type="datetime-local"
        name="endDate"
        value={filters.endDate}
        onChange={handleChange}
        className="border p-2 rounded"
      />
    </div>
  );
}
