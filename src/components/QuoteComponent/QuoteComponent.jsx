import { useState } from "react";

function QuoteComponent() {

    const [quote, setQuote] = useState({ quote: '', author: '', category: '' });

    const fetchQuote = async () => {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
            method: 'GET',
            headers: {
                'X-Api-Key': '1d2T7dQGeOWUxV60YucarQ==lRcrFsbzJO3WFy18',
                'Content-type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        setQuote({quote: data[0].quote, author: data[0].author, category: data[0].category})
    }

    return ( 
        <section className="quote-wrapper">
            <h1>Генератор цитат</h1>
            <p><strong>Цитата:</strong> {quote.quote}</p>
            <p><strong>Автор:</strong> {quote.author}</p>
            <button onClick={fetchQuote}>Найти цитату</button>
        </section> 
    );
}

export default QuoteComponent;