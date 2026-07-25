const next = require('next');
const app = next({ dev: true });
app.prepare().then(() => {
  console.log("Ready!");
}).catch(err => {
  console.error("Error preparing Next.js:");
  console.error(err);
});
