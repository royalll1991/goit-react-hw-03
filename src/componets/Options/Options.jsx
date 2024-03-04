const Options = ({feedback, setFeedback, totalFeedback}) => {
    
    const  updateFeedback = (feedbackType) => {
        setFeedback({
            ...feedback,
            [feedbackType]: feedback[feedbackType] + 1
        });
    }

  

    return(
<>
<button onClick={() => updateFeedback('good')}>Good</button>
<button onClick={() => updateFeedback('neutral')}>Neutral</button>
<button onClick={() => updateFeedback('bad')}>Bad</button>

{totalFeedback > 0 && <button onClick={ () => setFeedback({
	good: 0,
	neutral: 0,
	bad: 0,
})}>Reset</button>}
</>
    )
};

export default Options;