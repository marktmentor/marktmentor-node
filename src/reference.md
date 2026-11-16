# Reference
## Products
<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;MarktMentor.ProductItem, MarktMentor.ProductListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search bol products by text, EAN, brand or category, with filters on sales, revenue, price and rating. Each result has the product data and the metrics per market for the chosen period.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.products.list({
    brand: "Kambukka",
    ean: "5407005143414",
    search: "drinkfles"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.products.list({
    brand: "Kambukka",
    ean: "5407005143414",
    search: "drinkfles"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MarktMentor.ListProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">get</a>(productCode, { ...params }) -> MarktMentor.ProductDetailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get one product by its bol product code, with the metrics per market for the chosen period, its dimensions, commission and the codes of its variants.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.get("9300000138905032");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**productCode:** `string` — Bol product identifier, returned as productCode. Or `ean:` with a 13-digit EAN, for example `ean:8712345678901`: the API then uses the product with that EAN. When more than one product has the EAN, the request gets HTTP 409 with the candidate product codes.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.GetProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">salesHistory</a>(productCode, { ...params }) -> MarktMentor.SalesHistoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the sales figures of a product over time, per market, in calendar buckets of the chosen interval.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.salesHistory("9300000138905032");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**productCode:** `string` — Bol product identifier, returned as productCode. Or `ean:` with a 13-digit EAN, for example `ean:8712345678901`: the API then uses the product with that EAN. When more than one product has the EAN, the request gets HTTP 409 with the candidate product codes.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.SalesHistoryProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">visibilityHistory</a>(productCode, { ...params }) -> MarktMentor.VisibilityHistoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the search visibility of a product over time, per market, in calendar buckets of the chosen interval.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.visibilityHistory("9300000138905032");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**productCode:** `string` — Bol product identifier, returned as productCode. Or `ean:` with a 13-digit EAN, for example `ean:8712345678901`: the API then uses the product with that EAN. When more than one product has the EAN, the request gets HTTP 409 with the candidate product codes.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.VisibilityHistoryProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">categoryRankings</a>(productCode, { ...params }) -> MarktMentor.CategoryRankingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the positions of a product in its bol categories over time.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.categoryRankings("9300000138905032");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**productCode:** `string` — Bol product identifier, returned as productCode. Or `ean:` with a 13-digit EAN, for example `ean:8712345678901`: the API then uses the product with that EAN. When more than one product has the EAN, the request gets HTTP 409 with the candidate product codes.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.CategoryRankingsProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">keywordRankings</a>(productCode, { ...params }) -> MarktMentor.KeywordRankingsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the positions of a product in the bol search results over time, per keyword and market. Name up to 25 keywords with keywordIds (the keywordId values of the keywords endpoint), or get the 10 keywords with the highest search volume.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.keywordRankings("9300000138905032", {
    keywordIds: "6797,6800,5150"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**productCode:** `string` — Bol product identifier, returned as productCode. Or `ean:` with a 13-digit EAN, for example `ean:8712345678901`: the API then uses the product with that EAN. When more than one product has the EAN, the request gets HTTP 409 with the candidate product codes.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.KeywordRankingsProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">keywords</a>(productCode, { ...params }) -> core.Page&lt;MarktMentor.KeywordItem, MarktMentor.KeywordResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the search terms a product ranked for in the period, with the figures per market.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.products.keywords("9300000138905032");
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.products.keywords("9300000138905032");
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**productCode:** `string` — Bol product identifier, returned as productCode. Or `ean:` with a 13-digit EAN, for example `ean:8712345678901`: the API then uses the product with that EAN. When more than one product has the EAN, the request gets HTTP 409 with the candidate product codes.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.KeywordsProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">sellers</a>(productCode, { ...params }) -> MarktMentor.SellerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the sellers that offered a product in the period, with the figures per market, a buy box summary and the changes to the listing.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.sellers("9300000138905032");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**productCode:** `string` — Bol product identifier, returned as productCode. Or `ean:` with a 13-digit EAN, for example `ean:8712345678901`: the API then uses the product with that EAN. When more than one product has the EAN, the request gets HTTP 409 with the candidate product codes.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.SellersProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">reviews</a>(productCode, { ...params }) -> core.Page&lt;MarktMentor.ReviewItem, MarktMentor.ReviewListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the reviews of a product, with rating, text and date. Filter on score, verified purchase and text. By default the list has the reviews of the whole product family, as bol shows them on the product page; includeVariants=false gives only the reviews written for this product.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.products.reviews("9300000138905032", {
    search: "drinkfles"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.products.reviews("9300000138905032", {
    search: "drinkfles"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**productCode:** `string` — Bol product identifier, returned as productCode. Or `ean:` with a 13-digit EAN, for example `ean:8712345678901`: the API then uses the product with that EAN. When more than one product has the EAN, the request gets HTTP 409 with the candidate product codes.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.ReviewsProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.products.<a href="/src/api/resources/products/client/Client.ts">reviewSummary</a>(productCode, { ...params }) -> MarktMentor.ReviewSummaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the review totals of a product: the number of reviews, the average rating, the count per star rating and the most named positive and negative topics. By default over the whole product family; includeVariants=false gives only the reviews written for this product.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.products.reviewSummary("9300000138905032");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**productCode:** `string` — Bol product identifier, returned as productCode. Or `ean:` with a 13-digit EAN, for example `ean:8712345678901`: the API then uses the product with that EAN. When more than one product has the EAN, the request gets HTTP 409 with the candidate product codes.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.ReviewSummaryProductsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Niches
<details><summary><code>client.niches.<a href="/src/api/resources/niches/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;MarktMentor.NicheItem, MarktMentor.NicheListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search niches by text or category. A niche is a group of products that serve the same customer need. Each result has the metrics per market for the chosen period.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.niches.list({
    search: "drinkfles"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.niches.list({
    search: "drinkfles"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MarktMentor.ListNichesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NichesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.niches.<a href="/src/api/resources/niches/client/Client.ts">get</a>(nicheId, { ...params }) -> MarktMentor.NicheDetailResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get one niche with its quality score, competition score and the metrics per market for the chosen period. With comparePeriods the response also has the core metrics for 30, 90 and 365 days.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.niches.get(1);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nicheId:** `number` — Niche identifier returned as nicheId by Search niches.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.GetNichesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NichesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.niches.<a href="/src/api/resources/niches/client/Client.ts">reviewHistory</a>(nicheId, { ...params }) -> MarktMentor.NicheHistoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the number of reviews and the average rating of the products in a niche over time.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.niches.reviewHistory(1);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nicheId:** `number` — Niche identifier returned as nicheId by Search niches.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.ReviewHistoryNichesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NichesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.niches.<a href="/src/api/resources/niches/client/Client.ts">reviewSummary</a>(nicheId, { ...params }) -> MarktMentor.ReviewSummaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the review totals of the products in a niche: the number of reviews, the average rating, the count per star rating and the most named positive and negative topics.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.niches.reviewSummary(1);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nicheId:** `number` — Niche identifier returned as nicheId by Search niches.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.ReviewSummaryNichesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NichesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.niches.<a href="/src/api/resources/niches/client/Client.ts">productDistributions</a>(nicheId, { ...params }) -> MarktMentor.NicheDistributionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get how the products of a niche are spread over price, sales and revenue, for both markets together.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.niches.productDistributions(1);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nicheId:** `number` — Niche identifier returned as nicheId by Search niches.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.ProductDistributionsNichesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NichesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.niches.<a href="/src/api/resources/niches/client/Client.ts">products</a>(nicheId, { ...params }) -> core.Page&lt;MarktMentor.ProductItem, MarktMentor.ProductListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the products in a niche, with the same filters and the same product data as Search products.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.niches.products(1, {
    brand: "Kambukka",
    ean: "5407005143414",
    search: "drinkfles"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.niches.products(1, {
    brand: "Kambukka",
    ean: "5407005143414",
    search: "drinkfles"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nicheId:** `number` — Niche identifier returned as nicheId by Search niches.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.ProductsNichesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NichesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.niches.<a href="/src/api/resources/niches/client/Client.ts">reviews</a>(nicheId, { ...params }) -> core.Page&lt;MarktMentor.ReviewItem, MarktMentor.ReviewListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the reviews of the products in a niche. Filter on score, verified purchase and text.

A successful request counts as one research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.niches.reviews(1, {
    search: "drinkfles"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.niches.reviews(1, {
    search: "drinkfles"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**nicheId:** `number` — Niche identifier returned as nicheId by Search niches.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.ReviewsNichesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NichesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Reference
<details><summary><code>client.reference.<a href="/src/api/resources/reference/client/Client.ts">categories</a>({ ...params }) -> core.Page&lt;MarktMentor.Category, MarktMentor.CategoryListResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The bol category tree. Use it to find the `categoryId` for the product, niche and store filters. Send `level=1` for the top of the tree, `parentId` for the categories below one category, or `search` to find a category by name. Without a filter you get all categories, in the order of the tree.

This request is free: it does not count as a research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.reference.categories({
    search: "drinkfles"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.reference.categories({
    search: "drinkfles"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MarktMentor.CategoriesReferenceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReferenceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reference.<a href="/src/api/resources/reference/client/Client.ts">category</a>(categoryId, { ...params }) -> MarktMentor.CategoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

One category with its level, its parent and its path. Use it to show the name and the path of a `categoryId` that you already have.

This request is free: it does not count as a research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reference.category(1);

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**categoryId:** `number` — Category identifier, returned as categoryId.
    
</dd>
</dl>

<dl>
<dd>

**request:** `MarktMentor.CategoryReferenceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReferenceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reference.<a href="/src/api/resources/reference/client/Client.ts">brands</a>({ ...params }) -> MarktMentor.BrandListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Brand names that hold your search text, the brand with the most products first. The `brand` filter of a product search needs the exact name: copy it from this response.

This request is free: it does not count as a research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reference.brands({
    search: "philips"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MarktMentor.BrandsReferenceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReferenceClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Organization
<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">get</a>() -> MarktMentor.Organization[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the organization that the credential belongs to. Use it to check which organization an API key or a portal connection reads.

This request is free: it does not count as a research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.get();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `OrganizationClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Usage
<details><summary><code>client.usage.<a href="/src/api/resources/usage/client/Client.ts">get</a>() -> MarktMentor.Usage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the research requests of the organization in the current period: what the API bundle includes, what is used and what is left, or the state of the free monthly allowance. Use it to stop before the limit.

This request is free: it does not count as a research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.usage.get();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `UsageClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Store
<details><summary><code>client.store.<a href="/src/api/resources/store/client/Client.ts">overview</a>({ ...params }) -> MarktMentor.StoreOverviewResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the revenue, costs, profit, orders, sales and returns of your own connected bol store for a period, compared with the period before.

This request is free: it does not count as a research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.store.overview();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MarktMentor.OverviewStoreRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StoreClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.store.<a href="/src/api/resources/store/client/Client.ts">products</a>({ ...params }) -> core.Page&lt;MarktMentor.StorePerformanceProductPerformanceItem, MarktMentor.StoreProductsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the products of your own connected bol store that had orders in the period, with sales, revenue, costs and profit per product.

This request is free: it does not count as a research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.store.products();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.store.products();
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MarktMentor.ProductsStoreRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StoreClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.store.<a href="/src/api/resources/store/client/Client.ts">inventory</a>({ ...params }) -> core.Page&lt;MarktMentor.StoreInventoryRow, MarktMentor.StoreInventoryResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the active products of your own connected bol store with their stock and stock state.

This request is free: it does not count as a research request.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.store.inventory({
    ean: "5407005143414"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.store.inventory({
    ean: "5407005143414"
});
while (page.hasNextPage()) {
    page = await page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `MarktMentor.InventoryStoreRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StoreClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

