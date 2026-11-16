// HTTP 402 gives a typed error: the code is a fixed list in the schema.
import assert from "node:assert/strict";
import { test } from "node:test";

import { MarktMentor, MarktMentorClient } from "../dist/index.js";

for (const code of ["bundle_exhausted", "overage_limit_reached", "free_quota_exhausted"]) {
    test(`402 ${code} throws PaymentRequiredError with its code`, async () => {
        const fetch = async () =>
            new Response(JSON.stringify({ code, detail: "Used up." }), {
                status: 402,
                headers: { "content-type": "application/json" },
            });
        const client = new MarktMentorClient({ token: "mm_test", baseUrl: "https://api.test", fetch });
        await assert.rejects(client.products.get("9300000012345678"), error => {
            assert.ok(error instanceof MarktMentor.PaymentRequiredError);
            assert.equal(error.statusCode, 402);
            assert.equal(error.body.code, code);
            return true;
        });
    });
}
