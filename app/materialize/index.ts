
export {MaterializeDirective} from "./materialize-directive";

declare var Waves:any;
Waves.displayEffect();

declare var Materialize:any;

export function toast(...args:any[]) {
  Materialize.toast(...args);
}
