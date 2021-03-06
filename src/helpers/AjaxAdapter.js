
export default class AjaxAdapter{
  static getAllOpps() {
    return fetch('/api/opps')
    .then((r) => {
      return r.json();
    });
  }

static getCertainOpps() {
    return fetch('/api/opps')
    .then((r) => {
      return r.json();
    });
  }
  static getOppsForUser(user) {
    return fetch(`/api/${user}`)
    .then((r) => {
      return r.json();
    })
  }

  static addOpp(newOpp) {
    console.log('newOpp..', newOpp);
    return fetch(`/api/opps`, {
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
