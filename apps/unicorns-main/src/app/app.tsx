import styles from './app.module.css';
import {Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {Header} from "@nx-monorepo/unicorns/ui-shared-react";
import {IProduct} from "@nx-monorepo/unicorns/util-interfaces";


export function App() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      "id": 1,
      "name": "List 1",
      "image": "https://source.unsplash.com/1600x900/?cat",
      "description": "This is item #1",
      "price": 100
    },
    {
      "id": 2,
      "name": "List 2",
      "image": "https://source.unsplash.com/1600x900/?dog",
      "description": "This is item #2",
      "price": 200
    },
    {
      "id": 3,
      "name": "List 3",
      "image": "https://source.unsplash.com/1600x900/?bird",
      "description": "This is item #3",
      "price": 300
    },
    {
      "id": 4,
      "name": "Test",
      "image": "https://source.unsplash.com/1600x900/?home",
      "description": "This is item #4",
      "price": 400
    }
  ]);
  const getProducts = async () => {
    const res = await fetch('http://localhost:3001/products');
    const data: IProduct[] = await res.json();
    if (!res.ok) {
      throw new Error('Something went wrong!');
    }
    setProducts(data);
  }

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
      <Header/>
      <div className={styles['main']}>
        {products.map((product: IProduct) => (
          <Card sx={{maxWidth: 345}}>
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </Card>
        ))}
      </div>
    </>
  );
}

export default App;
