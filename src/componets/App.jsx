import { useEffect, useState } from 'react'
import './App.css'
import Description from './Description/Description'
import Feedback from './Feedback/Feedback'
import Options from './Options/Options'



function App() {

 const saveFeedback = JSON.parse(localStorage.getItem('all-feedback')) || {
  good: 0,
  neutral: 0,
  bad: 0,
};

const [feedback, setFeedback] = useState(saveFeedback);

const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
const Notification = feedback.good === 0 && feedback.neutral === 0 && feedback.bad === 0 ? (
  <p>No feedback yet</p>
) : null;

 const positiveFeedback = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);

 useEffect(() => {
  window.localStorage.setItem( "all-feedback", JSON.stringify(feedback)), [feedback];
 })
  return (
    <>
      <Description/>
      <Options
      feedback={feedback}
      setFeedback = {setFeedback}
      totalFeedback = {totalFeedback}/>

      {Notification}
     {Notification === null && <Feedback 
      feedback = {feedback}
      totalFeedback = {totalFeedback}
      positive = {positiveFeedback}
      />}
      
    </>
  )
}

export default App
