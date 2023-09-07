import LogoutButton from '@components/logout-button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, User } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Icons } from './icons';

const USER_DROPDOWN_ITEMS = [
  {
    title: 'Profile',
    href: '/profile',
    icon: <Icons.user className="w-4 h-4" />,
  },
  {
    title: 'My posts',
    href: '/profile/blog',
    icon: <Icons.post className="w-4 h-4" />,
  },
  {
    title: 'My projects',
    href: '/profile/projects',
    icon: <Icons.briefcase className="w-4 h-4" />,
  },
  {
    title: 'Events',
    href: '/profile/events',
    icon: <Icons.party className="w-4 h-4" />,
  },
];

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
            startContent={<Icons.plusSquare className="w-4 h-4" />}
            color="success"
            as={Link}
            className="data-[hover=true]:bg-success-100/70 data-[hover]:text-success-600"
            //@ts-ignore
            href="/editor"
          >
            New post
          </DropdownItem>
        </DropdownSection>
        <DropdownSection aria-label={'general'} showDivider>
          {USER_DROPDOWN_ITEMS.map((item) => (
            <DropdownItem
              key={item.title}
              startContent={item.icon}
              as={Link}
              //@ts-ignore
              href={item.href}
            >
              {item.title}
            </DropdownItem>
          ))}
        </DropdownSection>
        <DropdownSection aria-label={'sign-out'}>
          <DropdownItem className="text-danger-500 font-medium hover:bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:ring-transparent data-[hover=true]:outline-none data-[focus-visible=true]:ring-transparent data-[hover=true]:border-0">
            <LogoutButton variant="flat" size={'sm'} className="w-full m-0" />
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}

export default UserDropdown;
