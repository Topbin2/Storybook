import { rest } from "msw";

// [Get] test 서버 요청 시 [ 'test1', 'test2' ]를 응답한다.
export const getTests = rest.get("/tests", (req, res, ctx) => {
  return res(ctx.json(["test1", "test2"]));
});
