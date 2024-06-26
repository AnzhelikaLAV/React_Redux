import { UsersPageWrapper, UserCard, Paragraph } from "./styles"

import { useAppSelector } from "store/hooks"
import { usersSliceSelectors } from "store/redux/userSlice/userSlice"

function Users() {
  const users = useAppSelector(usersSliceSelectors.users)

  const userCards = users.map((user) => {
    return (
      <UserCard key={user.id}>
        <Paragraph>{user.fullName}</Paragraph>
        <Paragraph>{user.age}</Paragraph>
        <Paragraph>{user.jobTitle}</Paragraph>
      </UserCard>
    )
  })

  return (
    <UsersPageWrapper>
      {userCards}
    </UsersPageWrapper>
  )
}

export default Users
