import { useState, useEffect } from 'react'
import css from './UserItems.module.css'
import avatarDefault from "../../images/avatarDefault.png";
import logo from "../../images/logo.png";

export const UserItems = ({ user }) => {
  const { id, tweets, followers, avatar = avatarDefault } = user

  const [isFollowing, setIsFollowing] = useState(false)

  const [numberFollowers, setNumberFollowers] = useState(followers)

  useEffect(() => {
  localStorage.setItem(`${id} isFollowing`, isFollowing);
}, [isFollowing]);

useEffect(() => {
  const storedIsFollowing = localStorage.getItem('isFollowing');
  console.log("storedIsFollowing:", storedIsFollowing)
  // if (storedIsFollowing !== null) {
  //   setIsFollowing(Boolean(storedIsFollowing));
  // }

}, []);



  const onFollowClick = () => {
    setIsFollowing(!isFollowing)
    setNumberFollowers(numberFollowers + 1)
    // localStorage.setItem(`${id} followers`, numberFollowers)
  }

    const onFollowingClick = () => {
      setIsFollowing(!isFollowing)
      setNumberFollowers(numberFollowers - 1)
      // localStorage.setItem(`${id} followers`, numberFollowers)
  }

  return <div className={css.userCard}>

    <img src={logo} alt='logo' className={css.logo} width='76' />
    <div className={css.imageContainer}>

    </div>

    <div className={css.avatarContainer}>
      <img src={avatar} alt='avatar' className={css.avatar} width='64' />
    </div>
    
    <div className={css.textContainer}>
      <p className={css.text}>{tweets} tweets</p>
      <p className={css.text}>{numberFollowers.toLocaleString('en-US')} followers</p>
      {isFollowing ?
        <button
          onClick={onFollowingClick}
          className={`${css.button} ${css.following}`}>Following</button>
      : <button
          onClick={onFollowClick}
          className={`${css.button} ${css.follow}`}>Follow</button>
      }
  </div>
    
  </div>
}