import { z } from 'zod';

//fetch data with ts

const url = 'https://www.course-api.com/react-tours-project';

//shape of incoming data with zod to check at runtime or else error

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
});

type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //shape of incoming data
    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);
    if (!result.success) {
      throw new Error(`invalid data: ${result.error}`);
    }
    return result.data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'there was an error';
    console.log(errorMsg);
    return [];
  }
}

const tours = await fetchData(url);
console.log(tours);
