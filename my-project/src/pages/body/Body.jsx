import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Body = () => {
  return (
    <>
      <section class="code-section relative overflow-hidden bg-[#faf8f4] font-['Arimo']">
        <div class="mx-auto grid max-w-7xl gap-20 px-5 py-10 lg:grid-cols-2 lg:gap-5 lg:py-20">
          <div className="relative">
            <h1 className="min-h-[6rem] pr-24 text-3xl font-bold leading-tight md:text-7xl">
              <div>Seamless</div>
              <div>Receipt</div>
              <div>Modification</div>
              <div>Solutions</div>
            </h1>

            <div className="absolute right-0 top-0">
              <img
                className="testimonial-image dont-replace relative z-20 h-24 w-24 rounded-2xl bg-gray-200 object-cover md:h-24 md:w-24 xl:rounded-[30px]"
                src="https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxfHxSZWNlaXB0JTIwRWRpdGluZ3xlbnwwfDB8fHwxNzA4MzcxMDMxfDA&ixlib=rb-4.0.3&q=80&w=1920"
                alt=""
              />
              <div className="primary-color-bg absolute inset-0 z-0 h-24 w-24 -translate-y-1 translate-x-1 rounded-2xl md:h-24 md:w-24 xl:rounded-[30px] bg-green-800"></div>
            </div>

            <div className="text-[#6b7282] text-lg py-4">
              Transform your transactions with customized, authentic-looking
              receipts tailored to match your specific numeric alterations and
              itemizations.
            </div>

            <div className="relative flex items-center gap-x-8">
              <button className="primary-color-border primary-color-bg rounded-[20px] rounded-br-none border px-5 py-2 text-lg font-light text-white transition ease-linear md:inline-block lg:px-8 lg:py-4 bg-green-800 border-green-600  hover:bg-transparent hover:text-gray-700  cursor-pointer ">
                Get Started
              </button>

              <p className="primary-color-border group flex items-center gap-2 border-b p-2 transition ease-linear md:p-4 lg:hover:border-transparent border-green-800 text-lg text-green-600">
                Learn More
                <i class="primary-color-text fa-regular fa-arrow-up-right text-green-800"></i>
              </p>
              <img
                class="dont-replace absolute right-0 top-10 z-10 w-20 md:w-auto xl:top-0"
                src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/green-curve-shape.svg"
                alt="curve shape"
              ></img>
            </div>
            <div className="grid gap-11 sm:grid-cols-2 pt-16">
              <div className="relative">
                <div className="flex items-center gap-3">
                  <img
                    class="testimonial-image dont-replace h-12 w-12 overflow-hidden rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1522198428577-adf2d374b05b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwyfHxSZWNlaXB0JTIwRWRpdGluZ3xlbnwwfDB8fHwxNzA4MzcxMDMxfDA&ixlib=rb-4.0.3&q=80&w=1920"
                    alt=""
                  />
                  <p class="text-lg font-semibold opacity-80">Jane Doe</p>
                </div>
                <div class="flex items-center gap-3 pb-3 py-3.5">
                  <div class="flex items-center gap-0.5">
                    <i
                      class="fa-solid fa-star text-yellow-400"
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa-solid fa-star text-yellow-400"
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa-solid fa-star text-yellow-400"
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa-solid fa-star text-yellow-400"
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa-solid fa-star text-yellow-400"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>

                <p className="text-sm opacity-80 text-gray-500">
                  I've used FakeReceipt for business expense reporting, and the
                  precision is outstanding. Every receipt matches my exact
                  needs, every time.
                </p>
                <img
                  class="dont-replace absolute -top-5 right-20 z-10"
                  src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/four-angle-star.svg"
                  alt=""
                ></img>
              </div>

              <div className="relative">
                <div className="flex items-center gap-3">
                  <img
                    class="testimonial-image dont-replace h-12 w-12 overflow-hidden rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1522198684868-88edd8463fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwzfHxSZWNlaXB0JTIwRWRpdGluZ3xlbnwwfDB8fHwxNzA4MzcxMDMxfDA&ixlib=rb-4.0.3&q=80&w=1920"
                    alt=""
                  />
                  <p class="text-lg font-semibold opacity-80">Jane Doe</p>
                </div>
                <div class="flex items-center gap-3 pb-3 py-3.5">
                  <div class="flex items-center gap-0.5">
                    <i
                      class="fa-solid fa-star text-yellow-400"
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa-solid fa-star text-yellow-400"
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa-solid fa-star text-yellow-400"
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa-solid fa-star text-yellow-400"
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa-solid fa-star text-yellow-400"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>

                <p className="text-sm opacity-80 text-gray-500">
                  The turnaround time and accuracy of FakeReceipt have made
                  expense management so much easier. Their service is incredibly
                  reliable.
                </p>
                <img
                  class="dont-replace absolute -top-5 right-20 z-10"
                  src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/four-angle-star.svg"
                  alt=""
                ></img>
              </div>
            </div>
          </div>

          {/* right */}
          <div class="relative grid grid-cols-5 gap-x-8 gap-y-4 lg:pl-20">
            <div className="relative col-span-2">
              <div>
                <img
                  class="dont-replace absolute -right-8 bottom-4 z-10 w-24 sm:right-0 sm:w-auto"
                  src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/orange-bubble.svg"
                  alt=""
                />
                <p
                  id="emphasized-word-one"
                  class="absolute -right-1 bottom-14 z-10 -rotate-[25deg] text-xl font-semibold text-white/80 sm:bottom-20 sm:right-10 sm:text-4xl lg:text-3xl xl:text-4xl"
                >
                  Edit
                </p>
              </div>
              <img
                class="dont-replace absolute left-2 top-6"
                src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/four-angle-star.svg"
                alt=""
              />
            </div>

            <div className="relative col-span-3">
              <img
                class="relative z-20 h-40 w-full rounded-[30px] object-cover shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:h-48"
                src="https://images.unsplash.com/photo-1522198648249-0657d7ff242a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw0fHxSZWNlaXB0JTIwRWRpdGluZ3xlbnwwfDB8fHwxNzA4MzcxMDMxfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt="girl"
                data-media='{"id":"wClUbRMCBD8","src":"unsplash","type":"image"}'
                oncontextmenu="return false;"
              />
              <div class="primary-color-bg absolute inset-0 z-[1] h-40 w-full -translate-y-2 translate-x-2 rounded-[30px] sm:h-48 bg-green-800"></div>
            </div>
            <div className="relative col-span-5">
              <img
                class="seo-image high-res-image relative z-20 h-64 w-full rounded-[30px] object-cover shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:h-[340px]"
                src="https://images.unsplash.com/photo-1487537708572-3c850b5e856e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxSZWNlaXB0JTIwRWRpdGluZ3xlbnwwfDB8fHwxNzA4MzcxMDMxfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt="girl"
                data-media='{"id":"SL5d_8ywAAA","src":"unsplash","type":"image"}'
                oncontextmenu="return false;"
              />
              <div class="primary-color-bg absolute inset-0 z-0 h-64 w-full translate-x-2 translate-y-2 rounded-[30px] sm:h-[340px] bg-green-800"></div>
              <img
                class="dont-replace absolute -left-6 -top-6 z-30 w-16 sm:w-auto"
                src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/orange-dots.svg"
                alt=""
              />
              <img
                class="dont-replace absolute -bottom-10 -right-10 z-30 w-16 sm:w-auto"
                src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/orange-dots.svg"
                alt=""
              ></img>
            </div>
            <div className="relative col-span-3 sm:col-span-2">
              <img
                class="relative z-20 h-32 w-full rounded-[30px] object-cover shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] xl:h-40"
                src="https://images.unsplash.com/photo-1686581639043-893261d6b43f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw2fHxSZWNlaXB0JTIwRWRpdGluZ3xlbnwwfDB8fHwxNzA4MzcxMDMxfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                alt="girl"
                data-media='{"id":"ClMubWJQgY0","src":"unsplash","type":"image"}'
                oncontextmenu="return false;"
              />
              <div class="primary-color-bg absolute inset-0 z-[1] h-32 w-full -translate-y-1 translate-x-1 rounded-[30px] xl:h-40 bg-green-800"></div>
            </div>
            <div class="relative col-span-2 sm:col-span-3">
              <img
                class="dont-replace absolute -left-8 top-4 z-10 w-28 sm:left-0 sm:w-auto"
                src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/yellow-bubble.svg"
                alt=""
              />
              <p
                id="emphasized-word-two"
                class="absolute left-0 top-12 z-10 rotate-[28deg] text-xl sm:left-8 sm:text-2xl"
              >
                Custom
              </p>
              <img
                class="dont-replace absolute right-0 top-4 z-10 sm:left-32"
                src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/four-angle-star.svg"
                alt=""
              ></img>
              <img
                class="dont-replace absolute -bottom-10 right-0 z-10 hidden sm:block xl:bottom-0"
                src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/orange-curve-shape.svg"
                alt=""
              ></img>
            </div>
            <div class="primary-color-bg primary-opacity-[10] absolute -right-20 left-0 top-1/2 h-[590px] -translate-y-1/2 rounded-3xl bg-green-800/10"></div>
          </div>
        </div>
      </section>

      {/* 
      Submit Better */}

      <section class="code-section bg-[#faf8f4] font-['Arimo']">
        {/* top */}
        <div class="mx-auto max-w-7xl px-5 py-10 lg:py-20">
          <div class="relative grid items-center gap-y-5 lg:grid-cols-2 xl:gap-10">
            <div class="relative">
              <h1
                id="about-header"
                class="text-4xl/normal font-bold lg:text-5xl/normal xl:text-6xl/normal"
              >
                Submit Better Receipt
              </h1>
              <img
                class="dont-replace absolute left-12 top-12 z-10 w-40 lg:top-16 lg:w-64 xl:top-20"
                src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/double-line.svg"
                alt=""
              ></img>
            </div>
            <p class="font-thin text-gray-500 lg:pl-20 lg:text-lg">
              FakeReceipt specializes in professional-looking, reliable receipt
              adjustments to suit the requirements of individuals seeking
              impeccable financial document management and expense
              reimbursement.
            </p>
            <img
              class="dont-replace absolute left-1/2 top-32 z-10 hidden -translate-x-1/2 lg:block xl:top-40"
              src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/green-curve-shape-easy.svg"
              alt=""
            />
          </div>

          {/* bottom */}
          <div class="grid gap-9 pt-10 lg:grid-cols-4 lg:pt-44">
            <div class="relative rounded-3xl bg-gray-200 px-6 pb-40 pt-8 xl:px-9 xl:pt-12">
              <h3 class="text-2xl md:text-3xl xl:text-4xl">
                <span>Exacting precision</span>
                <span> </span>
                <span class="primary-color-text text-green-800">
                  guaranteed
                </span>
                <span> </span>
                <span id="about-1-text-end" class="">
                  every time
                </span>
              </h3>
              <p class="pt-4 text-lg font-thin text-gray-500">
                Ensure your adjustments meet the highest standards of accuracy
                and professionalism.
              </p>
              <img
                class="dont-replace absolute bottom-4 left-4 h-[100px] w-[105px]"
                src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/swirl.svg"
                alt=""
              />
              <div class="absolute bottom-0 right-0 flex h-24 w-24 items-end justify-end rounded-tl-3xl bg-[#faf8f4] md:h-32 md:w-32">
                <div class="group relative flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 md:h-28 md:w-28">
                  <div class="primary-color-text text-3xl text-green-800">
                    <i
                      class="fa-solid fa-clipboard-check"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div class="absolute -left-10 bottom-0 z-10 h-12 w-6 rounded-br-3xl bg-gray-200 shadow-[0_15px_0_0_#faf8f4] lg:shadow-[0_25px_0_0_#faf8f4]"></div>
                  <div class="absolute -top-16 right-0 z-10 h-12 w-6 rounded-br-3xl bg-gray-200 shadow-[0_15px_0_0_#faf8f4] lg:shadow-[0_25px_0_0_#faf8f4]"></div>
                </div>
              </div>
            </div>

            {/* Số 2 */}
            <div class="relative rounded-3xl bg-gray-200 px-6 pb-40 pt-8 lg:pb-12 lg:pt-40 xl:px-9">
              <h3 class="text-2xl md:text-3xl xl:text-4xl">
                <span>Easy upload and</span>
                <span> </span>
                <span class="primary-color-text text-green-800">rapid</span>
                <span> </span>
                <span>processing</span>
              </h3>
              <p class="pt-4 text-lg font-thin text-gray-500">
                Experience swift modifications with minimal hassle.
              </p>
              <img
                class="dont-replace absolute bottom-10 left-10 h-[76px] w-[82px] lg:top-10"
                src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/globe.svg"
                alt=""
              ></img>
              <div class="absolute bottom-0 right-0 flex h-24 w-24 items-end justify-end rounded-tl-3xl bg-[#faf8f4] md:h-32 md:w-32 lg:top-0 lg:items-start lg:rounded-bl-3xl lg:rounded-tl-none">
                <div class="group relative flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 md:h-28 md:w-28">
                  <div
                    id="about-2-icon"
                    class="primary-color-text text-3xl text-green-800"
                  >
                    <i class="fa-solid fa-rocket" aria-hidden="true"></i>
                  </div>
                  <div class="absolute -bottom-16 right-0 z-10 hidden h-12 w-6 rounded-tr-3xl bg-gray-200 shadow-[0_-25px_0_0_#faf8f4] lg:block"></div>
                  <div class="absolute -left-10 top-0 z-10 hidden h-12 w-6 rounded-tr-3xl bg-gray-200 shadow-[0_-25px_0_0_#faf8f4] lg:block"></div>
                  <div class="absolute -top-16 right-0 z-10 h-12 w-6 rounded-br-3xl bg-gray-200 shadow-[0_15px_0_0_#faf8f4] lg:hidden"></div>
                </div>
              </div>
            </div>

            {/* Số 3 */}
            <div class="relative rounded-3xl bg-gray-200 px-6 pb-40 pt-8 xl:px-9 xl:pt-12">
              <h3 class="text-2xl md:text-3xl xl:text-4xl">
                <span>Accepted in</span>
                <span> </span>
                <span class="primary-color-text text-green-800">99%</span>
                <span> </span>
                <span>of cases</span>
              </h3>
              <p class="pt-4 text-lg font-thin text-gray-500">
                Benefit from high acceptance rates for your altered receipts.
              </p>
              <img
                class="dont-replace absolute bottom-6 left-6 h-[85px] w-[83px]"
                src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/arrow.svg"
                alt=""
              ></img>
              <div class="absolute bottom-0 right-0 flex h-24 w-24 items-end justify-end rounded-tl-3xl bg-[#faf8f4] md:h-32 md:w-32">
                <div class="group relative flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 md:h-28 md:w-28">
                  <div class="primary-color-text text-3xl text-green-800">
                    <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
                  </div>
                  <div class="absolute -left-10 bottom-0 z-10 h-12 w-6 rounded-br-3xl bg-gray-200 shadow-[0_15px_0_0_#faf8f4] lg:shadow-[0_25px_0_0_#faf8f4]"></div>
                  <div class="absolute -top-16 right-0 z-10 h-12 w-6 rounded-br-3xl bg-gray-200 shadow-[0_15px_0_0_#faf8f4] lg:shadow-[0_25px_0_0_#faf8f4]"></div>
                </div>
              </div>
            </div>

            {/* Số 4 */}
            <div class="relative rounded-3xl bg-gray-200 px-6 pb-40 pt-8 xl:px-9 xl:pt-12">
              <div class="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gray-300">
                <i
                  class="fa-solid fa-shield-alt text-3xl text-green-800"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 class="text-2xl md:text-3xl xl:text-4xl">
                <span>Privacy-focused</span>
              </h3>
              <p class="pt-4 text-lg font-thin text-gray-500">
                Your information is secured to the maximum standard. We don't
                store your original and modified receipt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose us */}

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

      {/* How it works */}

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

      {/* Our Pricing */}

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

      {/* FAQS */}

      <section class="code-section">
        <div class="bg-green-800 p-6 rounded-lg mt-4">
          <h3 className="text-center font-bold text-xl text-white">FAQS</h3>

          <ul class="list-disc list-inside text-white">
            <details class="mb-2 container text-lg">
              <summary class="cursor-pointer text-lg font-semibold mx-auto text-center">
                How do I upload a receipt?
              </summary>
            </details>

            <details class="mb-2 container text-lg">
              <summary class="cursor-pointer text-lg font-semibold mx-auto text-center">
                How do I upload a receipt?Can I specify any total amount for the
                fake receipt?
              </summary>
            </details>

            <details class="mb-2 container text-lg">
              <summary class="cursor-pointer text-lg font-semibold mx-auto text-center">
                Is the modified receipt going to look like a real receipt?
              </summary>
            </details>

            <details class="mb-2 container text-lg">
              <summary class="cursor-pointer text-lg font-semibold mx-auto text-center">
                Can you create new receipts?
              </summary>
            </details>
          </ul>
        </div>
      </section>

      {/* 
      Get in touch */}

      <section class="code-section bg-[#faf8f4] font-['Arimo']">
        <div class="mx-auto max-w-7xl px-5 py-10 lg:py-24">
          <div class="relative w-full overflow-hidden rounded-3xl pb-28 pl-20 pr-5 pt-12 md:pr-48 lg:pt-12">
            <div class="relative z-30 ml-auto space-y-4 lg:max-w-lg lg:space-y-8">
              <h3 class="text-right text-5xl font-bold text-white lg:text-left">
                Get In Touch
              </h3>
              <form>
                <div class="flex flex-col space-y-4 md:space-y-6">
                  <div class="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                    <div class="w-full">
                      <div>
                        <label class="text-xl text-white font-bold">Name</label>
                      </div>

                      <div>
                        <input
                          type="text"
                          class="w-full rounded border border-white border-b-gray-300 p-2"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                    <div class="w-full">
                      <div>
                        <label class="text-xl text-white font-bold">
                          Email Address
                        </label>
                      </div>

                      <div>
                        <input
                          type="text"
                          class="w-full rounded border border-white border-b-gray-300 p-2"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                    <div class="w-full">
                      <div>
                        <label class="text-xl text-white font-bold">
                          Message
                        </label>
                      </div>

                      <div>
                        <textarea
                          rows="4"
                          class="w-full rounded border border-white border-b-gray-300 p-2"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-end lg:justify-start pt-2">
                  <button
                    type="submit"
                    class="items-center rounded-[20px] rounded-br-none bg-white px-8 py-4 text-lg text-gray-800 hover:bg-gray-300"
                    fdprocessedid="kiap3"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div class="absolute bottom-0 right-0 z-30 flex h-24 w-24 items-end justify-end rounded-tl-3xl bg-[#faf8f4] md:top-0 md:h-32 md:w-32 md:items-start md:rounded-bl-3xl md:rounded-tl-none lg:h-40 lg:w-40">
              <div class="primary-color-bg group relative flex h-20 w-20 items-center justify-center rounded-3xl md:h-28 md:w-28 lg:h-36 lg:w-36 bg-green-800">
                <i
                  class="fas fa-comment-dots text-5xl text-white"
                  aria-hidden="true"
                ></i>
                <div class="primary-color-bg absolute -bottom-16 right-0 z-10 hidden h-12 w-4 rounded-tr-3xl shadow-[0_-16px_0_0_#faf8f4] md:block bg-green-800"></div>
                <div class="primary-color-bg absolute -left-8 top-0 z-10 hidden h-12 w-4 rounded-tr-3xl shadow-[0_-25px_0_0_#faf8f4] lg:block bg-green-800"></div>
                <div class="primary-color-bg absolute -left-8 bottom-0 z-10 h-12 w-4 rounded-br-3xl shadow-[0_16px_0_0_#faf8f4] md:hidden bg-green-800"></div>
                <div class="primary-color-bg shadow-[0_16px_0_0_#faf8f4]lg:hidden absolute -top-16 right-0 z-10 h-12 w-4 rounded-br-3xl bg-green-800"></div>
              </div>
            </div>
            <div class="primary-color-bg absolute bottom-0 right-0 top-0 z-20 -mr-20 h-full w-2/3 -skew-x-12 sm:w-3/4 bg-green-800"></div>
            <div class="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-black/40 sm:w-1/2 lg:w-2/5"></div>
            <img
              class="absolute left-0 top-0 z-0 h-full w-full object-cover sm:w-1/2 lg:w-2/5"
              src="https://images.unsplash.com/photo-1519403449426-fbfc4ecef59f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw5fHxSZWNlaXB0JTIwRWRpdGluZ3xlbnwwfDB8fHwxNzA4MzcxMDMxfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
              alt=""
              data-media='{"id":"nfJUeowR_h4","src":"unsplash","type":"image"}'
              oncontextmenu="return false;"
            ></img>
            <img
              class="dont-replace absolute bottom-8 right-4 z-20 hidden h-[194px] w-[182px] lg:block"
              src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/template10/yellow-star.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
