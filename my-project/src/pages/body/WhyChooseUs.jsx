import React from "react";

const HowItWorks = () => {
  return (
    <div>
      <section class="code-section bg-[#faf8f4] font-['Arimo']">
        <div class="mx-auto max-w-7xl px-5 py-10 lg:py-20">
          {/* Top */}
          <div class="relative grid items-center gap-y-5 lg:grid-cols-2 xl:gap-10">
            <div class="relative">
              <h1 class="pr-12 text-4xl/normal font-bold lg:text-5xl/normal xl:text-6xl/normal">
                Why Choose Us?
              </h1>
              <img
                class="dont-replace absolute left-12 top-12 z-10 w-40 lg:top-16 lg:w-64 xl:top-20"
                src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/double-line.svg"
                alt=""
              ></img>
              <img
                class="dont-replace absolute right-0 top-0 z-10 block md:top-4 lg:block xl:w-16"
                src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/four-angle-star.svg"
                alt=""
              />
            </div>
            <p class="font-thin text-gray-500 lg:pl-20 lg:text-2xl">
              At FakeReceipt, we pride ourselves on creating realistic
              modifications with acceptance rates that inspire confidence.
            </p>
            <img
              class="dont-replace absolute right-0 top-40 z-10 hidden lg:block"
              src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/green-curve-shape-choose.svg"
              alt=""
            ></img>
          </div>
          {/* Bottom */}
          <div class="relative mt-10 grid grid-cols-8 gap-2 lg:mt-28 md:col-span-8 lg:col-span-4">
            {/* No_1 */}
            <div class="primary-color-bg relative z-10 col-span-8 flex h-28 flex-col items-center justify-center rounded-2xl p-6 text-white/80 md:col-span-2 md:h-40 md:gap-3 md:rounded-[30px] lg:h-40 lg:p-6 bg-green-800 ml-4">
              <h1 class="font-bold text-xl md:text-2xl lg:text-3xl text-center">
                Flexible Modifications
              </h1>
              <p class="text-center font-thin text-base md:text-base lg:text-base xl:text-base">
                Remove items <br /> ​​Add items <br />​ Increase the total
                amount
              </p>
            </div>
            {/* No_2 */}
            <div class="primary-color-bg relative z-10 col-span-8 flex h-28 flex-col items-center justify-center rounded-2xl p-6 text-white/80 md:col-span-2 md:h-40 md:gap-3 md:rounded-[30px] lg:h-40 lg:p-6 bg-green-800 ml-4">
              <h1 class="font-bold text-xl md:text-2xl lg:text-3xl text-center">
                30-year experience
              </h1>
              <p class="text-center font-thin text-base md:text-base lg:text-base xl:text-base">
                Produce realistic fake <br />
                receipts amount
              </p>
            </div>
            {/* No_3 */}
            <div class="primary-color-bg relative z-10 col-span-8 flex h-28 flex-col items-center justify-center rounded-2xl p-6 text-white/80 md:col-span-2 md:h-40 md:gap-3 md:rounded-[30px] lg:h-40 lg:p-6 bg-green-800 ml-4">
              <h1 class="font-bold text-xl md:text-2xl lg:text-3xl text-center">
                We don't judge
              </h1>
              <p class="text-center font-thin text-base md:text-base lg:text-base xl:text-base">
                Make any necessary
                <br /> modifications for your
                <br />​ business amount
              </p>
            </div>
            <img
              class="dont-replace absolute right-20 top-0 hidden w-40 md:block lg:w-auto"
              src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/choose-orange-shape.svg"
              alt=""
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
