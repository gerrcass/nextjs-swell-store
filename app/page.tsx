import ThemeToggler from "@/components/ThemeToggler";

export default function Home() {
  return (
    <div className="flex gap-4 items-center">
      <h1 className="text-black dark:text-white">Hello World!</h1>
      <ThemeToggler />
    </div>
  );
}
