import { useState, useEffect } from 'react'
import css from './UserItems.module.css'
import avatarDefault from "../../images/avatarDefault.png";
import logo from "../../images/logo.png";

export const UserItems = ({ user }) => {
  const { id, tweets, followers, avatar = avatarDefault } = user;

  const [isFollowing, setIsFollowing] = useState(JSON.parse(localStorage.getItem(`${id}-isFollowing`)) ?? false)
  const [numberFollowers, setNumberFollowers] = useState(JSON.parse(localStorage.getItem(`${id}-followers`)) ?? followers)
    
  useEffect(() => {
    localStorage.setItem(`${id}-isFollowing`, JSON.stringify(isFollowing));
    localStorage.setItem(`${id}-followers`, JSON.stringify(numberFollowers));
  }, [isFollowing, numberFollowers]);

  const onFollowClick = () => {
    setIsFollowing(true);
    setNumberFollowers(numberFollowers + 1)
  }

    const onFollowingClick = () => {
      setIsFollowing(false);
      setNumberFollowers(numberFollowers - 1)
  }

  return <div className={css.userCard}>

    {/* <img src={logo} alt='logo' className={css.logo} width='76' /> */}
    {/* <svg width='76' height={22} fill='red'>
      <use href='../../images/logo.svg#icon-logo'/>
    </svg> */}
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