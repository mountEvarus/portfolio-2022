export function useYear(): number {
  const date = new Date()

  return date.getFullYear()
}
