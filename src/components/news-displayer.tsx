import { Card, CardBody, CardHeader, CardProps } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Link } from '@nextui-org/link';
import { Icons } from './icons';

type NewHeaderProps = {
  title: string;
  href: string;
};
type NewDisplayerProps = {
  header: NewHeaderProps;
} & CardProps;

const NewsDisplayer = ({ header, children, ...props }: NewDisplayerProps) => {
  return (
    <Card shadow="sm" {...props}>
      <CardHeader className="px-8">
        <Link href={header.href} className="flex items-center font-semibold">
          <h3>{header.title}</h3>
          <Icons.chevronRight className="mr-2 inline-block" size={22} />
        </Link>
      </CardHeader>
      <Divider />
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default NewsDisplayer;
export type { NewDisplayerProps };
