export const myLogger = (store) => (next) => (action) => {
  console.warn("[ACTION] ", action);
  console.log("[STORE] ", store.getState());
  next(action);
  console.log("[ACTION APPLIED] ");
  console.log("[STORE] ", store.getState());
};
