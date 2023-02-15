import './_app.scss';
import Idriss from './components/Idriss/Idriss';
import AddOns from './components/Idriss/yassine/addOns/addOns';
import Summary from './components/Idriss/yassine/Summary/summary';


function App() {
  return (
    <div className='App'>
      <Idriss />
      <AddOns />
      <Summary />
    </div>
  );
}

export default App;
