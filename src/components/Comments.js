import React from 'react'
import useFetch from "./hooks/fetch";
import Button from "react-bootstrap/Button";
import {useState} from "react"
import './comments.css'

export default function Comments() {
   // Kommentin jättämiseen tarvittavat hookit
   const [comment, setComment] = useState("")

   // Tietokannasta kommentit
   const urlParams = new URLSearchParams(window.location.search);
   const myParam = urlParams.get("productid");
   let comments = useFetch(
     "http://localhost/Group-Project-5-BackEnd/comments.php?id=" + myParam,
     { method: "GET", headers: { "Content-Type": "application/json" } } 
   );
   console.log(comments)

   function readComments() {
      const printedComments = comments.map(function(kommentti) { return <li key={kommentti.id}>{kommentti.comments}</li>});
      console.log(printedComments)
      return printedComments
   }
   // Kommenttien lisääminen
 
   function postComment(e) {
      e.preventDefault();
      fetch ('http://localhost/Group-Project-5-BackEnd/postComment.php',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-type':'application/json',
          },
          body: JSON.stringify({
            productID: myParam,
            text: comment,
          }),
          
        }
      )
      .then((res) => res.json())
      .then ((result) => {
        console.log(result);
      })
      console.log(myParam);
      console.log(comment)
   }

   return (
      <div>
         <form onSubmit={postComment}>
         <input type="text" name="comment" value={comment} onChange={e => setComment(e.target.value)} />
            <Button className="buttoni" type="submit">
               Post comment
            </Button>
         </form>
         {comments ?
         <ul className="list">
            {readComments()}
         </ul>
         : null }
      </div>
   )
}
