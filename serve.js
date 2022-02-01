const handler = require("serve-handler");
const http = require("http");

const server = http.createServer(async (request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options

  // example command: npm run serve --path="css-request"
  const path = process.env.npm_config_path;

  let options = {
    cleanUrls: true,
  };

  if (path) {
    options.public = path;
    options.rewrites = [{ source: `/${path}/:id`, destination: `./:id` }];
  }

  return await handler(request, response, options);
});

server.listen(3000, () => {
  console.log("Running at http://localhost:3000");
});
