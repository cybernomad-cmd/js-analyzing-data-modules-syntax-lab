function combineUsers(...arrays) {
  const mergedUsers = arrays.flat();

  return {
    users: mergedUsers,
    merge_date: Date.today().toString("M/d/yyyy")
  };
}

module.exports = { combineUsers };