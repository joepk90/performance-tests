# Performance Tests

Example project setup to test performance techniques.

To start the server directed at a certain directory, use the following command:

```sh
npm run serve --path="css-request"
```

### Note:

The intention for this project is to host it as a static site (GitHub pages), so paths to files should be using a relative path starting at projets root directory. A re-write rule has been setup in the serve funtionality to handle re-writes for local development.
