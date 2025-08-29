const Stats = () => {
  return (
    <div className=" w-full bg-white relative">
      {/* White Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "white",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.1) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />
      <div className="container mx-auto w-full px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Stat 1 */}
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-extrabold ">830</span>
            <h3 className="mt-1 text-base text-gray-600">Projects Completed</h3>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-extrabold ">570</span>
            <h3 className="mt-1 text-base text-gray-600">Files Downloaded</h3>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-extrabold ">410</span>
            <h3 className="mt-1 text-base text-gray-600">Happy Clients</h3>
          </div>

          {/* Stat 4 */}
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-extrabold ">800</span>
            <h3 className="mt-1 text-base text-gray-600">Lines of Code</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
