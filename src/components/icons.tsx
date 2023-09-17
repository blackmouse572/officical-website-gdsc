import {
  AlertTriangle,
  ArrowRight,
  BriefcaseIcon,
  Check,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  DotIcon,
  DownloadCloudIcon,
  EyeIcon,
  File,
  FileText,
  ForwardIcon,
  HardDriveUpload,
  HeartIcon,
  HelpCircle,
  ImageIcon as Image,
  Laptop,
  LogOutIcon,
  LucideIcon,
  LucideProps,
  Moon,
  MoreVertical,
  PartyPopperIcon,
  PencilIcon,
  Pizza,
  Plus,
  PlusIcon,
  PlusSquareIcon,
  SearchIcon,
  Settings,
  SparkleIcon,
  SunMedium,
  Trash,
  Twitter,
  User,
  UserCircle2Icon,
  X,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  pen: PencilIcon,
  logo: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 307.05 148.56"
      width={'2rem'}
      height={'2rem'}
      {...props}
    >
      <path
        d="m879.29 960 49.86-28.79a24.53 24.53 0 1 0-24.54-42.49l-86.15 49.74Z"
        style={{
          fill: '#fd2b25',
        }}
        transform="translate(-806.19 -885.44)"
      />
      <path
        d="M916.86 1034a24.54 24.54 0 0 0 12.29-45.79L843 938.47A24.53 24.53 0 1 0 818.46 981l86.15 49.75a24.47 24.47 0 0 0 12.25 3.25Z"
        style={{
          fill: '#1f86fb',
        }}
        transform="translate(-806.19 -885.44)"
      />
      <path
        d="M1002.56 1034a24.41 24.41 0 0 0 12.24-3.29L1101 981l-60.06-22-50.63 29.23a24.54 24.54 0 0 0 12.29 45.79Z"
        style={{
          fill: '#ffb800',
        }}
        transform="translate(-806.19 -885.44)"
      />
      <path
        d="M1088.67 984.25a24.53 24.53 0 0 0 12.33-45.78l-86.16-49.74a24.53 24.53 0 1 0-24.53 42.49l86.12 49.78a24.41 24.41 0 0 0 12.24 3.25Z"
        style={{
          fill: '#00aa47',
        }}
        transform="translate(-806.19 -885.44)"
      />
    </svg>
  ),
  close: X,
  send: ForwardIcon,
  sparkle: SparkleIcon,
  share: ForwardIcon,
  chevronLeft: ChevronLeft,
  plusSquare: PlusSquareIcon,
  plus: PlusIcon,
  download: DownloadCloudIcon,
  upload: HardDriveUpload,
  chevronRight: ChevronRight,
  trash: Trash,
  eye: EyeIcon,
  post: FileText,
  dot: DotIcon,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  heart: HeartIcon,
  ellipsis: MoreVertical,
  add: Plus,
  party: PartyPopperIcon,
  briefcase: BriefcaseIcon,
  warning: AlertTriangle,
  user: User,
  userCircle: UserCircle2Icon,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  search: SearchIcon,
  laptop: Laptop,
  signOut: LogOutIcon,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  twitter: Twitter,
  check: Check,
};
