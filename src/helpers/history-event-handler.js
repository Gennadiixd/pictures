// export const eventListener = (e) => {
//   const canHandle = (action) => {
//     return !!eventHandlers[action];
//   }

//   const handle = (action, ...args) => {
//     eventHandlers[action](...args);
//   }

//   const eventHandlers = {
//     remove: (payload) => {
//       removeHistoryItem(payload);
//     }
//   }

//   if (canHandle(e.action)) handle(e.action, e.payload);
// }

const registerEventHandlers = (arrayWithHandlers, _that) => {
  //handler - obj {key = event type, value = handler for this type of event}
  for (const handler of arrayWithHandlers) {
    for (const key in handler) {
      _that.eventHandlers[key] = handler[key];
    }
  }
}

export class EventListener {
  constructor(...args) {
    this.eventHandlers = {};
    registerEventHandlers(args, this)
    console.log(this.eventHandlers)
  }

  canHandle = (action) => {
    return !!this.eventHandlers[action];
  }

  handle = (action, ...args) => {
    this.eventHandlers[action](...args);
  }

  listen = (event) => {
    if (this.canHandle(event.action)) {
      this.handle(event.action, event.payload);
    }
  }
}