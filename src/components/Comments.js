import React from 'react'

export default function Comments() {
   // Kovakoodatut kommentit
   let kommentit = ["Tämähän on aivan ihime tuote", "Aivan paras (best evö)s"]
   
   function readComments() {
      const printedComments = kommentit.map((kommentti) => <li key={kommentti}>{kommentti}</li>);
      return printedComments
   }

   return (
      <div>
         <ul>
            {readComments()}
         </ul>
      </div>
   )
}
