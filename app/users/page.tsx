interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "no-store", // Disable cache
    next: { revalidate: 10 }, // get fresh data every 10 seconds
  });

  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
