import { create } from "zustand";
const gitnameStore = (set) => ({
  Username: "johnndi",

  gitname: (newName) => {
    set(() => {
      return { Username: newName };
    });
  },
});
const usegitnameStore = create(gitnameStore);
export default usegitnameStore;
