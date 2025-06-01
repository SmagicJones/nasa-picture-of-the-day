import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Button } from "../components/ui/button";
import { Link } from "react-router";

export default function Home({ loaderData }) {
  const data = loaderData;
  return (
    <main>
      <header className="p-4 flex justify-center items-center">
        <div>
          <h1 className="lg:text-6xl md:text-4xl ">
            Nasa's Astronomy Picture of the Day
          </h1>
        </div>
      </header>
      <section>
        <Card>
          <CardHeader>
            <CardTitle>{data.title}</CardTitle>
            <CardDescription>
              Copyright: {data.copyright}, Data: {data.date}
            </CardDescription>
            <CardAction>
              <Link to={data.hdurl} target="_blank">
                <Button>Full HD Image</Button>
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center">
              <img src={data.url} alt={data.title} />
            </div>

            <p className="p-2">{data.explanation}</p>
          </CardContent>
          <CardFooter>
            <p>Built by Bob Holland with Data from Nasa</p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}

export async function loader() {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API}`
  );
  const data = response.json();
  return data;
}
