import { useDispatch, useSelector } from "react-redux"
import { bookSlice } from "./BookSlice"


export default function App() {
  const selector = useSelector(state => state.book)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Movies </h1>
      <ul>
        <li></li>
      </ul>
    </>

  )
}