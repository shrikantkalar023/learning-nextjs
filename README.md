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
