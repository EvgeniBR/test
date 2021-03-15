import Card from "./components/Card/Card.component";
import Button from "./components/Button/Button.componnet";

function App() {
  

  return (
    <div>
      <Button weight={700} >important</Button>
      <Button weight={300} >not important</Button>


    <Card 
      source={'https://picsum.photos/200/300'}
      title={'lorem'}
      description={'lore picsum'}
      share={'https://picsum.photos/'}
      explore={'https://unsplash.com/'}   
    />
    <Card 
      source={'https://picsum.photos/200/300'}
      title={'lorem'}
      description={'lore picsum'}
      share={'https://picsum.photos/'}
      explore={'https://unsplash.com/'}   
    />
    <Card 
      source={'https://picsum.photos/200/300'}
      title={'lorem'}
      description={'lore picsum'}
      share={'https://picsum.photos/'}
      explore={'https://unsplash.com/'}   
    />
    </div>
  );
}

export default App;
