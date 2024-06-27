import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import SkillSection from './SkillSection';
import './ProfilePage.css';

const ProfilePage = () => {
  const user = {
    profilePictureUrl: 'https://via.placeholder.com/150',
    name: 'Potharaju Praneeth',
    email: 'p.praneeth9224@gmail.com',
    bio: `Aspiring Computer Science major with a passion for web development, I am currently in my 4th year at Seshadri Rao Gudlavalleru Engineering College. My strong foundation in algorithms, data structures, and software development has allowed me to complete several impactful projects, including NXTWatch, a clone of Netflix, and a mobile app for managing student tasks. As an active participant in hackathons, I continually seek to challenge myself and push the boundaries of my knowledge. My career aspiration is to become a leading web developer, contributing to advancements in web technologies and creating innovative web applications.`,
    skills: [
      { name: 'React', level: 80 },
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 75 },
      { name: 'Machine Learning', level: 85 },
      { name: 'Data Structures', level: 70 },
    ]
  };

  return (
    <div className="profile-page">
      <ProfilePicture url={user.profilePictureUrl} />
      <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
      <SkillSection skills={user.skills} />
    </div>
  );
};

export default ProfilePage;
