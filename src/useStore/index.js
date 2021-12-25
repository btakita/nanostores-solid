import { createStore, reconcile } from 'solid-js/store';
import { onCleanup } from 'solid-js';

export function useStore(atom) {
  const [state, setState] = createStore(atom.get());
  const unsubscribe = atom.subscribe((newState) => {
    setState(reconcile(newState))
  });
  onCleanup(() => unsubscribe());
  return state;
}