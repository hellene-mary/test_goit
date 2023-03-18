import userData from "../../db/userData.json";
import css from "./UserList.module.css"
import { UserItems } from "../UserItems/UserItems"

export const UserList = () => {
  const users = userData.users

  return <div className={css.UserList}>
    {users.map(user => <UserItems key={user.id} user={user} />)}
  </div>
}