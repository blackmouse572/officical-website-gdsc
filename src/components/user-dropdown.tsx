import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, User } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Icons } from './icons';

function UserDropdown() {
  const { data } = useSession();
  const user = data?.user;
  return (
    <Dropdown>
      <DropdownTrigger className="cursor-pointer">
        <User as="button" name={user?.name} avatarProps={{ src: user?.image ?? '' }} description={user?.role} />
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        itemClasses={{
          title: 'text-sm font-medium',
          base: [
            'data-[hover=true]:text-foreground',
            'data-[hover=true]:bg-default-100',
            'dark:data-[hover=true]:bg-default-50',
            'data-[selectable=true]:focus:bg-default-50',
            'data-[pressed=true]:opacity-70',
            'data-[focus-visible=true]:ring-default-500',
          ],
        }}
      >
        <DropdownSection aria-label={'actions'} showDivider>
          <DropdownItem
            startContent={<Icons.plus className="w-4 h-4" />}
            color="success"
            classNames={
              {
                // title: 'text-success-500',
              }
            }
          >
            <Link href="/editor">New post</Link>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label={'general'} showDivider>
          <DropdownItem startContent={<Icons.userCircle className="w-4 h-4" />}>
            <Link href="/profile" className="">
              Profile
            </Link>
          </DropdownItem>
          <DropdownItem startContent={<Icons.post className={'w-4 h-4'} />}>
            <Link href="/profile/post">My posts</Link>
          </DropdownItem>
          <DropdownItem startContent={<Icons.briefcase className={'w-4 h-4'} />}>
            <Link href="/profile/projects">My projects</Link>
          </DropdownItem>
          <DropdownItem startContent={<Icons.party className={'w-4 h-4'} />}>
            <Link href="/profile/events">Events</Link>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label={'sign-out'}>
          <DropdownItem
            className="text-danger-500 font-medium hover:text-danger-500 "
            startContent={<Icons.signOut className="w-4 h-4" />}
            color="danger"
            classNames={{
              wrapper: 'hover:bg-danger-50',
            }}
          >
            Sign out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}

export default UserDropdown;
