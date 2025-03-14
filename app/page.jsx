import { Button } from './components/Button';

export default function Home() {
  return (
    <div>
      <h1>Välkommen till Next.js!</h1>
      <div className="m-20">
        <Button
          buttonText={'Våra produkter'}
          buttonColor={'#5B3636'}
        />
      </div>
    </div>
  );
}
