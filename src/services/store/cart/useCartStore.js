import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

const initialState = {
  productItems: []
};

let cartStore = (set) => ({
  ...initialState,

  setProductItems: (val) => set((state) => ({
    productItems: [...state.productItems, {id: val, quantity: 1}]
  })),

  setQuantity: (id, quantity) => set((state) => {
    const existingProductIndex = state.productItems.findIndex((item) => item.id === id);
  
    if (existingProductIndex !== -1) {
      return {
        productItems: state.productItems.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: quantity + 1 }
            : item
        ),
      };
    }
  
    return {
      productItems: [...state.productItems, { id, quantity }],
    };
  }),

  removeItem: (id) => set((state) => ({
    productItems: state.productItems.filter((item) => item.id !== id),
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
