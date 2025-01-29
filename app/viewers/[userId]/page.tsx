'use client';
import { useEffect, useState } from 'react';
import PageContainer from '@/components/layout/page-container';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createViewer, getViewerById, getViewers, updateViewer } from "@/app/api/sign-in"; // Assuming both APIs exist
import ToastAlert from '@/components/ui/toaster';

export default function SettingsPage({ params, getter }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isToast, setToast] = useState(false);
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const [type, setType] = useState<any>(null);
  const viewerId = params?.userId; // Access id from params
  const isEditMode = Boolean(viewerId);
  const [initialData, setInitialData] = useState<UserFormValue | null>(null);
  const formSchema = z.object({
    lastName: z.string().min(2, { message: 'Please enter last name' }),
    firstName: z.string().min(2, { message: 'Please enter first name' }),
    email: z.string().email({ message: 'Please enter a valid email' }),
    mobile: z.string().regex(/^\d{10}$/, { message: 'Mobile number must be exactly 10 digits' }),
    password:
      viewerId && viewerId !== 'create-new'
        ? z.string().optional() // Make password optional in edit mode
        : z
          .string()
          .min(6, { message: 'Password must be at least 6 characters long' })
          .max(16, { message: 'Password cannot exceed 16 characters' })
          .regex(/[a-z]/, {
            message: 'Password must contain at least one lowercase letter'
          })
          .regex(/[A-Z]/, {
            message: 'Password must contain at least one uppercase letter'
          })
          .regex(/\d/, {
            message: 'Password must contain at least one number'
          })
          .regex(/[@$!%*?&#]/, {
            message: 'Password must contain at least one special character'
          })
  });
  type UserFormValue = z.infer<typeof formSchema>;
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      lastName: '',
      firstName: '',
      email: '',
      mobile: '',
      password: ''
    }
  });

  useEffect(() => {
    if (viewerId && viewerId !== 'create-new') {
      getViewerById(viewerId).then((response:any) => {
        // const fetchedData = response?.data?.data?.find(
        //   (user: any) => user.id === viewerId
        // );
        const fetchedData= response?.data?.data
        
        if (fetchedData) {
          const mappedData = {
            firstName: fetchedData.firstName  || '',
            lastName: fetchedData.lastName || '',
            email: fetchedData.email || '',
            mobile: fetchedData.mobile || ''
            //password: undefined
          };
          setInitialData(mappedData); // Set the fetched data to initialData
        }
      });
    }
  }, [viewerId, isEditMode]);

  useEffect(() => {
    if (initialData) {
      form.reset(initialData); // Ensure to reset the form values when initialData changes
    }
  }, [initialData, form]);
  
  const onSubmit = async (data: UserFormValue) => {
    setLoading(true);
    const dataToSubmit = {
      ...data,
      password:
        isEditMode && initialData?.password
          ? initialData.password
          : data.password
    };

    const result =
      viewerId && viewerId !== 'create-new'
        ? await updateViewer(viewerId, dataToSubmit) // Call update API for edit mode
        : await createViewer(dataToSubmit); // Call create API for new viewers

    if (result?.status === 200 || result?.status === 201) {
      // After successful update, refetch the viewer list
      
      // getViewers(data).then((response) => {
      //   const fetchedData = response?.data?.data?.usersListResponse?.find(
      //     (user: any) => user.id === viewerId
      //   );

      //   if (fetchedData) {
      //     const mappedData = {
      //       firstName: fetchedData.fullName.split(' ')[0] || '',
      //       lastName: fetchedData.fullName.split(' ')[1] || '',
      //       email: fetchedData.email || '',
      //       mobile: fetchedData.mobile || '',
      //       password: undefined
      //     };

      //     setInitialData(mappedData); // Update the form data
      //   }
      // });

      router.push('/viewers'); // Navigate back to viewer list page
      setToast(true);
      setType('success');
      setMessage(
        viewerId || viewerId !== 'create-new'
          ? 'Viewer updated successfully!'
          : 'Viewer created successfully!'
      );
    } else {
      setToast(true);
      setType('error');
      setMessage(result?.data?.message || 'An error occurred.');
    }
    setLoading(false);
  };

  const onClose = () => {
    setToast(false);
    setMessage('');
    setType(null);
  }

  return (
    <PageContainer scrollable={true}>
      {isToast && <ToastAlert open={isToast} type={type} message={message} onClose={onClose} />}
      <div className="mb-4 flex flex-col space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          {isEditMode && viewerId !== 'create-new'
            ? 'Edit Viewer'
            : 'Create New Viewer'}
        </h2>
        <div className="flex">
          <main className="w-3/4 rounded-r-lg bg-card p-6 max-h-[74vh]">
            <Form {...form}>
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent default to avoid page reload
                  console.log('Form submitted'); // Check if this is logged
                  form.handleSubmit(onSubmit)(e); // Trigger your form submission logic
                }}
                className="w-96 space-y-4 pt-4"
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {isEditMode && viewerId !== 'create-new'?
                (
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input readOnly placeholder="Enter your email address..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                )
                :
                (
                  <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email address..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                </>
                )}
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter 10 digit mobile number..." {...field} type="number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {!viewerId || viewerId === 'create-new' ? (
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password *</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={show ? 'text' : 'password'}
                              className="border-slate-300 bg-card hover:border hover:border-slate-400"
                              placeholder="Enter your password..."
                              disabled={loading}
                              {...field}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
                              <svg
                                className={`h-5 cursor-pointer text-[#9797a5] ${show ? 'block' : 'hidden'
                                  }`}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                onClick={() => setShow(false)}
                              >
                                <path
                                  fill="currentColor"
                                  d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                                ></path>
                              </svg>
                              <svg
                                className={`h-5 cursor-pointer text-[#9797a5] ${!show ? 'block' : 'hidden'
                                  }`}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                                onClick={() => setShow(true)}
                              >
                                <path
                                  fill="currentColor"
                                  d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : (
                  ''
                )}
                <div className="flex space-x-4">
                  <Button
                    onClick={() => router.push('/viewers')}
                    variant="outline"
                    size="sm"
                    className="ml-auto h-9 w-32 bg-white lg:flex"
                  >
                    Back
                  </Button>
                  <Button
                    disabled={loading}
                    type="submit"
                    size="sm"
                    className={`${loading && 'cursor-not-allowed'
                      } ml-auto h-9 w-32 bg-primary text-card hover:bg-primary-foreground hover:text-card hover:shadow-xl lg:flex`}
                  >
                    {!viewerId || viewerId === 'create-new'
                      ? 'Create Viewer'
                      : 'Update Viewer'}
                    {loading && <svg className="h-5 w-5 animate-spin stroke-orange-500 ml-2" viewBox="0 0 256 256">
                      <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                      <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="24"></line>
                      <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                      </line>
                      <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="24"></line>
                      <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                      </line>
                      <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="24"></line>
                      <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                      <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                      </line>
                    </svg>}
                  </Button>
                </div>
              </form>
            </Form>
          </main>
        </div>
      </div>
    </PageContainer>
  );
}