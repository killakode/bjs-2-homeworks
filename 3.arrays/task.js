function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element, idx) => element === arr2[idx]); 
}

function getUsersNamesInAgeRange(users, gender) {

  let filter = users.filter(item => item.gender === gender).map(item => item.age);
  let ageUsers = filter.reduce((sum, age) => sum + age, 0);

  if (filter.length > 0) {
    return (ageUsers / filter.length); 
  } else return 0;
}