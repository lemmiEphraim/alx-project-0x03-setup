import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import { PageRouteProps } from "../interfaces";

export default function Home() {
  const router = useRouter();

  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center pt-24">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Splash App!
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl px-4">
        Your one-stop platform for everything AI you need.
      </p>

      <div className="flex flex-wrap gap-6 justify-center">
        <Button
          action={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
          buttonLabel="Generate Text"
          buttonBackgroundColor="blue"
        />
        <Button
          action={() => routeToNextPage({ pageRoute: "/text-to-image" })}
          buttonLabel="Text to Image"
          buttonBackgroundColor="green"
        />
        <Button
          action={() => routeToNextPage({ pageRoute: "/counter-app" })}
          buttonLabel="Counter App"
          buttonBackgroundColor="orange"
        />
      </div>
    </div>
  );
}
