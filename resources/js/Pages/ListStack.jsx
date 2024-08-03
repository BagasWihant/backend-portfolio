import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
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

export default function ListStack({ auth, data }) {
    const [isOpen, setIsOpen] = useState(false);
    const [contentDrawer, setContentDrawer] = useState("");
    const deleteData = (id) => {
        axios
            .delete(route("stack.destroy", id))
            .then((res) => {
                router.visit(route("stack.index"), {
                    flash: {
                        success: "Data has been deleted",
                    },
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const editData = (id) => {};

    const drawerDetail = (data) => {
        setIsOpen(true);
        setContentDrawer(() => (
            <>
                <DrawerHeader>
                    <DrawerTitle className="text-center">Detail </DrawerTitle>
                    <DrawerClose className="absolute top-4 right-4 bg-yellow-500 p-2 rounded-md">
                        close
                    </DrawerClose>
                </DrawerHeader>
                <DrawerDescription className="text-center">
                    {data.name}
                </DrawerDescription>
                <div className="p-4 flex flex-col gap-3 max-w-7xl mx-auto">
                    <img alt={data.name} className="h-96" src={`storage/${data.path}`} />
                </div>
                <DrawerFooter className={"max-w-7xl mx-auto"}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button
                            className="w-full bg-red-500 p-2 rounded-md"
                            onClick={() => deleteData(data.id)}
                        >
                            Remove
                        </Button>
                    </div>
                </DrawerFooter>
            </>
        ));
    };

    console.log(data.length);
    return (
        <>
            <Head title="List Stack" />
            <Authenticated
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl dark:text-white text-gray-800  leading-tight ">
                        List Stack
                    </h2>
                }
            >
                <div className="mt-12">
                    <Link
                        href={route("stack.create")}
                        className="bg-amber-600 p-2 rounded-md dark:text-white"
                    >
                        Create Stack
                    </Link>
                    <div className="my-4 shadow-md rounded-lg lg:p-7 p-4 dark:bg-gray-800 dark:text-white bg-white">
                        {data.length > 0 ? (
                            <Table>
                                <TableCaption>
                                    A list general text in english
                                </TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">
                                            name
                                        </TableHead>
                                        <TableHead className="text-right">
                                            Action
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.map((item, i) => (
                                        <TableRow key={i}>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell className="flex justify-center gap-3">
                                                <Button
                                                    className="bg-amber-600 p-2 rounded-md dark:text-white"
                                                    onClick={() =>
                                                        editData(item.id)
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    className="bg-amber-600 p-2 rounded-md dark:text-white"
                                                    onClick={() =>
                                                        drawerDetail(item)
                                                    }
                                                >
                                                    View
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                            "No Stack Available"
                        )}
                    </div>
                </div>
                <Drawer open={isOpen} onOpenChange={setIsOpen}>
                    <DrawerContent className="bg-white dark:bg-gray-600">
                        {contentDrawer}
                        {/* <ScrollArea className="overflow-auto">
                        </ScrollArea> */}
                    </DrawerContent>
                </Drawer>
            </Authenticated>
        </>
    );
}
