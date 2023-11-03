import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/data/data.json", "utf-8");
  const { title } = JSON.parse(file);
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}
