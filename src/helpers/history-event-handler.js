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
    registerEventHandlers(args, this);
  }

  canHandle = (action) => {
    return !!this.eventHandlers[action];
  }

  handle = (action, ...args) => {
    this.eventHandlers[action](...args);
  }

  listen = (event) => {
    if (this.canHandle(event.target.action)) {
      event.stopPropagation();
      event.nativeEvent.stopPropagation();
      this.handle(event.target.action, event.target.payload);
    }
  }
}