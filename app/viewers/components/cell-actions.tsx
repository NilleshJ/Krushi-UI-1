'use client';
import { deleteViewer, getViewers } from '@/app/api/sign-in';
import { AlertModal } from '@/components/modal/alert-modal';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Edit, MoreHorizontal, Trash } from 'lucide-react';
import {useRouter } from 'next/navigation';
import { useState } from 'react';

interface CellActionProps {
    data: any;
    refetchData: any;
    date: any;
    pageSize: any;
}

export const CellAction: React.FC<CellActionProps> = ({ data , refetchData, date, pageSize }) => {
    console.log("dattaa",data);
    
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const onConfirm = async () => {
        try {
            setLoading(true);

            // Call the delete API
            const result = await deleteViewer(data.id);
            console.log("Delete result:", result);

            if (result?.success === true || result?.status === 200) {
                setOpen(false); // Close the modal
                setLoading(true)
                refetchData(1, date, pageSize); // Trigger the parent function to refresh the list
            } else {
                console.error("Failed to delete viewer.");
            }
        } catch (error) {
            console.error("Error deleting data:", error);
        } finally {
            setLoading(false); // Ensure loading state is reset
        }
    };

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onConfirm} 
                loading={loading}
                description="Are you sure you want to delete this item?" // Modal message
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
                        onClick={() => router.push(`/viewers/${data.id}`)} // Navigate to update page
                    >
                        <Edit className="mr-2 h-4 w-4" /> Update
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => setOpen(true)} // Open the confirmation modal
                    >
                        <Trash className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};