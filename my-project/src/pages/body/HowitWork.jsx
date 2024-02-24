import React from "react";

const HowitWork = () => {
  return (
    <div>
      <section class="code-section bg-[#faf8f4] font-['Arimo']">
        {/* Block1 */}
        <div class="mx-auto max-w-7xl px-5 py-10 lg:py-20">
          <div class="relative grid items-center gap-y-5 lg:grid-cols-2 xl:gap-10">
            <div class="relative">
              <h1 class="text-4xl/normal font-bold lg:text-5xl/normal xl:text-6xl/normal">
                How It Works
              </h1>
              <img
                class="dont-replace absolute left-32 top-12 z-10 w-40 lg:top-16 lg:w-64 xl:left-52 xl:top-20"
                src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/double-line.svg"
                alt=""
              ></img>
            </div>
            <p class="font-thin text-gray-500 lg:pl-20 lg:text-lg">
              Learn more about the easy process that has made FakeReceipt a
              go-to solution for document management.
            </p>
            <img
              class="dont-replace absolute left-1/2 top-0 z-10 hidden h-[76px] w-[72px] -translate-x-1/2 lg:block"
              src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/star.svg"
              alt=""
            ></img>
          </div>
          {/* Block 2 */}

          <div class="grid gap-5 pt-10 lg:grid-cols-3 lg:gap-9 lg:pt-20">
            {/* No 1 */}
            <div class="relative rounded-3xl bg-gray-200 p-4 md:pb-20 lg:pb-8">
              <img
                class="relative z-40 h-60 w-full rounded-xl object-cover md:h-72 lg:h-56 xl:h-72 dont-replace"
                src="https://images.unsplash.com/photo-1675169663816-55f0109535f8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw3fHxSZWNlaXB0JTIwRWRpdGluZ3xlbnwwfDB8fHwxNzA4MzcxMDMxfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt=""
                data-media='{"id":"Vj_ST_K66Ek","src":"unsplash","type":"image"}'
                oncontextmenu="return false;"
              />
              <h3 class="pt-8 text-xl font-bold text-black/80">
                Upload Your Receipt
              </h3>
              <p class="pr-24 pt-4 text-lg text-gray-800 sm:pt-12 md:pr-32 md:pt-8">
                Start by uploading your original receipt.
              </p>
              <div class="absolute bottom-0 right-0 flex h-20 w-20 items-end justify-end rounded-tl-3xl bg-[#faf8f4] md:h-28 md:w-28">
                <div class="group relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-200 md:h-24 md:w-24 md:rounded-3xl">
                  <div class="primary-color-text text-3xl text-green-800">
                    <i class="fa-solid fa-upload" aria-hidden="true"></i>
                  </div>
                  <div class="absolute -left-10 bottom-0 z-10 h-12 w-6 rounded-br-3xl bg-gray-200 shadow-[0_15px_0_0_#faf8f4]"></div>
                  <div class="absolute -top-16 right-0 z-10 h-12 w-6 rounded-br-3xl bg-gray-200 shadow-[0_15px_0_0_#faf8f4]"></div>
                </div>
              </div>
            </div>

            {/* No 2 */}
            <div class="relative rounded-3xl bg-gray-200 p-4 md:pb-20 lg:pb-8">
              <img
                class="relative z-40 h-60 w-full rounded-xl object-cover md:h-72 lg:h-56 xl:h-72 dont-replace"
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxMHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTcwNzg2MjM5N3ww&ixlib=rb-4.0.3&q=80&w=1920"
                alt=""
                data-media='{"id":"Vj_ST_K66Ek","src":"unsplash","type":"image"}'
                oncontextmenu="return false;"
              />
              <h3 class="pt-8 text-xl font-bold text-black/80">
                Specify Adjustments
              </h3>
              <p class="pr-24 pt-4 text-lg text-gray-800 sm:pt-12 md:pr-32 md:pt-8">
                Provide how you want the receipt modified.
              </p>
              <div class="absolute bottom-0 right-0 flex h-20 w-20 items-end justify-end rounded-tl-3xl bg-[#faf8f4] md:h-28 md:w-28">
                <div class="group relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-200 md:h-24 md:w-24 md:rounded-3xl">
                  <div class="primary-color-text text-3xl text-green-800">
                    <i class="fa-solid fa-pencil" aria-hidden="true"></i>
                  </div>
                  <div class="absolute -left-10 bottom-0 z-10 h-12 w-6 rounded-br-3xl bg-gray-200 shadow-[0_15px_0_0_#faf8f4]"></div>
                  <div class="absolute -top-16 right-0 z-10 h-12 w-6 rounded-br-3xl bg-gray-200 shadow-[0_15px_0_0_#faf8f4]"></div>
                </div>
              </div>
            </div>

            {/* No 3 */}
            <div class="relative rounded-3xl bg-gray-200 p-4 md:pb-20 lg:pb-8">
              <img
                class="relative z-40 h-60 w-full rounded-xl object-cover md:h-72 lg:h-56 xl:h-72 dont-replace"
                src="https://images.unsplash.com/photo-1675169663816-55f0109535f8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw3fHxSZWNlaXB0JTIwRWRpdGluZ3xlbnwwfDB8fHwxNzA4MzcxMDMxfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt=""
                data-media='{"id":"Vj_ST_K66Ek","src":"unsplash","type":"image"}'
                oncontextmenu="return false;"
              />
              <h3 class="pt-8 text-xl font-bold text-black/80">
                Receive & Utilize
              </h3>
              <p class="pr-24 pt-4 text-lg text-gray-800 sm:pt-12 md:pr-32 md:pt-8">
                Get your modified receipt, ready to use in your mailbox
              </p>
              <div class="absolute bottom-0 right-0 flex h-20 w-20 items-end justify-end rounded-tl-3xl bg-[#faf8f4] md:h-28 md:w-28">
                <div class="group relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-200 md:h-24 md:w-24 md:rounded-3xl">
                  <div class="primary-color-text text-3xl text-green-800">
                    <i
                      class="fa-solid fa-envelope-open-text"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div class="absolute -left-10 bottom-0 z-10 h-12 w-6 rounded-br-3xl bg-gray-200 shadow-[0_15px_0_0_#faf8f4]"></div>
                  <div class="absolute -top-16 right-0 z-10 h-12 w-6 rounded-br-3xl bg-gray-200 shadow-[0_15px_0_0_#faf8f4]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowitWork;
