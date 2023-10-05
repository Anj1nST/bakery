import React from "react";
import { IDefaultLayout } from "./types";
import "./styles.scss";

const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {
  return <main className="layout">{children}</main>;
};

export default DefaultLayout;
