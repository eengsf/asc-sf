const Contact = () => {
  return (
    <div className="w-full px-6">
      <div className="2md:w-3/5 w-full mx-auto flex flex-col gap-8 py-16 text-lg">
        <div>Hi Creative People🖐</div>
        <div>
          <p>
            Presenting Landing Page Design For{" "}
            <span className="font-bold">Real Estate Website.</span>
          </p>
          <p>Hope you guys enjoy it and press "L" if you like it❤️ Thanks!</p>
        </div>
        <div>
          <p>
            <span className="font-bold">Have any wonderful projects?</span>{" "}
            Contact me:
          </p>
          <p>
            📧Mail:{" "}
            <span className="font-bold border-b-2 border-slate-400 cursor-pointer">
              eengsf@example.com
            </span>
          </p>
        </div>
        <div>
          See More Interesting{" "}
          <span className="font-bold border-b-2 border-slate-400 cursor-pointer">
            Projects
          </span>
        </div>
        <div>
          Follow Me On:{" "}
          <span className="font-bold  border-b-2 border-slate-400 cursor-pointer ">
            Instagram
          </span>{" "}
          |{" "}
          <span className="font-bold  border-b-2 border-slate-400 cursor-pointer">
            LinkedIn
          </span>{" "}
          |{" "}
          <span className="font-bold  border-b-2 border-slate-400 cursor-pointer">
            Behance
          </span>{" "}
          |{" "}
          <span className="font-bold  border-b-2 border-slate-400 cursor-pointer">
            Pinterest
          </span>
        </div>
      </div>
    </div>
  );
};
export default Contact;
