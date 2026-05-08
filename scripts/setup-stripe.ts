#!/usr/bin/env node
/**
 * Stripe Product Setup Script for ReconcilerAI
 * Run: npx tsx scripts/setup-stripe.ts
 * 
 * This creates the Stripe product and pricing tiers.
 * Requires STRIPE_SECRET_KEY in environment.
 */

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

async function setup() {
  console.log("🔧 Setting up Stripe products for ReconcilerAI...\n");

  // Create the product
  const product = await stripe.products.create({
    name: "ReconcilerAI",
    description: "AI-powered invoice reconciliation for small businesses",
    images: [], // Add logo URL when available
    metadata: {
      product_key: "reconcilerai",
    },
  });
  console.log(`✅ Product created: ${product.id}`);

  // Create prices for each tier
  const prices = [];

  // Starter: $19/mo
  const starterPrice = await stripe.prices.create({
    product: product.id,
    unit_amount: 1900,
    currency: "usd",
    recurring: { interval: "month" },
    nickname: "Starter",
    metadata: { tier: "starter", invoices: "100" },
  });
  prices.push({ tier: "starter", id: starterPrice.id, amount: "$19/mo" });
  console.log(`✅ Starter price: ${starterPrice.id} ($19/mo)`);

  // Growth: $49/mo
  const growthPrice = await stripe.prices.create({
    product: product.id,
    unit_amount: 4900,
    currency: "usd",
    recurring: { interval: "month" },
    nickname: "Growth",
    metadata: { tier: "growth", invoices: "500" },
  });
  prices.push({ tier: "growth", id: growthPrice.id, amount: "$49/mo" });
  console.log(`✅ Growth price: ${growthPrice.id} ($49/mo)`);

  // Pro: $99/mo
  const proPrice = await stripe.prices.create({
    product: product.id,
    unit_amount: 9900,
    currency: "usd",
    recurring: { interval: "month" },
    nickname: "Pro",
    metadata: { tier: "pro", invoices: "unlimited" },
  });
  prices.push({ tier: "pro", id: proPrice.id, amount: "$99/mo" });
  console.log(`✅ Pro price: ${proPrice.id} ($99/mo)`);

  console.log("\n📋 Summary:");
  console.log(`Product ID: ${product.id}`);
  prices.forEach((p) => console.log(`  ${p.tier}: ${p.id} (${p.amount})`));

  console.log("\n🔑 Add these to your .env:");
  console.log(`STRIPE_PRODUCT_ID=${product.id}`);
  prices.forEach((p) => console.log(`STRIPE_PRICE_${p.tier.toUpperCase()}=${p.id}`));

  // Create webhook endpoint
  try {
    const webhook = await stripe.webhookEndpoints.create({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/webhooks/stripe`,
      enabled_events: [
        "checkout.session.completed",
        "customer.subscription.created",
        "customer.subscription.updated",
        "customer.subscription.deleted",
        "invoice.payment_succeeded",
        "invoice.payment_failed",
      ],
    });
    console.log(`\n✅ Webhook created: ${webhook.id}`);
    console.log(`   Secret: ${webhook.secret}`);
  } catch (e) {
    console.log("\n⚠️  Webhook creation skipped (may already exist or URL not accessible)");
  }

  console.log("\n🎉 Stripe setup complete!");
}

setup().catch(console.error);
