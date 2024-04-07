function User() {
  const userData = {
    name: "John",
    lastname: "Doe",
    occupation: "student",
    age: 27,
  };
  return (
    <div className="user-card">
      <h2>
        Name: {userData.name}, <br /> lastname: {userData.lastname}
      </h2>
      <p>{userData.occupation}</p>
    </div>
  );
}

export default User;
