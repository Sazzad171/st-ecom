import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

const initialState = {
  productItems: []
};

let cartStore = (set) => ({
  ...initialState,

  setProductItems: (val) => set((state) => ({
    productItems: [...state.productItems, val]
  })),

  resetCart: () => set(initialState)
});

// persist the created state
cartStore = persist(cartStore, {
  name: "customer-cart",
  storage: createJSONStorage(() => localStorage),
});

// create the store
const useCartStore = create(cartStore);

export default useCartStore;
