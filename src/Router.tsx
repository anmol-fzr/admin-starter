import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthLayout } from "@/layout";

import { Loading } from "@/pages";

// Other
const NotFound = lazy(() => import("@/pages/other/NotFound"))

// Auth
const Login = lazy(() => import("@/pages/auth/Login"))

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
