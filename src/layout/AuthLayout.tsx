import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/hooks";

const AuthLayout = () => {
  const { isLogin } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  return (
    <div className="flex items-center justify-center w-screen md:h-screen">
      <Outlet />
    </div>
  );
}

export default AuthLayout
