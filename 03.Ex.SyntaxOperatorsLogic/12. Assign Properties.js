function  assignProp(arr) {
 let obj = {};
 obj[arr[0]] = arr[1];
 obj[arr[2]] = arr[3];
 obj[arr[4]] = arr[5];
 console.log(obj)
}
assignProp(['name', 'Pesho', 'age', '23', 'gender', 'male'])