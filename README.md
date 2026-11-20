# @marktmentor/api

Official TypeScript SDK for the [MarktMentor Public API](https://api.marktmentor.nl):
bol product research and your own store data.

```sh
npm install @marktmentor/api
```

Try it without an account with the public test key `mm_test_demo`: it answers
every endpoint with fixed example data (product `9300000138905032`, niche
`6797`), free. See <https://api.marktmentor.nl/guides/test-key>.

```ts
import { MarktMentorClient } from "@marktmentor/api";

const demo = new MarktMentorClient({ token: "mm_test_demo" });
console.log((await demo.products.get("9300000138905032")).data.title);
```

```ts
import { MarktMentor, MarktMentorClient } from "@marktmentor/api";

const client = new MarktMentorClient({
  token: process.env.MARKTMENTOR_API_KEY!,
});

try {
  const page = await client.products.list({ search: "drinkfles" });
  const history = await client.products.salesHistory("ean:8712345678901", {
    period: "1Y",
    interval: "month",
  });
} catch (error) {
  if (error instanceof MarktMentor.PaymentRequiredError) {
    console.log("Allowance used up:", error.body.code);
  }
}
```

Spending is limited by your account setting, not by the SDK: extra usage above
the bundle is off by default, and the organization owner sets a monthly maximum
in the dashboard. A used-up allowance throws `PaymentRequiredError`;
`error.body.code` is `bundle_exhausted`, `overage_limit_reached` or
`free_quota_exhausted`. The generated reference is in `src/reference.md`.
