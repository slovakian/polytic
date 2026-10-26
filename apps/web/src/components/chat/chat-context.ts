import { useSyncExternalStore } from "react";

export interface ChatActions {
  canReset: boolean;
  busy: boolean;
  reset: () => void;
}

type Listener = () => void;

let currentActions: ChatActions = {
  canReset: false,
  busy: false,
  reset: () => {},
};

const listeners = new Set<Listener>();

export const chatStore = {
  getSnapshot(): ChatActions {
    return currentActions;
  },
  getServerSnapshot(): ChatActions {
    return {
      canReset: false,
      busy: false,
      reset: () => {},
    };
  },
  setActions(actions: ChatActions) {
    if (
      currentActions.canReset === actions.canReset &&
      currentActions.busy === actions.busy &&
      currentActions.reset === actions.reset
    ) {
      return;
    }

    currentActions = actions;
    listeners.forEach((listener) => listener());
  },
  subscribe(listener: Listener) {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  },
};

export function useChatActions(): ChatActions {
  return useSyncExternalStore(
    chatStore.subscribe,
    chatStore.getSnapshot,
    chatStore.getServerSnapshot,
  );
}
