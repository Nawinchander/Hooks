function UserCard({ user }) {
  return (
    <div>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
    </div>
  );
}

export default UserCard;
