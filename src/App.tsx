import React, { type FC } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { JiYuAuth } from "./routes/jiyu-auth";

const ProtectedRoute: FC<{ children: JSX.Element }> = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const isLogin = true;
  return isLogin ? children : <Navigate to="/login" replace />;
};

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/jiyu/auth" replace />} />
        <Route
          path="/jiyu/auth"
          element={
            <ProtectedRoute>
              <JiYuAuth />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
