const SubmissionConfirmation = ({ type }) => {
  const isVideo = type === "video";

  return (
    <div
      className={`mt-24 max-w-[600px] mx-auto text-center p-8 rounded-xl shadow-md ${
        isVideo ? "bg-[#f6ffed] shadow-[0_2px_8px_#e6f7ff]" : "bg-[#e6f7ff] shadow-[0_2px_8px_#bae7ff]"
      }`}
    >
      <h1
        className={`text-3xl font-semibold mb-4 ${
          isVideo ? "text-[#52c41a]" : "text-[#1890ff]"
        }`}
      >
        {isVideo ? "Video Submitted Successfully!" : "PDF Submitted Successfully!"}
      </h1>

      <p className="text-lg mb-6">
        Thank you for submitting your team's {isVideo ? "video" : "PDF document"}.
        <br />
        Your submission has been received and is currently under review.
      </p>

      <p className="text-base mb-6">
        {isVideo
          ? "We appreciate your effort and enthusiasm. Please be patient while our evaluation team goes through all entries. Results will be announced soon!"
          : "Our evaluation team will carefully go through all submitted files. Results and feedback will be shared shortly."}
      </p>

      <p className="text-base mb-6">
        {isVideo
          ? "👉 In the meantime, feel free to explore more about our events, success stories, and other exciting opportunities on our website."
          : "📚 Meanwhile, explore more about our ongoing programs and past winners on our website."}
      </p>

      <p
        className={`text-lg font-medium ${
          isVideo ? "text-[#1890ff]" : "text-[#52c41a]"
        }`}
      >
        {isVideo ? "Stay tuned, and best of luck! 🚀" : "Thank you and best wishes! 🌟"}
      </p>
    </div>
  );
};

export default SubmissionConfirmation;
