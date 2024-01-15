import { Counter } from './components/Counter';
import { SimpleForm } from './components/SimpleForm';

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-2xl">
      {/* <Counter /> */}
      <SimpleForm />
    </div>
  );
};

export default Page;
