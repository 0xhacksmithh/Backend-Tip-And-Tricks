export const getUsers = (req, res) => {
  res.json({
    version: "v1",
    users: [
      { id: 1, name: "sathya" },
      { id: 2, name: "megha" },
    ],
  });
};
