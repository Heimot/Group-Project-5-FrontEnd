import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Logout({setUser, user}) {
  useEffect(() => {
    async function logout() {
      const config = {
        method: 'GET',
        credentials: 'include'
      }
  
      const url = 'http://localhost/Group-Project-5-BackEnd/logout.php';
      try {
        await fetch(url,config);
        setUser(null);
        localStorage.clear(user);
      } catch (error) {
        alert(error);
      }
    }
    logout();
  }, [])

  return (
      
    <div className="container">
      <h2>Olet kirjautunut ulos!</h2>
      <Link to="/login">Kirjaudu sisään</Link>
    </div>
  )
  }