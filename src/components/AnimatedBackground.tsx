export default function AnimatedBackground() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div
          className="
          absolute
          top-[-200px]
          left-[-200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-700/20
          blur-[120px]
          animate-pulse
        "
        />

        <div
          className="
          absolute
          bottom-[-150px]
          right-[-150px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-yellow-400/20
          blur-[120px]
          animate-pulse
        "
        />

        <div
          className="
          absolute
          top-[40%]
          left-[50%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-500/10
          blur-[100px]
        "
        />
      </div>
    </>
  );
}
