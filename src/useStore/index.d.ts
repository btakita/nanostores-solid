import { ReadableAtom } from 'nanostores';
import { Store } from 'solid-js/store';

export function useStore<Value>(atom: ReadableAtom<Value>):Store<Value>;
