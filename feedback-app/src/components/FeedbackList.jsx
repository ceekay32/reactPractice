import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <div>No feedback yet</div>;
  }
  return (
    <AnimatePresence>
      <div className="feedback-list">
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
  /*return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );*/
}

export default FeedbackList;
