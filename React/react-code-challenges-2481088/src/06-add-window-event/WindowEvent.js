import { useEffect } from "react"

export default function WindowEvent () {

  useEffect(() => {
    const doulbleClick = () => alert('mouse pressed')
      window.addEventListener('dblclick', doulbleClick)
      return () => window.removeEventListener('dblclick', doulbleClick)
    }, [])

  return (
    <h2>Window event active</h2>
  )
}
