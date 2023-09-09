import CreateNewUserForm from '@components/create-new-user';
import { Divider } from '@nextui-org/divider';

function UserControlPanel() {
  return (
    <main className="container mx-auto flex justify-center items-center min-h-screen">
      <article className="w-1/2 space-y-8">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">Add new user form</h3>
          <p className="text-sm text-stone-500">
            Please fill in the form below to create a new user. The user will be able to login to the system after the
            form is submitted.
          </p>
        </div>
        <Divider />
        <CreateNewUserForm />
      </article>
    </main>
  );
}

export default UserControlPanel;
