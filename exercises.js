'use strict';

//Do not change any of the function names

function makeCat(name, age) {
  var catObj = {
    name: name,
    age: age,
  };
  catObj.meow = function() {
    return 'Meow!';
  };
  return catObj;
}

function addProperty(object, property) {
  object[property] = null;
  return object;

}

function invokeMethod(object, method) {
  object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  return mysteryNumberObject.mysteryNumber * 5;
}

function deleteProperty(object, property) {
  delete object[property];
  return object;
}

function newUser(name, email, password) {
  var user = {
    name: name,
    email: email,
    password: password,
  };
  return user;
}

function hasEmail(user) {
  return user.email !== undefined && user.email !== '';
}

function hasProperty(object, property) {
  for (var key in object) {
    if (key === property) {
      return true;
    }
  }
  return false;
}

function verifyPassword(user, password) {
  return user.password === password;
}

function updatePassword(user, newPassword) {
  user.password = newPassword;
  return user;
}

function addFriend(user, newFriend) {
  for (var key in user) {
    if (key === 'friends') {
      user[key].push(newFriend);
    }
  }
  return user;
}

function setUsersToPremium(users) {
  for (var i = 0; i < users.length; i++) {
    for (var key in users[i]) {
      if (key === 'isPremium') {
        users[i][key] = true;
      }
    }
  }
  return users;
}

function sumUserPostLikes(user) {
  var sum = 0;
  for (var i = 0; i < user.posts.length; i++) {
    sum +=  user.posts[i].likes;
  }
  return sum;
}

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function() {
    return this.price - (this.price * this.discountPercentage);
  };
  return storeItem;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
