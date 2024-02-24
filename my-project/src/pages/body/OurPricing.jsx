import React from "react";

const OurPricing = () => {
  return (
    <div>
      <section class="code-section">
        <div class="bg-gray-100 text-gray-800 p-6 text-center">
          <h2 class="text-6xl font-bold mb-2">Our Pricing</h2>
          <p class="mb-4">Choose a plan that fits your needs.</p>

          <div class="flex justify-center flex-wrap gap-y-6 ">
            {/* No 1 */}
            <div class="mx-4 p-12 border rounded-lg shadow-md ">
              <h3 class="font-bold text-lg">Starter</h3>
              <p class="text-sm">Perfect for individuals</p>
              <p class="text-xl font-bold my-2">$19</p>
              <p class="">Per receipt</p>
              <ul class="list-disc pl-5 my-2 text-left">
                <li>Custom receipt editing</li>
                <li>1 revision included</li>
                <li>Support via email</li>
              </ul>
              <button
                class="px-4 py-2 mt-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-opacity-50"
                fdprocessedid="km1byg"
              >
                Select
              </button>
            </div>

            {/* No 2 */}
            <div class="mx-4 p-12 border rounded-lg shadow-md text-center sm:py-15">
              <h3 class="font-bold text-lg">Pro</h3>
              <p class="text-sm">Ideal for small businesses</p>
              <p class="text-xl font-bold my-2">$59</p>
              <p class="">Up to 3 receipts</p>
              <ul class="list-disc pl-5 my-2 text-left">
                <li>Custom receipt editing</li>
                <li>3 revisions included</li>
                <li>Priority support</li>
              </ul>
              <button
                class="px-4 py-2 mt-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-opacity-50"
                fdprocessedid="km1byg"
              >
                Select
              </button>
            </div>

            {/* No 3 */}
            <div class="mx-4 p-12 border rounded-lg shadow-md text-center sm:py-10 ">
              <h3 class="font-bold text-lg">Enterprise</h3>
              <p class="text-sm">For large organizations</p>
              <p class="text-xl font-bold my-2">Contact us</p>
              <p class="">Unlimited receipts</p>
              <ul class="list-disc pl-5 my-2 text-left">
                <li>Custom receipt editing</li>
                <li>Unlimited revisions</li>
                <li>Priority support</li>
              </ul>
              <button
                class="px-4 py-2 mt-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-opacity-50"
                fdprocessedid="km1byg"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPricing;
