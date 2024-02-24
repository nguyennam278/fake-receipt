import React from "react";

const GetInTouch = () => {
  return (
    <div>
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
    </div>
  );
};

export default GetInTouch;
