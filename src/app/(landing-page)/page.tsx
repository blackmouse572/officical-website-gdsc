import RegisterNewsForm from '../../components/register-news-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello World!</h1>
      <p className="text-2xl">Welcome to GDSC FPTU DN</p>
      <RegisterNewsForm className="mx-auto" />
    </main>
  );
}
