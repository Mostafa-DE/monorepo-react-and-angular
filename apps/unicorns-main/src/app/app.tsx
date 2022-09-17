import styles from './app.module.css';
import {Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {Header} from "@nx-monorepo/unicorns/ui-shared-react";
import {IProduct} from "@nx-monorepo/unicorns/util-interfaces";


export function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const getProducts = async () => {
    const res = await fetch('http://localhost:3001/products');
    const data: IProduct[] = await res.json();
    if (!res.ok) {
      throw new Error('Something went wrong!');
    }
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

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
