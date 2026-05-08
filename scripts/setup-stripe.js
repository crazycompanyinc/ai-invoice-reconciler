#!/usr/bin/env node
/**
 * Stripe Product Setup Script for ReconcilerAI
 * Run: npx tsx scripts/setup-stripe.ts
 */

// Use require to avoid TS import issues
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function setup() {
  console.log("Setting up Stripe products for ReconcilerAI...");

  const product = await stripe.products.create({
    name: "ReconcilerAI",
    description: "AI-powered invoice reconciliation for small businesses",
    metadata: { product_key: "reconcilerai" },
  });
  console.log("Product created:", product.id);

  const starter = await stripe.prices.create({
    product: product.id,
    unit_amount: 1900,
    currency: "usd",
    recurring: { interval: "month" },
    nickname: "Starter",
  });
  console.log("Starter price:", starter.id, "($19/mo)");

  const growth = await stripe.prices.create({
    product: product.id,
    unit_amount: 4900,
    currency: "usd",
    recurring: { interval: "month" },
    nickname: "Growth",
  });
  console.log("Growth price:", growth.id, "($49/mo)");

  const pro = await stripe.prices.create({
    product: product.id,
    unit_amount: 9900,
    currency: "usd",
    recurring: { interval: "month" },
    nickname: "Pro",
  });
  console.log("Pro price:", pro.id, "($99/mo)");

  console.log("\n--- ENV VARS ---");
  console.log("STRIPE_PRODUCT_ID=" + product.id);
  console.log("STRIPE_PRICE_STARTER=" + starter.id);
  console.log("STRIPE_PRICE_GROWTH=" + growth.id);
  console.log("STRIPE_PRICE_PRO=" + pro.id);
}

setup().catch(console.error);
