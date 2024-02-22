import React from "react";

const Footer = () => {
  return (
    <div class="primary-color-bg code-section border-t font-['Arimo'] bg-green-800">
      <div class="mx-auto max-w-7xl px-5 pb-10 pt-10 lg:pb-24 lg:pt-14">
        <div class="flex flex-col items-center justify-center space-y-5 pb-8 lg:flex-row lg:justify-between lg:space-y-0 lg:pb-14">
          <a class="block">
            <div class="text-3xl font-bold text-white">FakeReceipt</div>
          </a>
          <div class="flex flex-col items-center gap-4 text-white sm:flex-row sm:gap-8 lg:gap-14">
            <a
              href="/#section-one"
              class="transition ease-linear lg:hover:text-black lg:gap-4"
            >
              Features
            </a>
            <a
              href="/#section-two"
              class="transition ease-linear lg:hover:text-black lg:gap-4"
            >
              Pricing
            </a>
            <a
              href="/#contact"
              class="transition ease-linear lg:hover:text-black lg:gap-4"
            >
              Contact
            </a>
            <a
              href="/terms-and-conditions"
              class="transition ease-linear lg:hover:text-black text-white"
            >
              Terms and Conditions
            </a>
            <a
              href="/blogs"
              class="transition ease-linear lg:hover:text-black text-white lg:gap-14"
            >
              Blogs
            </a>
          </div>
          <div class="flex items-center gap-6 lg:gap-10">
            <a class="primary-color-text flex h-10 w-10 items-center  justify-center cursor-pointer rounded-full bg-white transition ease-linear hover:bg-black hover:text-white lg:h-16 lg:w-16 text-green-800">
              <i
                class="fa-brands fa-instagram text-xl lg:text-3xl"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div class="flex items-center gap-6 lg:gap-10">
            <a class="primary-color-text flex h-10 w-10 items-center justify-center cursor-pointer rounded-full bg-white transition ease-linear hover:bg-black hover:text-white lg:h-16 lg:w-16 text-green-800">
              <i
                class="fa-brands fa-facebook text-xl lg:text-3xl"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div class="flex items-center gap-6 lg:gap-10">
            <a class="primary-color-text flex h-10 w-10 items-center cursor-pointer justify-center rounded-full bg-white transition ease-linear hover:bg-black hover:text-white lg:h-16 lg:w-16 text-green-800">
              <i
                class="fa-brands fa-twitter text-xl lg:text-3xl"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center space-y-5 md:flex-row md:justify-between lg:space-y-0">
          <p class="text-center text-lg font-thin text-white md:text-left">
            © FakeReceipt, Inc 2024.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
