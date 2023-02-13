// Observer Pattern (complicated)

// where we maintain a list of objects based on events,
//      updating data based on these events.

// for example, subscribe methods in MeteorJS

class Car {
  constructor(gas) {
    this.gas = gas;
  }

  setGasLevel(val) {
    this.gas = val;
    this.notifyAll();
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions.remove.filter(function (el) {
      return el !== observer;
    });
  }

  notifyAll() {
    return this.actions.forEach(
      function (el) {
        el.update(this);
      }.bind(this)
    );
  }
}

class consumption {
  update(car) {
    car.gas = car.gas + 1;
  }
}

// https://www.meteor.com/ => Open Source => Docs =>
// search for: Publish and subscribe

// The Observer pattern offers a subscription model in which objects subscribe to
//     an event and get notified when the event occurs. (hotel room)
