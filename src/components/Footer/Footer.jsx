const Footer = () => {
  return (
    <section className="container mx-auto flex flex-col justify-center items-center px-4">
      <div className="text-lg md:text-4xl font-semibold text-black text-center">
        <p>Student Special: Discounted rates</p>
        <p>on tropical getaways!</p>
      </div>
      <div className="text-black text-center py-6 md:py-8">
        <p> Let&apos;s embody your beautiful ideas together, simplify the</p>
        <p>way you visualize your next big things.</p>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
        <p className="text-[#2D2E2E]">Privacy Policy</p>
        <p className="text-[#2D2E2E]">Terms of Use</p>
        <p className="text-[#2D2E2E]">Sales and Refunds</p>
        <p className="text-[#2D2E2E]">Legal</p>
        <p className="font-semibold">About</p>
        <p className="font-semibold">Schedules</p>
        <p className="font-semibold">Pricing</p>
        <p className="font-semibold">Membership</p>
        <p className="font-semibold">Joins</p>
        <p>|</p>
      </div>
    </section>
  );
};

export default Footer;
