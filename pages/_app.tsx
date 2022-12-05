import "../styles/globals.css";
import type { AppProps } from "next/app";

// if (process.env.NEXT_PUBLIC_API_MOCKING === "true") {
//   import("@/mocks").then(({ setupMocks }) => {
//     setupMocks();
//   });
// }
if (process.env.NEXT_PUBLIC_API_MOCKING === "true") {
  import("../mocks").then(({ setupMocks }) => {
    setupMocks();
  });
}

export default function App({ Component, pageProps }: AppProps) {
  // if (process.env.NODE_ENV === "development") {
  //   if (typeof window === "undefined") {
  //     const { server } = require("../mocks/server");
  //     server.listen();
  //   } else {
  //     const { worker } = require("../mocks/browser");
  //     worker.start();
  //   }
  // }

  // if (typeof window === "undefined") {
  //   (async () => {
  //     console.log("server");
  //     const { server } = await import("@mocks/server");
  //     server.listen();
  //   })();
  // } else {
  //   (async () => {
  //     console.log("browser");
  //     const { worker } = await import("@mocks/browser");
  //     worker.start();
  //   })();
  // }

  return <Component {...pageProps} />;
}
