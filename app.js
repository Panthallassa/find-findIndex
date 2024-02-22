const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

function findUserByname(arr, str) {
    return arr.find(function(obj) {
        return obj.username === str;
    });
}

function removeUser(arr, str) {
    const target = arr.findIndex(function(obj) {
        return obj.username === str;
    });

    if (target !== -1) {
        const foundUser = arr[target];
        arr.splice(target, 1);

        return foundUser;
    }
}