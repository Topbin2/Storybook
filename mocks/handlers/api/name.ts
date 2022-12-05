import { rest } from "msw";

export const contactHandlers = [
  rest.get("/api/name", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
