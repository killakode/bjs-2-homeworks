function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element, idx) => element === arr2[idx]); 
}

function getUsersNamesInAgeRange(users, gender) {

  let result = user.filter( e => e.gender === "мужской").map((x,idx) => x += user.age[idx]).reduce((acc,ageAll) => (acc + ageAll) / users.length, 0);
}