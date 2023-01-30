import logo from './logo.svg';
import './App.css';
import ArticlePage from './ArticlePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Generate a Article for given word or phrase with help of Open AI Chat GPT
        </p>
        
      </header>
   <hr/>
      <div>
      <ArticlePage />
    </div>
    </div>
  );
}

export default App;
