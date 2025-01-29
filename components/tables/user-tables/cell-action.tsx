'use client';
import { AlertModal } from '@/components/modal/alert-modal';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { User } from '@/constants/data';
import { Edit, MoreHorizontal, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CellActionProps {
  data: User;
}

export const CellAction: React.FC<CellActionProps> = ({ data }: any) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => { };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
        description={`Do you want to proceed with updating the ${data?.fullName}'s subscription type?`}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-3 w-3 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/users/${data?.id}`)}
          >
            <div className='flex items-center hover:text-primary cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className='mr-2'>
                <path fill="currentColor" d="m18 20.289l-.708-.689l2.075-2.1H14.5v-1h4.867l-2.075-2.1l.708-.688L21.288 17zm-14.5-.5V6.115q0-.672.472-1.144T5.116 4.5h11.769q.67 0 1.143.472q.472.472.472 1.144v4.901q-.134-.011-.25-.014T18 11t-.25.003q-.115.003-.25.014V6.116q0-.27-.173-.443t-.442-.173H5.115q-.269 0-.442.173t-.173.443V16.5h7.517q-.011.135-.014.25Q12 16.866 12 17t.003.25t.014.25H5.79zM7.116 9.5h7.769v-1h-7.77zm0 4h4.769v-1h-4.77zm-2.616 3v-11z" />
              </svg>
              View Questions
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <div className='flex items-center hover:text-primary cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className='mr-2'>
                <path fill="currentColor" d="M10 3.75C8.694 3.75 7.67 4.776 7.67 6S8.696 8.25 10 8.25S12.328 7.224 12.328 6S11.304 3.75 10 3.75M6.17 6c0-2.09 1.733-3.75 3.83-3.75S13.827 3.91 13.827 6S12.096 9.75 10 9.75S6.171 8.09 6.171 6m1.3 5.966c-.181-.117-.319-.124-.383-.107q-.216.06-.429.128l-.984.315a2.27 2.27 0 0 0-1.468 1.404a1.3 1.3 0 0 0-.052.272l-.391 3.699l-.002.013c-.075.527.206.93.633 1.03c1.077.25 2.891.53 5.605.53a.75.75 0 0 1 0 1.5c-2.817 0-4.746-.292-5.944-.57c-1.289-.299-1.941-1.51-1.781-2.687l.388-3.673c.018-.172.05-.385.126-.604a3.77 3.77 0 0 1 2.428-2.342l.985-.316q.242-.077.488-.145c.611-.168 1.192.033 1.596.294c.37.24.974.529 1.714.529c.741 0 1.345-.29 1.715-.53c.404-.26.985-.461 1.596-.293q.245.068.488.145l.985.316a.75.75 0 1 1-.458 1.428l-.984-.315a11 11 0 0 0-.429-.128c-.064-.017-.202-.01-.383.107c-.513.332-1.4.77-2.53.77s-2.016-.438-2.529-.77" /><path fill="currentColor" d="M16.138 13.204a.23.23 0 0 1 .234-.204h1.256a.23.23 0 0 1 .234.204l.063.718a3.4 3.4 0 0 1 1.424.78l.688-.308a.24.24 0 0 1 .303.09l.629 1.032c.06.1.03.227-.07.293l-.624.411a3.05 3.05 0 0 1 0 1.56l.624.41c.1.066.13.194.07.294l-.629 1.032a.24.24 0 0 1-.303.09l-.688-.308a3.4 3.4 0 0 1-1.424.78l-.063.718a.23.23 0 0 1-.234.204h-1.256a.23.23 0 0 1-.234-.204l-.063-.718a3.4 3.4 0 0 1-1.424-.78l-.688.308a.24.24 0 0 1-.303-.09l-.629-1.032a.215.215 0 0 1 .07-.293l.624-.411a3.05 3.05 0 0 1 0-1.56l-.624-.41a.215.215 0 0 1-.07-.294l.629-1.032c.06-.1.192-.139.303-.09l.688.308a3.4 3.4 0 0 1 1.424-.78zM17 18.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" opacity="0.5" />
              </svg>
              Change Type
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
