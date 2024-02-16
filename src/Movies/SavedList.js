import React from 'react';
import {useNavigate, Link} from 'react-router-dom'

export default function SavedList(props) {
  let navigate = useNavigate()
  function RouteHome (){
    navigate('/')
  }
  console.log(props)
  const {list} = props
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map((movie, key) => (
        <span key={key} className="saved-movie">{movie}</span>
      ))}
      <div onClick = {RouteHome} className="home-button">Home</div>
    </div>
  );
}
