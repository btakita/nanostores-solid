import { ReadableAtom } from 'nanostores';
import { Accessor } from 'solid-js';

export function useSignal<Value>(atom: ReadableAtom<Value>):Accessor<Value>;
