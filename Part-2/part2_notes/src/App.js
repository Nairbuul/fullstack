/*Original Code */
/* <Section 5 Rendering Collections> */
//====================================================
// const App = (props) => {
//   const { notes } = props

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         <li>{notes[0].content}</li>
//         <li>{notes[1].content}</li>
//         <li>{notes[2].content}</li>
//       </ul>
//     </div>
//   )
// }
//====================================================

/*Editted Code to make it more readable.*/
//====================================================
const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <li>
            {note.content}
          </li>
        )}
      </ul>
    </div>
  )
}
//====================================================



export default App