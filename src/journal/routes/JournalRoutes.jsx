import React from "react";
import { HomePage } from "../pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path='/*' element={<Navigate to="/"/>} />
    </Routes>
  );
};
