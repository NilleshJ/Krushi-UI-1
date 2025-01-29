// 'use client';
// import { AlertModal } from '@/components/modal/alert-modal';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuTrigger
// } from '@/components/ui/dropdown-menu';
// import { User } from '@/constants/data';
// import { Edit, MoreHorizontal, Trash } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// interface CellActionProps {
//   data: User;
// }

// export const CellAction: React.FC<CellActionProps> = ({ data }) => {
//   const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);
//   const router = useRouter();

//   const onConfirm = async () => { };

//   return (
//     <>
//       <AlertModal
//         isOpen={open}
//         onClose={() => setOpen(false)}
//         onConfirm={onConfirm}
//         loading={loading}
//       />
//       <DropdownMenu modal={false}>
//         <DropdownMenuTrigger asChild>
//           <Button variant="ghost" className="h-8 w-8 p-0">
//             <span className="sr-only">Open menu</span>
//             <MoreHorizontal className="h-4 w-4" />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end">
//           <DropdownMenuLabel>Actions</DropdownMenuLabel>

//           <DropdownMenuItem
//             onClick={() => router.push(`/dashboard/users/${data.id}`)}
//           >
//             <div className='flex items-center hover:text-primary cursor-pointer'>
//               <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className='mr-2'>
//                 <path fill="currentColor" d="m18 20.289l-.708-.689l2.075-2.1H14.5v-1h4.867l-2.075-2.1l.708-.688L21.288 17zm-14.5-.5V6.115q0-.672.472-1.144T5.116 4.5h11.769q.67 0 1.143.472q.472.472.472 1.144v4.901q-.134-.011-.25-.014T18 11t-.25.003q-.115.003-.25.014V6.116q0-.27-.173-.443t-.442-.173H5.115q-.269 0-.442.173t-.173.443V16.5h7.517q-.011.135-.014.25Q12 16.866 12 17t.003.25t.014.25H5.79zM7.116 9.5h7.769v-1h-7.77zm0 4h4.769v-1h-4.77zm-2.616 3v-11z" />
//               </svg>
//               View Questions
//             </div>
//           </DropdownMenuItem>
//           {/* <DropdownMenuItem onClick={() => setOpen(true)}>
//             <Trash className="mr-2 h-4 w-4" /> Delete
//           </DropdownMenuItem> */}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </>
//   );
// };
