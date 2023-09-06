async function getData() {
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList)
  return await result
}

function test(userList) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(userList.map(user => ({
        ...user,
        full_name: user.family_name + ' ' + user.first_name
      })));
    }, 3000);
  });
}
