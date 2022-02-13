import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Home = () => {
  const github = useSelector((state) => state.github);
  return (
    <main>
      {
        github.repositories.map((project) => (
          <Card key={project.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
      }
    </main>
  );
};

export default Home;
