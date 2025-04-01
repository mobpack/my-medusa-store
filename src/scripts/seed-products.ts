import { createProductsWorkflow } from "@medusajs/medusa/core-flows"
import { ExecArgs } from "@medusajs/framework/types"
import { ContainerRegistrationKeys, ProductStatus } from "@medusajs/framework/utils"

export default async function seedProducts({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  
  logger.info("Starting to seed products...")

  logger.info("Seeding additional products...")
  const { result: productsResult } = await createProductsWorkflow(container).run({
    input: {
      products: [
        {
          title: "Premium Wireless Headphones",
          subtitle: "High-quality audio experience",
          description: "Experience crystal clear sound with our premium wireless headphones",
          status: ProductStatus.PUBLISHED,
          
          options: [
            {
              title: "Color",
              values: ["Black", "White"]
            }
          ],
          variants: [
            {
              title: "Black",
              prices: [
                {
                  currency_code: "eur",
                  amount: 19900, // Regular price: 199 EUR
                },
                {
                  currency_code: "eur",
                  amount: 15900, // Sale price: 159 EUR
                  price_list_id: "sale-prices", // This will create a price list for sales
                },
              ],
              inventory_quantity: 100,
            },
          ],
        },
        {
          title: "Smart Fitness Watch",
          subtitle: "Track your health and fitness",
          description: "Advanced fitness tracking with heart rate monitoring and GPS",
          status: ProductStatus.PUBLISHED,
          
          options: [
            {
              title: "Color",
              values: ["Black", "White"]
            }
          ],
          variants: [
            {
              title: "Silver",
              prices: [
                {
                  currency_code: "eur",
                  amount: 24900, // Regular price: 249 EUR
                },
                {
                  currency_code: "eur",
                  amount: 19900, // Sale price: 199 EUR
                  price_list_id: "sale-prices",
                },
              ],
              inventory_quantity: 50,
            },
          ],
        },
        {
          title: "Portable Power Bank",
          subtitle: "Fast charging on the go",
          description: "20000mAh capacity with fast charging capability",
          status: ProductStatus.PUBLISHED,
          
          options: [
            {
              title: "Color",
              values: ["Black", "White"]
            }
          ],
          variants: [
            {
              title: "Standard",
              prices: [
                {
                  currency_code: "eur",
                  amount: 4900, // Regular price: 49 EUR
                },
                {
                  currency_code: "eur",
                  amount: 3900, // Sale price: 39 EUR
                  price_list_id: "sale-prices",
                },
              ],
              inventory_quantity: 200,
            },
          ],
        },
      ],
    },
  })

  logger.info("Successfully seeded additional products with sale prices!")
  return productsResult
}
