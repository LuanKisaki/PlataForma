import { gql, useQuery } from "@apollo/client"


const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface Lesson {
  id: string;
  title: string;
}

function App() {
  /* 
   Tentando consumir a API, porém essas ferramentas não são feitas para utilizar o GraphQL
   para isso utilizarei o Apollo
   ex.: para listar lessons
   useEffect(() => {
   fetch('https://api-sa-east-1.graphcms.com/v2/cl4ow0max1aot01z402b3fh4x/master', {
    method: 'POST',
    body: `query {
          }`
        })
   }, [])  
_____________________________

useEffect(() => {
  client.query({
    query: GET_LESSONS_QUERY,
  }).then(response => {
    console.log(response.data)
  })
}, [])
*/

const { data } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY)  

return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
