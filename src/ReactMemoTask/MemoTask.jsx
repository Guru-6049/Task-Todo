import React, { useCallback, useMemo, useState } from 'react'
import List from '../ReactMemoTask/List'

const data = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Grapes",
  "Pineapple",
  "Papaya"
]

function MemoTask() {
    const [search, setSearch] = useState("");
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  // useMemo → avoid re-filtering unnecessarily
  const filteredData = useMemo(() => {
    console.log("Filtering list...");
    return data.filter(item =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Fruits</h2>

      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />

      <List items={filteredData} />
    </div>
  );
}

export default MemoTask