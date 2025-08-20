export default (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).send("Method Not Allowed");
  }

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Server Status</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }
        h1, h2 {
          color: #222;
        }
        code {
          background-color: #f2f2f2;
          padding: 0.2em 0.4em;
          border-radius: 3px;
        }
      </style>
    </head>
    <body>
      <h1>Server Status: OK</h1>
      <p>The server is up and running.</p>

      <h2>Webhook Endpoint</h2>
      <p>
        The Stripe webhook handler is located at <code>/api/stripe</code> and listens for <code>POST</code> requests.
      </p>
    </body>
    </html>
  `);
};
