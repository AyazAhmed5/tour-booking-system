import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  searchQuery: {
    startDate: string;
    endDate: string;
    priceRange: string;
  } | null;
  bookings: Array<{
    name: string;
    email: string;
    phoneNumber: string;
    numberOfAdults: number;
    numberOfChildren: number;
    paymentMethod: string;
    tourId: string;
  }>;
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
        Omit<UserState["bookings"][number], "tourId"> & {
          availableTourIds: string[];
        }
      >
    ) => {
      const { availableTourIds, ...newBooking } = action.payload;

      const bookedTourIds = state.bookings.map((booking) => booking.tourId);
      const unbookedTourId = availableTourIds.find(
        (tourId) => !bookedTourIds.includes(tourId)
      );

      if (unbookedTourId) {
        state.bookings.push({ ...newBooking, tourId: unbookedTourId });
      } else {
        console.warn("No available tours to book!");
      }
    },
    deleteTour: (state, action: PayloadAction<string>) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.tourId !== action.payload
      );
    },
  },
});

export const { setSearchQuery, addBooking, deleteTour } = userSlice.actions;
export default userSlice.reducer;
