import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Body = () => {
  return (
    <>
      <section class="code-section relative overflow-hidden bg-[#faf8f4] font-['Arimo']">
        <div class="mx-auto grid max-w-7xl gap-20 px-5 py-10 lg:grid-cols-2 lg:gap-5 lg:py-20">
          <div className="relative  ">
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
              <button className="primary-color-border primary-color-bg rounded-[20px] rounded-br-none border px-5 py-2 text-lg font-light text-white transition ease-linear md:inline-block lg:px-8 lg:py-4 bg-green-800 border-green-600  hover:bg-transparent hover:text-gray-700  cursor-pointer">
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
              ></img>
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
            <div className="relative col-span-5"></div>
            <div className="relative col-span-3 sm:col-span-2"></div>
            <div class="relative col-span-2 sm:col-span-3"></div>
            <div class="primary-color-bg primary-opacity-[10] absolute -right-20 left-0 top-1/2 h-[590px] -translate-y-1/2 rounded-3xl bg-green-800/10"></div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-5 py-10 lg:py-20">
        <div class="relative grid items-center gap-y-5 lg:grid-cols-2 xl:gap-10"></div>

        <div class="grid gap-9 pt-10 lg:grid-cols-4 lg:pt-28">
          <div class="relative rounded-3xl bg-gray-200 px-6 pb-40 pt-8 xl:px-9 xl:pt-12">
            <h3 class="text-2xl md:text-3xl xl:text-4xl">
              <span>Exacting precision</span>
              <span> </span>
              <span class="primary-color-text text-green-800">guaranteed</span>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
