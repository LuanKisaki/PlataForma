import { useEffect } from "react"


function App() {
  // tentando consumir a API, porém essas ferramentas não são feitas para utilizar o GraphQL
  // para isso utilizarei o Apollo
  // ex.: para listar lessons
  // useEffect(() => {
  // fetch('https://api-sa-east-1.graphcms.com/v2/cl4ow0max1aot01z402b3fh4x/master', {
  //  method: 'POST',
  //  body: `query {
  //        }`
  //      })
  // }, [])


  return (
    
    <h1 className="text-5xl font-bold text-blue-500" >Hello World</h1>
  )
}

export default App
