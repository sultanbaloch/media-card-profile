import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';





function Profile(profile) {
  profile = {
    date: new Date().toLocaleTimeString(),
    userName: "Sultan Sarwar",
    profilePic: "https://www.w3schools.com/howto/img_avatar.png",
    title: "Myanmar’s army arrest Aung San Suu Kyi after staging coup",
    imageUrl: "https://www.thenews.com.pk/assets/uploads/updates/2021-02-01/783355_3546484_Myanmar-2_updates.jpg",
    body: "he intervention followed weeks of rising tensions between the military, which ruled the country for nearly five decades, and the civilian government over elections in November last year that Suu Kyi’s National League for Democracy (NLD) party won easily."

  }

  return <div className="main">
    <div className="mediacard">
      <div className="userData">
        <div className="userImage"><img className="userProfile" src={profile.profilePic} /></div>
        <div className="NameData">
          <span>{profile.userName}</span>
          <br />
          <span>{profile.date}</span>
        </div>
        <img className="userProfile1" src={profile.imageUrl} />
      </div>
      <h3>{profile.title}</h3>
      <p>{profile.body}</p>
    </div>
  </div>
}




function MediaCard(image) {


  return <div>
    <div><p><img className="mediacard" src={image.imageUrl}></img></p>
      <h1>{image.title}</h1>
      <p>{image.body}</p>
    </div>

    <Profile />
    <Profile />
    <Profile />
  </div>

}


ReactDOM.render(<MediaCard />, document.querySelector("#root"))