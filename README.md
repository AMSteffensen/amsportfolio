# Local First APP with React + Vite + Dexie.js + React Query

## Caching with Dexie.js and React Query
This project uses Dexie.js and React Query to efficiently cache API responses in IndexedDB. 

This setup allows for:

- Persistent Caching: Data is stored in the browser, ensuring quick access even after page reloads or browser restarts.

- Improved Performance: Cached data is served instantly without making unnecessary network requests, reducing load times and improving the user experience.

- Offline Support: The app can display cached data even when offline, providing a seamless experience regardless of network status.

- Background Syncing: React Query periodically updates the cache in the background to keep data fresh while the user browses.
This approach enhances both the user experience and application performance by minimizing network dependency and optimizing data retrieval.