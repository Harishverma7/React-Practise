import React, { useState, useEffect } from "react";

function Api() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://hverma1.myshopify.com/api/2021-07/graphql.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": "28a138f4b8197904e0db13dec0bed94c",
        },
        body: JSON.stringify({
          query: `
            query {
              products(first: 10) {
                edges {
                  node {
                    id
                    title
                    handle
                    description
                    images(first: 1) {
                      edges {
                        node {
                          originalSrc
                          altText
                        }
                      }
                    }
                    variants(first: 1) {
                      edges {
                        node {
                          price
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.data.products.edges))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.node.id}>
            <h2>{product.node.title}</h2>
            <img src={product.node.images.edges[0].node.originalSrc} alt={product.node.images.edges[0].node.altText} />
            <p>{product.node.description}</p>
            <p>Price: ${product.node.variants.edges[0].node.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
