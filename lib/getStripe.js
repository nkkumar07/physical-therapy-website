import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        // stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
        stripePromise = loadStripe("pk_test_51R9NkjIvAxvbea1bvYjDuNdxSg3wEYeAcFCU7DaopRWmoWf3FZJp6jy5iPbA2QqoJFUBoqNciq4McgcbAcAeysOt00B2r7qKnd");
    }

    return stripePromise;
}

export default getStripe;