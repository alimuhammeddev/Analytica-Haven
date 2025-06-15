import Emoji from "../assets/thumbsupemoji.svg";

const JoinSuccess = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto h-[50vh] w-full flex flex-col items-center justify-center text-[#193D6F] md:text-4xl text-xl font-bold space-y-5">
        <div>
          <img src={Emoji} alt="Thumbs up emoji" />
        </div>
        <p className="text-center">Thanks for joining the community</p>
      </div>
    </>
  );
};

export default JoinSuccess;
