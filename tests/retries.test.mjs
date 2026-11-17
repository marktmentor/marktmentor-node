// Final answers are not retried: 402 (allowance) and 409 (ambiguous EAN).
import assert from "node:assert/strict";
import { test } from "node:test";

import { MarktMentorClient } from "../dist/index.js";

for (const [status, code] of [
    [402, "bundle_exhausted"],
    [409, "ambiguous_ean"],
]) {
    test(`${status} ${code} is sent once`, async () => {
        let calls = 0;
        const fetch = async () => {
            calls += 1;
            return new Response(JSON.stringify({ code, detail: "Final." }), {
                status,
                headers: { "content-type": "application/json", "retry-after": "0" },
            });
        };
        const client = new MarktMentorClient({ token: "mm_test", baseUrl: "https://api.test", fetch });
        await assert.rejects(client.products.get("ean:8712345678901"));
        assert.equal(calls, 1);
    });
}
