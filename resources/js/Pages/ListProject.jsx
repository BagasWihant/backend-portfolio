import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ListProject({ auth, data }) {
    const [content, setContent] = useState([]);
    const [open, setOpen] = useState(false);
    const showDetail = (data) => {
        setOpen(true);
        setContent(() => {
            return (
                <>
                    <DrawerHeader>
                        <DrawerTitle className="text-center">
                            Detail
                        </DrawerTitle>
                        <DrawerClose className="absolute top-4 right-4 bg-yellow-500 p-2 rounded-md">
                            close
                        </DrawerClose>
                    </DrawerHeader>
                    <DrawerDescription className="text-center">
                        {data.name}
                    </DrawerDescription>
                    <div className="p-4 flex flex-col gap-3 max-w-7xl mx-auto">
                        <p>
                            <span className="font-bold">Project Name :</span>
                            {data.name}
                        </p>
                        <p>
                            <span className="font-bold">
                                Small Description:
                            </span>
                            {data.description}
                        </p>
                        <p>
                            <span className="font-bold">
                                Detail Description:
                            </span>
                            {data.long_description}
                        </p>
                        <p>
                            <span className="font-bold">Github :</span>
                            {data.github_url}
                        </p>
                        <p>
                            <span className="font-bold">Demo :</span>
                            {data.demo_url}
                        </p>
                        <p>
                            <span className="font-bold">Stack :</span>
                            {data.stacks.map((stack) => (
                                <span key={stack.id}> {stack.name}, </span>
                            ))}
                        </p>
                        <img
                            src={`/storage/${data.img}`}
                            alt={data.name}
                            className="w-1/2 mx-auto"
                        />
                    </div>
                    <DrawerFooter className={"max-w-7xl mx-auto"}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Button
                                className="w-full bg-red-500 p-2 rounded-md"
                                // onClick={() => deleteData(data.id)}
                            >
                                Remove
                            </Button>
                            <Button
                                className="w-full bg-green-500 p-2 rounded-md"
                                // onClick={() => activatedData(data.id)}
                            >
                                Set Active
                            </Button>
                        </div>
                    </DrawerFooter>
                </>
            );
        });
    };

    return (
        <>
            <Head title="List Project" />
            <Authenticated
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl dark:text-white text-gray-800  leading-tight ">
                        List Project
                    </h2>
                }
            >
                <div className="mt-12">
                    <Link
                        href={route("project.create")}
                        className="bg-purple-600 p-2 rounded-md text-white"
                    >
                        Create Project
                    </Link>
                    <div className="my-4 shadow-md rounded-lg lg:p-7 p-4 dark:bg-gray-800 dark:text-white bg-white">
                        <Table>
                            <TableCaption>
                                A list general text in english
                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">
                                        Project Name
                                    </TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead className="text-right">
                                        Action
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="w-1/2">{item.name}</TableCell>
                                        <TableCell className="">
                                            {item.description}
                                        </TableCell>
                                        <TableCell className="flex gap-5 w-10">
                                            <Link
                                                href={route(
                                                    "project.edit",
                                                    item.id
                                                )}
                                                className="bg-purple-600 p-2 rounded-md dark:text-white"
                                            >
                                                Edit
                                            </Link>
                                            <Button
                                                className="bg-purple-600 p-2 rounded-md dark:text-white"
                                                onClick={() => {
                                                    showDetail(item);
                                                }}
                                            >
                                                View
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <Drawer open={open} onOpenChange={setOpen}>
                        <DrawerContent className="bg-white dark:bg-gray-600">
                            {content}
                        </DrawerContent>
                    </Drawer>
                </div>
            </Authenticated>
        </>
    );
}
