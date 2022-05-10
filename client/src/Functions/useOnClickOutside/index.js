import { useEffect } from 'react'

export default function useOnClickOutside(ref, handler, ignore = null) {
  useEffect(
    () => {
      const listener = (event) => {
        if (
          !ref.current ||
          ref.current.contains(event.target) ||
          (ignore!=null && ignore.current && ignore.current.contains(event.target))
        ) {
          return
        }
        handler(event)
      }
      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)
      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    [ref, handler]
  )
}
