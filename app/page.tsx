import Link from "next/link";

const Page = () => {
  return (
    <div className=" text-white">
      <Link href="/analytics">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to analytics
        </button>
      </Link>
    </div>
  );
};

export default Page;
