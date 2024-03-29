import { type Writable, writable } from 'svelte/store';

export const showContentEditor = writable(true);
export const useSnapGrid: Writable<boolean> = writable(false);
export const snapGrid: Writable<Array<number>> = writable([25, 25]);
