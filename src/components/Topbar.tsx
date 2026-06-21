export default function Topbar() {
  return (
    <div
      className="
 flex
 justify-between
 items-center
 mb-8
 "
    >
      <div>
        <h1
          className="
 text-3xl
 font-bold
 text-white
 "
        >
          Good Evening, Chetan
        </h1>

        <p
          className="
 text-gray-400
 "
        >
          Portfolio Overview
        </p>
      </div>

      <div
        className="
 bg-white/10
 px-5
 py-3
 rounded-xl
 text-white
 "
      >
        Market Open
      </div>
    </div>
  );
}
