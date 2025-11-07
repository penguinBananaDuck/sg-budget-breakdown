import * as React from "react";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import * as COST_CENTERS from '../data/cost_centers.json';

const DEFAULT_YEAR = 2023;

/**
 * Returns cost center data.
 *
 * @param year The fiscal year
 * @returns The cost center for the given fiscal year.
 */
function getData(year: number = DEFAULT_YEAR) {
  let data = [];

  for (let i = 0; i < 2089; i++) {
    let item = COST_CENTERS[i];
    data.push({
      id: item.id,
      name: item.name,
      revenue: item.revenue,
      expenses: item.expenses
    })
  };

  return data;
}

function filterResults(data: CostCenterInfo[], query: string) {
  return data.filter(({ id, name, expenses, revenue }) => {
    const normalizedQuery = query.toLocaleLowerCase();
    return (
      name.toLowerCase().startsWith(normalizedQuery) ||
      name.toLowerCase().indexOf(normalizedQuery) >= 0 ||
      String(id).startsWith(normalizedQuery) ||
      String(id).endsWith(normalizedQuery)
    );
  });
}

/**
 * Options used to filter and query searches.
 */
interface SearchSettings {
  sortBy: keyof CostCenterInfo;
}

/**
 * Sort the given data by a cost center attribute.
 *
 * @param table The data to sort
 * @param param1 options used to sort the data
 * @returns A function that can be used to sort the data by the given key.
 */
function getSortFunction(settings: SearchSettings | null = null) {
  if (!settings) {
    return undefined;
  }
  const { sortBy } = settings;
  return (first: CostCenterInfo, second: CostCenterInfo) => {
    return first[sortBy] > second[sortBy] ? 1 : -1;
  };
}

interface TableSortHeaderProps {
  id: string;
  label: string;
  onOptionClicked: (id: string) => void;
  active: boolean;
  isPrimary?: boolean;
}

function TableSortColumnHeader({
  id,
  label,
  onOptionClicked,
  active,
  isPrimary = false,
}: TableSortHeaderProps) {
  return (
    <th className={"p-4 space-x-4 " + (isPrimary ? "text-right" : "text-left")}>
      <span>{label}</span>
      <div
        className={
          "inline hover:bg-slate-300 transition rounded-lg p-1 cursor-pointer tableSort " +
          (active ? "bg-blue-200" : "bg-slate-200")
        }
        onClick={() => onOptionClicked(id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="inline w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </th>
  );
}

/**
 * A component that allows the user to search and filter cost centers by ID and other attributes.
 */
export default function SearchApp() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<CostCenterInfo[]>([]);
  const [sortBySelection, setSortBySelection] =
    useState<keyof CostCenterInfo>("id");

  const handleSubmit = () => { };

  useEffect(() => {
    const result = getData();
    setData(result);
  }, []);

  const handleUpdate = (newQuery: string) => {
    setQuery(newQuery);
  };

  const handleSortOptionClicked = (id: string) => {
    // TODO: Fix potential edge case
    setSortBySelection(id as keyof CostCenterInfo);
  };

  const rows = filterResults(data, query)
    .sort(getSortFunction({ sortBy: sortBySelection }))
    .map((data) => {
      return <TableRow key={data.id} data={data} />;
    });

  return (
    <div className="max-w-4xl mx-auto m-4 rounded-lg bg-white shadow-md">
      <div className="pt-1 px-2 sticky top-0 bg-white rounded-lg">
        <SearchBox
          currentQuery={query}
          onUpdate={handleUpdate}
          onSubmit={handleSubmit}
        />
        <span className="italic text-sm">
          Showing data for fiscal year 2023 (ending August 31, 2023)
        </span>
      </div>
      <table className="w-full mt-4">
        <thead className="w-full p-4 bg-gray-100 sticky top-16">
          <tr className="w-full">
            <TableSortColumnHeader
              id="id"
              label="Cost Center #"
              onOptionClicked={handleSortOptionClicked}
              active={sortBySelection == "id"}
              isPrimary
            />
            <TableSortColumnHeader
              id="name"
              label="Name"
              onOptionClicked={handleSortOptionClicked}
              active={sortBySelection == "name"}
            />
            <TableSortColumnHeader
              id="revenue"
              label="Revenue"
              onOptionClicked={handleSortOptionClicked}
              active={sortBySelection == "revenue"}
            />
            <TableSortColumnHeader
              id="expenses"
              label="Expenses"
              onOptionClicked={handleSortOptionClicked}
              active={sortBySelection == "expenses"}
            />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

interface TableRowProps {
  data: CostCenterInfo;
}

/**
 * A row of this table that shows cost center information.
 */
function TableRow({ data: { id, name, expenses, revenue } }: TableRowProps) {
  return (
    <tr className="border-slate-200 border-b-[1px]">
      <td className="px-4 py-2 font-bold text-right">{id}</td>
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">
        {expenses.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
      <td className="px-4 py-2">
        {revenue.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
    </tr>
  );
}

/**
 * Accounting data corresponding to a cost center.
 */
type CostCenterInfo = {
  /**
   * The cost center number.
   *
   * This is the unique identifier for this cost center.
   */
  id: number;

  /**
   * A human-readable name for the Cost Center.
   */
  name: string;

  /**
   * The budgeted expenses.
   */
  expenses: number;

  /**
   * The budgeted (expected) revenue.
   */
  revenue: number;
};

interface SearchBoxProps {
  /**
   * The current contents of the search box.
   */
  currentQuery: string;

  /**
   * Called every time the search box content updates.
   *
   * @param query The input string
   */
  onUpdate: (query: string) => void;

  /**
   * Called when the search box content submission is triggered.
   */
  onSubmit: () => void;
}

/**
 * A search box with callbacks for query updates.
 */
function SearchBox({ currentQuery, onUpdate, onSubmit }: SearchBoxProps) {
  const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    onUpdate(value);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  const isDisabled = currentQuery.trim() === "";

  return (
    <div className="flex p-2 space-x-4">
      <input
        className="p-2 flex-1 bg-slate-200 rounded-md"
        type="text"
        name="searchQuery"
        id="searchQuery"
        placeholder="Search by cost center number or title"
        onChange={handleUpdate}
        value={currentQuery}
      />
      <button
        className="p-2 text-white font-semibold bg-primary disabled:bg-slate-200 disabled:text-slate-700 rounded-md hover:bg-black transition cursor-pointer disabled:cursor-not-allowed"
        onClick={handleSubmit}
        disabled={isDisabled}
      >
        Search
      </button>
    </div>
  );
}

const container = document.getElementById("searchRoot");
const root = createRoot(container);
root.render(<SearchApp />);
