import React, { useState, useEffect } from "react";
import FilterBar from "./components/FilterBar";
import LogTable from "./components/LogTable";
import LogIngestionForm from "./components/logIngestionForm";
import axios from "axios";
export default function App() {
  const [filters, setFilters] = useState({
    message: "",
    level: "",
    resourceId: "",
    startDate: "",
    endDate: "",
  });
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log(filters)
    let url = 'http://localhost:3000/logs?';
    if(filters.message !== ''){
      url += `message=${filters.message}&`;
    }if(filters.level !== ''){
      url += `level=${filters.level}&`;
    }if(filters.resourceId !== ''){
      url += `resourceId=${filters.resourceId}&`;
    }if(filters.startDate !== ''){
      url += `timestamp_start=${filters.startDate}&`;
    }if(filters.endDate !== ''){
      url += `timestamp_end=${filters.endDate}&`;
    }
    axios.get(url).then((data) => {
      console.log(data)
      setLogs(data.data);
      setLoading(false);
    });
  }, [filters]);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold p-5">Log Ingestion</h1>
      <LogIngestionForm />
      
      <hr /> 
      <h1 className="text-2xl font-bold p-5">Log Viewer</h1>
      <FilterBar filters={filters} setFilters={setFilters} />
      {loading ? <p className="p-5">Loading...</p> : <LogTable logs={logs} />}
    </div>
  );
}
