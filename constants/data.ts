import { NavItem } from '@/types';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'User Metrics',
    href: '/dashboard/user-metrics',
    icon: 'user',
    label: 'User Metrics'
  },
  {
    title: 'Question Metrics',
    href: '/dashboard/question-metrics',
    icon: 'message',
    label: 'Question Metrics'
  },
  {
    title: 'Users',
    href: '/dashboard/users',
    icon: 'user',
    label: 'users'
  },
  {
    title: 'Viewers',
    href: '/viewers',
    icon: 'addUser',
    label: 'Viewers'
  }
];

export const navItems2: NavItem[] = [
  {
    title: 'Settings',
    href: '/settings',
    icon: 'settings',
    label: 'Dashboard'
  },
  {
    title: 'Security',
    href: '#',
    icon: 'security',
    label: 'employee'
  },
  {
    title: 'Help',
    href: '#',
    icon: 'help',
    label: 'user'
  },
];
