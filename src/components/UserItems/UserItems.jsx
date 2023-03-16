import css from './UserItems.module.css'

export const UserItems = ({ user }) => {
console.log("user:", user)

  return <div className={css.UserCard}>
    
    <p>{user.tweets} tweets</p>
    <p>{user.followers} followers</p>
    <button>Follow</button>
  </div>
}