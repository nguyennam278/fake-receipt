import React from "react";

const Index = () => {
  return (
    <>
      <div className="text-sm text-center pt-1">
        This website was made with the Landingsite.ai website builder. Create
        your website today.{" "}
        <span className="text-[#3e58c1] opacity-100">
          <a href="#">Start Now</a>
        </span>
      </div>
      <header className="code-section border-b border-[#DDDEDE] border-t border-[#DDDEDE] bg-[#faf8f4] font-['Arimo'] mt-1">
        <div className="mx-auto flex justify-between items-center max-w-7xl px-5 py-6 border ">
          <div className="font-bold text-3xl text-green-800 cursor-pointer">
            FakeReceipt
          </div>
          <div className="flex justify-between items-center gap-14 text-xl cursor-pointer">
            <div>Features</div>
            <div>Pricing</div>
            <div>Contact</div>
            <div>Blogs</div>
          </div>
          <div>
            <button className="primary-color-bg hidden rounded-[20px] rounded-br-none border px-5 py-2 text-lg font-light text-white transition ease-linear md:inline-block lg:px-8 lg:py-4 bg-green-800 hover:bg-green-700 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Index;
