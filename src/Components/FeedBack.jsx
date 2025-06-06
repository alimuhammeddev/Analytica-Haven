import Star from "../assets/star.svg";
import { useState } from "react";

const FeedBack = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Log feedback to console (for now)
    console.log("Feedback submitted:", {
      rating,
      message: feedbackText
    });
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFeedbackText("");
      setRating(0);
      setIsOpen(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col items-end">
      {/* Feedback Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#E0F780] text-[#000] font-semibold px-4 py-3 rounded-l-lg shadow-lg md:hover:bg-[#193D6F] md:hover:text-[#fff] md:hover:border md:hover:border-transparent-500 transition-colors duration-200"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        Feedback
      </button>

      {/* Feedback Form */}
      {isOpen && (
        <div className="bg-white p-6 rounded-tl-lg rounded-bl-lg shadow-xl w-80 border border-gray-200 mr-1">
          {isSubmitted ? (
            <div className="text-center py-8">
              <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">Thank you!</h3>
              <p className="mt-1 text-sm text-gray-500">Feedback submitted successfully.</p>
            </div>
          ) : (
            <div className="text-[#193D6F] space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Help us Improve</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              
              <p className="text-black font-semibold text-sm">
                How would you rate your experience?
              </p>
              
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <img 
                    key={i} 
                    src={Star} 
                    alt="Star" 
                    className={`w-6 h-6 cursor-pointer hover:opacity-80 ${i < rating ? 'opacity-100' : 'opacity-40'}`}
                    onClick={() => setRating(i + 1)}
                  />
                ))}
              </div>
              
              <textarea
                name="message"
                id="message"
                placeholder="Your feedback..."
                className="p-3 w-full h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#193D6F] resize-none text-sm"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
              ></textarea>
              
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-[#193D6F] border border-[#193D6F] px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-[#E0F780] font-semibold px-4 py-2 rounded-lg hover:bg-[#193D6F] hover:text-white transition-colors duration-200 text-sm"
                  disabled={!feedbackText.trim()}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FeedBack;