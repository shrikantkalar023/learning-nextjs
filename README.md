1. **CSR vs SSR**:

   - large bundles
   - resource intensive
   - No SEO
   - less secure (api keys etc.)

2. **SSR**:

   - can't listen to browser events
   - access browser APIs
   - Maintain state, Use effect

3. **Data fetching on client** always results in one extra roundtrip to server. **When possible always fetch data on server**.

4. **Data Sources**

   - memory
   - file system
   - network (slowest)

5. **Nextjs** has file system based data cache. Only works with fetch(). Doesn't work with axios.

6. **Static Rendering (SSG)**: Render at build time. For static data. **Dynamic Rendering (SSR)**: Render at request time. both are server side rendering techniques.

7. only put **truly global styles** in global.css. For component specific styles use module.css.

8. **CSS Modules** are scoped to the component/page to avoid styles conflicts. card-component is not a valid class name in css modules. It should be cardComponent, because all the class names are imported as a JS object.

9. With app router we can co-locate our project files components & pages, as only page.tsx is accessible to the client.

10. <Link> component is used for client side navigation. It doesn't do a full page refresh.

11. We can use **query string params** to pass data/state between pages on server side.

12. <Link>

- only downloads the content of the target page
- Prefetches the links in the viewport.
- Caches pages on the client only for one session & clears on full reload.

13. Suspense is used to show a fallback UI while the component is loading. Suspense **streams** the data to the client, request - response cycle is not terminated.

14. To show loading UI with suspense for each page, we can either add suspense in layout file or add loading.tsx file.

15. Handle not found pages with not-found.tsx files.

16. Handle unexpected errors with **error.tsx** files. We can have error.tsx file at multiple levels for custom error handling.

17. To handle errors in the root layout file, we need to use **global-error.tsx** file. error.tsx file should be client side rendered.

18. Error & Reset (retry) function is automatically passed to the error.tsx file.

19. In a given folder (url segment), we can either have a page file or a route file. Page file for markup & route file for api routes.

20. Even if we aren't using request:NextRequest, we need it so that nextjs doesn't cache the api response
