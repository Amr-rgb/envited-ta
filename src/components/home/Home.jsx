import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className="bg-secPurple3 min-h-screen px-4 py-20 flex items-center">
      <div className="container mx-auto flex flex-col justify-center items-center  space-y-8 md:space-y-14 lg:flex-row-reverse">
        <div className="text-center flex flex-col space-y-4 md:space-y-6 lg:items-end lg:text-right">
          <h1 className="font-bold text-4xl text-prTextDark sm:text-5xl md:text-6xl">
            Imagine if
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-prPurple to-prPink">
              {" "}
              Snapchat{" "}
            </span>
            had events.
          </h1>

          <p className="max-w-sm px-8 font-light text-[#4F4F4F] sm:max-w-lg sm:text-lg md:max-w-xl md:text-2xl lg:px-0">
            Easily host and share events with your friends across any social
            media.
          </p>

          <Button className="hidden lg:block" />
        </div>

        <img
          className="w-40 sm:w-48 md:w-64 lg:mr-20 lg:flex-1 lg:max-w-sm"
          src="/assets/Landing_page_image.svg"
          alt="landing page image"
          width={384}
          height={752.633}
        />

        <Button className="lg:hidden" />
      </div>
    </main>
  );
};

export const Button = ({ className }) => {
  return (
    <Link to="/create">
      <button
        className={
          "bg-gradient-to-r from-prPurple to-prPink text-white font-bold p-4 rounded-[10px] sm:w-56 md:w-64 " +
          className
        }
      >
        🎉 Create my event
      </button>
    </Link>
  );
};
