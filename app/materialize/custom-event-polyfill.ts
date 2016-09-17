export function CustomEvent ( type:any, params:any = { bubbles: false, cancelable: false} ) {
    var event = document.createEvent( 'CustomEvent' );
    event.initCustomEvent( type, params.bubbles, params.cancelable, params.detail );
    return event;
}
if ("Event" in window) {
    CustomEvent.prototype = (window as any).Event.prototype;
}
