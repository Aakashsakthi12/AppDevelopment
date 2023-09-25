import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define your featured products slice
const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products: [
      {
        id: 1,
        name: 'The Plaza Hotel, New York',
        description: 'The Plaza boasts exquisite rooms and suites, world-class dining options, including the famous Palm Court for afternoon tea, and an array of upscale amenities.',
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/496/472/930/swimming-pool-beach-resort-sea-wallpaper-preview.jpg',
      },
      {
        id: 2,
        name: "Belmond Palace, Rio de Janeiro",
        description: 'Belmond Copacabana Palace is a prestigious luxury hotel located in Rio de Janeiro, Brazil. Situated on the iconic Copacabana Beach.it offers stunning views of the coastline.',
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/653/585/146/life-resort-house-architecture-wallpaper-preview.jpg',
      },
      {
        id: 3,
        name: "Raffles, Singapore",
        description: 'Raffles Hotel Singapore is a renowned luxury hotel located in the heart of Singapore. Established in 1887, it is an iconic symbol of colonial-era charm and elegance.',
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/773/160/965/life-resort-travel-vacation-wallpaper-preview.jpg',
      },
      {
        id: 4,
        name: "The Waldorf Astoria, New York",
        description: 'The Waldorf Astoria New York is a historic and prestigious luxury hotel located in Manhattan, New York City. Established in 1931, it has long been synonymous with elegance and sophistication. ',
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/1007/686/520/resort-travel-sea-vacation-wallpaper-preview.jpg',
      },
      {
        id: 5,
        name: "Claridge’s, London",
        description: 'It is celebrated for its timeless elegance and top-notch service. The hotel features beautifully appointed rooms and suites, a famous afternoon tea service, and Michelin-starred dining.',
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/100/942/366/life-resort-turquoise-sea-wallpaper-preview.jpg',
      },
      {
        id: 6,
        name: "The Ritz, Paris",
        description: 'The hotel boasts lavishly decorated rooms and suites, exquisite dining options, including the Michelin-starred L Espadon restaurant.',
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/859/271/827/the-city-villa-pool-house-in-ibiza-wallpaper-preview.jpg',
      },
      {
        id: 6,
        name: "The Ritz, Paris",
        description: 'The hotel boasts lavishly decorated rooms and suites, exquisite dining options, including the Michelin-starred L Espadon restaurant.',
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/859/271/827/the-city-villa-pool-house-in-ibiza-wallpaper-preview.jpg',
      },
    ],
  },
  reducers: {},
});

const store = configureStore({
  reducer: {
    featuredProducts: featuredProductsSlice.reducer,
    // Add more slices as needed
  },
});

export default store
