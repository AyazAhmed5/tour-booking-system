import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Booking {
  name: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  paymentMethod: string;
  tourId: string;
}

interface UserState {
  searchQuery: {
    startDate: string;
    endDate: string;
    priceRange: string;
  } | null;
  bookings: Booking[];
}

const initialState: UserState = {
  searchQuery: null,
  bookings: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSearchQuery: (
      state,
      action: PayloadAction<UserState["searchQuery"]>
    ) => {
      state.searchQuery = action.payload;
    },
    addBooking: (
      state,
      action: PayloadAction<
        Omit<Booking, "tourId"> & {
          availableTourIds: string[];
          routerTourId: string;
        }
      >
    ) => {
      const { availableTourIds, routerTourId, ...newBooking } = action.payload;

      const bookedTourIds = state.bookings.map((booking) => booking.tourId);
      const unbookedTourId = availableTourIds.find(
        (tourId) => !bookedTourIds.includes(tourId)
      );

      if (unbookedTourId) {
        state.bookings.push({
          ...newBooking,
          tourId: routerTourId ? routerTourId : unbookedTourId,
        });
      } else {
        console.warn("No available tours to book!");
      }
    },
    deleteTour: (state, action: PayloadAction<string>) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.tourId !== action.payload
      );
    },
    updateBooking: (
      state,
      action: PayloadAction<Partial<Booking> & { tourId: string }>
    ) => {
      const { tourId, ...updatedFields } = action.payload;

      const bookingIndex = state.bookings.findIndex(
        (booking) => booking.tourId === tourId
      );

      if (bookingIndex >= 0) {
        state.bookings[bookingIndex] = {
          ...state.bookings[bookingIndex],
          ...updatedFields,
        };
      } else {
        console.warn(`Booking with tourId ${tourId} not found.`);
      }
    },
  },
});

export const { setSearchQuery, addBooking, deleteTour, updateBooking } =
  userSlice.actions;
export default userSlice.reducer;
