export default function QuoteBox({currentQuote,handleNextButton}){
    const { quote, author } = currentQuote;
    return (
        <>
        <div>{quote}</div>
        <div>{author}</div>
         <button type="button" onClick={()=>handleNextButton()}>Next</button>
        </>
    );
}
