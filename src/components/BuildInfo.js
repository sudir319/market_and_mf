import React from "react";

export default function VersionInfo() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const version = `${year}.${month}.${day}`;
  return <div align="center">This is build on {version}</div>;
}
