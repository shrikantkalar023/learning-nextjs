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
