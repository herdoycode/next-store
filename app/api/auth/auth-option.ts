import prisma from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Stripe from "stripe";

const authOption: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  events: {
    createUser: async ({ user }) => {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

      // Create a stripe customer
      if (user.name && user.email) {
        const customer = await stripe.customers.create({
          name: user.name,
          email: user.email,
        });

        // Update user with the stripe customerId
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            stripeCustomerId: user.id,
          },
        });
      }
    },
  },
};

export default authOption;
