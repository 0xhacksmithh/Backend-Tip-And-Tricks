export const getUsers = (req, res) => {
  res.json({
    version: "v2",
    data: [
      { id: 1, name: "Alice", email: "alice@mail.com" },
      { id: 2, name: "Bob", email: "bob@mail.com" },
    ],
    count: 2,
  });
};
