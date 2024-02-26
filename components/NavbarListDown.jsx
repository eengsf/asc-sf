const NavbarListDown = ({ value }) => {
  return (
    <div
      className={`bg-white w-60 p-7 top-10 left-0 shadow-lg rounded-xl flex-col gap-3 absolute hidden ${
        value === "pertama"
          ? "group-hover/pertama:flex"
          : "group-hover/kedua:flex"
      }`}>
      <div className="text-sm  text-slate-400">
        <h1>Designer Seacrh</h1>
        <p className="font-normal text-xs">Quickly find your next designer</p>
      </div>
      <div className="text-sm  text-slate-400">
        <h1>Designer Seacrh</h1>
        <p className="font-normal text-xs">Quickly find your next designer</p>
      </div>
    </div>
  );
};

export default NavbarListDown;
