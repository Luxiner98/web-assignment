export const ProfileCard = () => {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 mx-10 mt-8 lg:mx-auto lg:w-8/12 overflow-hidden">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/800px-Thomas_Edison2.jpg"
        alt=""
        width="200"
        height="246"
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">
            “Thomas Alva Edison (February 11, 1847 – October 18, 1931) was an
            American inventor and businessman.[1][2][3] He developed many
            devices in fields such as electric power generation, mass
            communication, sound recording, and motion pictures.[4] These
            inventions, which include the phonograph, the motion picture camera,
            and early versions of the electric light bulb, have had a widespread
            impact on the modern industrialized world.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-500 font-semibold">
            Thomas Edison
          </div>
          <div className="text-slate-700 dark:text-slate-700 font-semibold">
            Creator, Light Bulb
          </div>
        </figcaption>
      </div>
    </figure>
  );
};
