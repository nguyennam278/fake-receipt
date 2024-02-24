import React from "react";

const FAQS = () => {
  return (
    <div>
      <section class="code-section">
        <div class="bg-green-800 p-6 rounded-lg mt-4">
          <h3 className="text-center font-bold text-xl text-white">FAQS</h3>

          <ul class="list-disc list-inside text-white">
            <details class="mb-2 container text-lg">
              <summary class="cursor-pointer text-lg font-semibold mx-auto text-center">
                How do I upload a receipt?
              </summary>
              <summary class="text-center list-none">
                <p>1</p>
              </summary>
            </details>

            <details class="mb-2 container text-lg">
              <summary class="cursor-pointer text-lg font-semibold mx-auto text-center">
                How do I upload a receipt? Can I specify any total amount for
                the fake receipt?
              </summary>
              <summary class="text-center list-none">
                <p>2</p>
              </summary>
            </details>

            <details class="mb-2 container text-lg">
              <summary class="cursor-pointer text-lg font-semibold mx-auto text-center">
                Is the modified receipt going to look like a real receipt?
              </summary>
              <summary class="text-center list-none">
                <p>3</p>
              </summary>
            </details>

            <details class="mb-2 container text-lg">
              <summary class="cursor-pointer text-lg font-semibold mx-auto text-center">
                Can you create new receipts?
              </summary>
              <summary class="text-center list-none">
                <p>4</p>
              </summary>
            </details>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FAQS;
