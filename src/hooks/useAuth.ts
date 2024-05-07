import { useAuthStore } from "@/store"
import { logout } from "@/utils"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

const useAuth = () => {
  const isLogin = useAuthStore(state => state.creds.isLogin)
  const navigate = useNavigate()

  const onLogout = useCallback(() => {
    logout()
    navigate("/auth/login")
  }, [navigate])

  return { isLogin, onLogout }
}

export { useAuth }
