import axios from "axios"
import { useState, useEffect } from 'react'

export default function App() {


  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [dinoName, setDinoName] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    getApiAsyncAwait();
    getApiThenCatch();
  }, [])

  async function getApiAsyncAwait() {
    try {
      const quote = await axios.get('https://api.quotable.io/random')

      setContent(quote.data.content)
      setAuthor(quote.data.author)

    } catch (err) {
      console.log(err.message)
    }

  }

  function getApiThenCatch() {
    axios.get('https://dinosaur-facts-api.shultzlab.com/dinosaurs/random')
      .then(function (result) {
        setDinoName(result.data.Name)
        setDescription(result.data.Description)

      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return <>
    <h1>API Call Async Await</h1>
    <button onClick={getApiAsyncAwait}>
      Get API
    </button>
    <br /><br />
    <p >Quote: {content}</p>
    <p >Author: {author}</p>
    <br />
    <br />
    <br />
    <hr />
    <br />
    <br />
    <br />
    <h1>API Call Then Catch</h1>
    <button onClick={getApiThenCatch}>
      Get API
    </button>
    <br /><br />
    <p >Dino Name: {dinoName}</p>
    <p >Description: {description}</p>

  </>
}


