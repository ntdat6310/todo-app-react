import React from "react";
import { getDateTodayString } from "../utils/date";

export default function Header() {
  return <header className="page-header text-start ms-4">{getDateTodayString()}</header>;
}
