import Asection from "@/components/asection.client";
import { APIResponse } from "@/types";

export default async function Home() {

  return (

    <main className="dev p-6 flex-1 grid grid-areas-weather-layout">
      <div className="dev grid-in-A"><Asection/></div>
      <div className="dev grid-in-B"></div>
      <div className="dev grid-in-C"></div>
      <div className="dev grid-in-D"></div>
    </main>
  );
}
