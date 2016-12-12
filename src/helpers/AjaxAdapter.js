function indexByKeyName(arr, keyName) {
  return arr.reduce((obj, el) => {
    obj[el[keyName]] = el;
    return obj;
  }, {});
}

export default class AjaxAdapter{
  static getAllOpps() {
    return fetch('/api/opps')
    .then((r) => {
      return r.json();
    })
    .then(data => indexByKeyName(data, 'id'));
  }

  static getOppsForUser(user) {
    return fetch(`/api/${user}`)
    .then((r) => {
      return r.json();
    })
    .then(data => indexByKeyName(data, 'id'));
  }

  static addOpp(newOpp) {
    // console.log('newevent..', newEvent);
    return fetch('/api/opps', {
      method:  'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newOpp)
    })
      .then(r => r.json());
  }

  static deleteOpp(id) {
    return fetch(`/api/opps/${id}`, {
      method:  'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(r => r.json());
  }
}
