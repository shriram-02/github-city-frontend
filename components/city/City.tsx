"use client";

import { useState } from "react";

import SearchBar from "../ui/SearchBar";

import BuildingGrid from "./BuildingGrid";

export default function City() {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBar value={search} onChange={setSearch} />

      <BuildingGrid search={search} />
    </>
  );
}
