import { useLocation } from "react-router-dom"

export function usePage(): string {
  const { pathname } = useLocation()

  return pathname
}
